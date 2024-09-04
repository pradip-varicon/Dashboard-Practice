import { z } from "zod";

export const loginSchema = z.object({
  username: z
    .string()
    .min(1, "Username is required")
    .max(100, "Username is too long"),
  password: z
    .string()
    .min(1, "Password is required")
    .max(100, "Password is too long"),
});

export type LoginFormType = z.infer<typeof loginSchema>;

export interface TextFieldControllerPropsType {
  name: string;
  control: any;
  label: string;
  type?: string;
}