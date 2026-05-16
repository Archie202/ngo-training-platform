"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type UseFormRegisterReturn } from "react-hook-form";
import { z } from "zod";
import { cohortRegistrationSchema } from "@/lib/validations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FieldError } from "@/components/forms/field-error";

type FormValues = z.infer<typeof cohortRegistrationSchema>;

export function CohortRegistrationForm({ defaultCourse }: { defaultCourse?: string }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormValues>({
    resolver: zodResolver(cohortRegistrationSchema),
    defaultValues: { course: defaultCourse ?? "" },
  });

  function onSubmit(values: FormValues) {
    console.log("cohort-registration", values);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="fullName">Full name</Label>
        <Input id="fullName" {...register("fullName")} />
        <FieldError message={errors.fullName?.message} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" {...register("email")} />
          <FieldError message={errors.email?.message} />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="phone">Phone number</Label>
          <Input id="phone" {...register("phone")} />
          <FieldError message={errors.phone?.message} />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <SelectField label="Gender" id="gender" register={register("gender")} error={errors.gender?.message} options={["Female", "Male", "Prefer not to say"]} />
        <div className="grid gap-2">
          <Label htmlFor="country">Country</Label>
          <Input id="country" {...register("country")} />
          <FieldError message={errors.country?.message} />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <SelectField label="Skill level" id="skillLevel" register={register("skillLevel")} error={errors.skillLevel?.message} options={["Beginner", "Intermediate", "Advanced"]} />
        <SelectField label="Course selection" id="course" register={register("course")} error={errors.course?.message} options={["AI & Prompt Engineering", "Data Analysis", "Web Development", "Digital Literacy", "Girls in Tech"]} />
      </div>
      {isSubmitSuccessful && <p className="rounded-md bg-primary/10 p-3 text-sm font-medium text-primary">Registration captured. Connect Supabase to persist submissions.</p>}
      <Button type="submit" size="lg" disabled={isSubmitting}>{isSubmitting ? "Submitting..." : "Submit registration"}</Button>
    </form>
  );
}

function SelectField({
  label,
  id,
  register,
  error,
  options,
}: {
  label: string;
  id: string;
  register: UseFormRegisterReturn;
  error?: string;
  options: string[];
}) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={id}>{label}</Label>
      <select id={id} className="h-10 rounded-md border border-input bg-background px-3 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" {...register}>
        <option value="">Select</option>
        {options.map((option) => <option key={option} value={option}>{option}</option>)}
      </select>
      <FieldError message={error} />
    </div>
  );
}
