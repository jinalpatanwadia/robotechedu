import { googleFormConfig } from '@/lib/google-form-config';
import type { WorkshopFormData } from '@/types';

export async function submitToGoogleForm(
  data: WorkshopFormData
): Promise<{ success: boolean; message: string }> {
  if (!googleFormConfig.formUrl) {
    return {
      success: false,
      message: 'Google Form URL is not configured. Please set GOOGLE_FORM_URL.',
    };
  }

  const params = new URLSearchParams();
  params.append(googleFormConfig.entryIds.fullName, data.fullName);
  params.append(googleFormConfig.entryIds.designation, data.designation);
  params.append(googleFormConfig.entryIds.organization, data.organization);
  params.append(googleFormConfig.entryIds.phone, data.phone);
  params.append(googleFormConfig.entryIds.email, data.email);
  params.append(googleFormConfig.entryIds.city, data.city);
  params.append(googleFormConfig.entryIds.service, data.service);
  params.append(googleFormConfig.entryIds.preferredDate, data.preferredDate);
  if (data.message) {
    params.append(googleFormConfig.entryIds.message, data.message);
  }

  try {
    const response = await fetch(googleFormConfig.formUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });

    if (!response.ok) {
      return {
        success: false,
        message: 'Failed to submit. Please try again or contact us directly.',
      };
    }

    return {
      success: true,
      message: 'Your workshop inquiry has been submitted successfully!',
    };
  } catch {
    return {
      success: false,
      message: 'Network error. Please check your connection and try again.',
    };
  }
}
