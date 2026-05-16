"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type FieldValues, type UseFormHandleSubmit, type UseFormRegisterReturn } from "react-hook-form";
import { z } from "zod";
import type { ReactNode } from "react";
import { contactSchema, partnershipSchema, volunteerSchema } from "@/lib/validations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FieldError } from "@/components/forms/field-error";

export function VolunteerForm() {
  const form = useForm<z.infer<typeof volunteerSchema>>({ resolver: zodResolver(volunteerSchema) });
  return (
    <ValidatedForm success="Volunteer application captured." onSubmit={(v) => console.log("volunteer", v)} handleSubmit={form.handleSubmit} isSubmitting={form.formState.isSubmitting} isSubmitSuccessful={form.formState.isSubmitSuccessful}>
      <TextField label="Name" id="name" register={form.register("name")} error={form.formState.errors.name?.message} />
      <TextField label="Email" id="email" type="email" register={form.register("email")} error={form.formState.errors.email?.message} />
      <TextField label="Skills" id="skills" register={form.register("skills")} error={form.formState.errors.skills?.message} />
      <TextField label="Availability" id="availability" register={form.register("availability")} error={form.formState.errors.availability?.message} placeholder="Weekends, weekdays, remote..." />
      <TextField label="Area of interest" id="interest" register={form.register("interest")} error={form.formState.errors.interest?.message} />
      <TextareaField label="Experience" id="experience" register={form.register("experience")} error={form.formState.errors.experience?.message} />
    </ValidatedForm>
  );
}

export function PartnershipForm() {
  const form = useForm<z.infer<typeof partnershipSchema>>({ resolver: zodResolver(partnershipSchema) });
  return (
    <ValidatedForm success="Partnership inquiry captured." onSubmit={(v) => console.log("partnership", v)} handleSubmit={form.handleSubmit} isSubmitting={form.formState.isSubmitting} isSubmitSuccessful={form.formState.isSubmitSuccessful}>
      <TextField label="Organization" id="organization" register={form.register("organization")} error={form.formState.errors.organization?.message} />
      <TextField label="Contact name" id="contactName" register={form.register("contactName")} error={form.formState.errors.contactName?.message} />
      <TextField label="Email" id="email" type="email" register={form.register("email")} error={form.formState.errors.email?.message} />
      <TextField label="Partnership type" id="partnershipType" register={form.register("partnershipType")} error={form.formState.errors.partnershipType?.message} />
      <TextareaField label="Message" id="message" register={form.register("message")} error={form.formState.errors.message?.message} />
    </ValidatedForm>
  );
}

export function ContactForm() {
  const form = useForm<z.infer<typeof contactSchema>>({ resolver: zodResolver(contactSchema) });
  return (
    <ValidatedForm success="Message captured." onSubmit={(v) => console.log("contact", v)} handleSubmit={form.handleSubmit} isSubmitting={form.formState.isSubmitting} isSubmitSuccessful={form.formState.isSubmitSuccessful}>
      <TextField label="Name" id="name" register={form.register("name")} error={form.formState.errors.name?.message} />
      <TextField label="Email" id="email" type="email" register={form.register("email")} error={form.formState.errors.email?.message} />
      <TextField label="Subject" id="subject" register={form.register("subject")} error={form.formState.errors.subject?.message} />
      <TextareaField label="Message" id="message" register={form.register("message")} error={form.formState.errors.message?.message} />
    </ValidatedForm>
  );
}

function ValidatedForm<T extends FieldValues>({
  children,
  handleSubmit,
  onSubmit,
  isSubmitting,
  isSubmitSuccessful,
  success,
}: {
  children: ReactNode;
  handleSubmit: UseFormHandleSubmit<T>;
  onSubmit: (values: T) => void;
  isSubmitting: boolean;
  isSubmitSuccessful: boolean;
  success: string;
}) {
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
      {children}
      {isSubmitSuccessful && <p className="rounded-md bg-primary/10 p-3 text-sm font-medium text-primary">{success} Connect Supabase to persist it.</p>}
      <Button type="submit" size="lg" disabled={isSubmitting}>{isSubmitting ? "Submitting..." : "Submit"}</Button>
    </form>
  );
}

function TextField({ label, id, register, error, type = "text", placeholder }: { label: string; id: string; register: UseFormRegisterReturn; error?: string; type?: string; placeholder?: string }) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} type={type} placeholder={placeholder} {...register} />
      <FieldError message={error} />
    </div>
  );
}

function TextareaField({ label, id, register, error }: { label: string; id: string; register: UseFormRegisterReturn; error?: string }) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={id}>{label}</Label>
      <Textarea id={id} {...register} />
      <FieldError message={error} />
    </div>
  );
}
