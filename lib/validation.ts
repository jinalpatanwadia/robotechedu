import { z } from 'zod';

export const workshopSchema = z.object({
  fullName: z
    .string()
    .min(2, 'Full name must be at least 2 characters')
    .max(100, 'Full name is too long'),
  designation: z
    .string()
    .min(2, 'Designation is required')
    .max(100, 'Designation is too long'),
  organization: z
    .string()
    .min(2, 'School/College name is required')
    .max(200, 'Name is too long'),
  phone: z
    .string()
    .regex(/^[+]?[0-9\s\-()]{10,15}$/, 'Enter a valid phone number'),
  email: z.string().email('Enter a valid email address'),
  city: z
    .string()
    .min(2, 'City is required')
    .max(100, 'City name is too long'),
  service: z.string().min(1, 'Please select a service'),
  preferredDate: z.string().min(1, 'Please select a preferred date'),
  message: z
    .string()
    .max(1000, 'Message is too long')
    .optional()
    .or(z.literal('')),
  agree: z.literal(true, {
    errorMap: () => ({ message: 'You must agree to be contacted' }),
  }),
});

export type WorkshopSchema = z.infer<typeof workshopSchema>;
