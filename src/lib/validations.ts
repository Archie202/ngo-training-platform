import { z } from "zod";

export const cohortRegistrationSchema = z.object({
  fullName: z.string().min(2, "Enter your full name."),
  email: z.string().email("Enter a valid email address."),
  phone: z.string().min(7, "Enter a valid phone number."),
  gender: z.string().min(1, "Select a gender option."),
  country: z.string().min(2, "Enter your country."),
  skillLevel: z.string().min(1, "Select your skill level."),
  course: z.string().min(1, "Select a course."),
});

export const volunteerSchema = z.object({
  name: z.string().min(2, "Enter your name."),
  email: z.string().email("Enter a valid email address."),
  skills: z.string().min(2, "Tell us at least one skill."),
  availability: z.string().min(1, "Select your availability."),
  interest: z.string().min(1, "Select an area of interest."),
  experience: z.string().min(10, "Share a short note about your experience."),
});

export const contactSchema = z.object({
  name: z.string().min(2, "Enter your name."),
  email: z.string().email("Enter a valid email address."),
  subject: z.string().min(3, "Enter a subject."),
  message: z.string().min(10, "Enter a message."),
});

export const partnershipSchema = z.object({
  organization: z.string().min(2, "Enter organization name."),
  contactName: z.string().min(2, "Enter contact name."),
  email: z.string().email("Enter a valid email address."),
  partnershipType: z.string().min(1, "Select partnership type."),
  message: z.string().min(10, "Tell us how you want to partner."),
});
