import { z } from "zod";

export const trainerSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters"),

  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number"),

  email: z
    .string()
    .email("Enter a valid email address"),

  qualification: z
    .string()
    .min(1, "Please select your qualification"),

  experience: z
    .string()
    .min(1, "Please select your experience"),

  skills: z
    .array(z.string())
    .min(1, "Select at least one skill"),

  availability: z
    .string()
    .min(1, "Please select availability"),

  salary: z
    .string()
    .min(1, "Please enter your expected salary"),
});

export type TrainerFormData = z.infer<typeof trainerSchema>;
