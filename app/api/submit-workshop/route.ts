import { NextRequest, NextResponse } from 'next/server';
import { workshopSchema } from '@/lib/validation';
import { submitToGoogleForm } from '@/services/google-form-service';
import { isGoogleFormConfigured } from '@/lib/google-form-config';
import type { ApiResponse } from '@/types';

const MAX_BODY = 10 * 1024; // 10KB

export async function POST(
  req: NextRequest
): Promise<NextResponse<ApiResponse>> {
  try {
    // Rate limiting (basic, in-memory)
    const ip =
      req.headers.get('x-forwarded-for') ||
      req.headers.get('x-real-ip') ||
      'unknown';
    const now = Date.now();
    if (!rateLimitStore.has(ip)) {
      rateLimitStore.set(ip, []);
    }
    const timestamps = rateLimitStore.get(ip)!;
    const recent = timestamps.filter((t) => now - t < 60_000);
    if (recent.length >= 5) {
      return NextResponse.json(
        {
          success: false,
          message: 'Too many requests. Please wait a minute and try again.',
        },
        { status: 429 }
      );
    }
    recent.push(now);
    rateLimitStore.set(ip, recent);

    // Body size check
    const contentLength = req.headers.get('content-length');
    if (contentLength && parseInt(contentLength) > MAX_BODY) {
      return NextResponse.json(
        { success: false, message: 'Request body too large.' },
        { status: 413 }
      );
    }

    const body = await req.json();

    // Validation
    const parsed = workshopSchema.safeParse(body);
    if (!parsed.success) {
      const firstError = parsed.error.issues[0];
      return NextResponse.json(
        {
          success: false,
          message: firstError?.message || 'Validation failed.',
        },
        { status: 400 }
      );
    }

    // Check Google Form config
    if (!isGoogleFormConfigured()) {
      // Graceful fallback: accept but warn
      return NextResponse.json({
        success: true,
        message:
          'Inquiry received! Google Form is not yet configured — we will still process your request.',
      });
    }

    // Submit to Google Form
    const result = await submitToGoogleForm(parsed.data);

    return NextResponse.json(
      { success: result.success, message: result.message },
      { status: result.success ? 200 : 500 }
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: 'An unexpected error occurred. Please try again.',
      },
      { status: 500 }
    );
  }
}

// Simple in-memory rate limiting
const rateLimitStore = new Map<string, number[]>();
