import { z } from "zod";

export const formSchema = (t: (key: string) => string) => {
  return z.object({
    firstName: z
      .string()
      .min(2, t("validation.firstName.min"))
      .max(50, t("validation.firstName.max")),
    lastName: z
      .string()
      .min(2, t("validation.lastName.min"))
      .max(50, t("validation.lastName.max")),
    email: z
      .string()
      .email(t("validation.email.invalid")),
    phoneNumber: z
      .string()
      .min(10, t("validation.phoneNumber.min"))
      .max(15, t("validation.phoneNumber.max")),
    description: z
      .string()
      .min(10, t("validation.description.min"))
      .max(500, t("validation.description.max")),
  });
};

export type TFormSchema = z.infer<ReturnType<typeof formSchema>>;
