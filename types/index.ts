export interface WorkshopFormData {
  fullName: string;
  designation: string;
  organization: string;
  phone: string;
  email: string;
  city: string;
  service: string;
  preferredDate: string;
  message?: string;
  agree: boolean;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}

export type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';
