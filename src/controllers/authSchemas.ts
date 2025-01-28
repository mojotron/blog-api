import { z } from "zod";

export const registerSchema = z
  .object({
    firstName: z.string().trim(),
    lastName: z.string().trim(),
    email: z.string().email().trim(),
    password: z.string().trim(),
    confirmPassword: z.string().trim(),
    userAgent: z.string().optional(),
  })
  .refine(
    (data) =>
      data.password.match(
        /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,}$/
      ),
    {
      message:
        "password must be be minimum of 8 character and including uppercase letter, lowercase letter, number and special character @$!%*?&",
      path: ["password"],
    }
  )
  .refine((data) => data.password === data.confirmPassword, {
    message: "passwords do not match",
    path: ["confirmPassword"],
  });
