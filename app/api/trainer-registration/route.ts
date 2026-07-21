import { NextResponse } from "next/server";
import { trainerSchema } from "@/lib/trainer-schema";
import { submitTrainerApplication } from "@/services/trainer-form-service";
import { isTrainerFormConfigured } from "@/lib/trainer-form-config";

export async function POST(req: Request) {
  try {
    if (!isTrainerFormConfigured()) {
      return NextResponse.json(
        {
          success: false,
          message: "Trainer form is not configured.",
        },
        { status: 500 }
      );
    }

    const body = await req.json();

    const parsed = trainerSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          errors: parsed.error.flatten(),
        },
        { status: 400 }
      );
    }

    const success = await submitTrainerApplication(parsed.data);

    if (!success) {
      return NextResponse.json(
        {
          success: false,
          message: "Unable to submit application.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Application submitted successfully.",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      { status: 500 }
    );
  }
}
