export const googleFormConfig = {
  formUrl: process.env.GOOGLE_FORM_URL || '',
  entryIds: {
    fullName: process.env.GOOGLE_FORM_ENTRY_NAME || '',
    designation: process.env.GOOGLE_FORM_ENTRY_DESIGNATION || '',
    organization: process.env.GOOGLE_FORM_ENTRY_ORG || '',
    phone: process.env.GOOGLE_FORM_ENTRY_PHONE || '',
    email: process.env.GOOGLE_FORM_ENTRY_EMAIL || '',
    city: process.env.GOOGLE_FORM_ENTRY_CITY || '',
    service: process.env.GOOGLE_FORM_ENTRY_SERVICE || '',
    preferredDate: process.env.GOOGLE_FORM_ENTRY_DATE || '',
    message: process.env.GOOGLE_FORM_ENTRY_MESSAGE || '',
  },
};

export function isGoogleFormConfigured(): boolean {
  return Boolean(
    googleFormConfig.formUrl &&
      googleFormConfig.entryIds.fullName &&
      googleFormConfig.entryIds.email
  );
}
