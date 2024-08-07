"use server";

import { signIn } from "@/auth";
import { LoginSchema } from "@/schemas";
import * as z from "zod";
import { AuthError } from "next-auth";
import {
  DEFAULT_ADMIN_REDIRECT,
  DEFAULT_LOGIN_REDIRECT,
  DEFAULT_HOME,
} from "@/routes";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);
  if (!validatedFields.success) {
    return {
      error: "Invalid fields!",
    };
  }
  const { email, password } = validatedFields.data;
  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_HOME,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return {
            error: "Invalid credentials!",
          };
        default:
          return {
            error: "Something went wrong!",
          };
      }
    }
    throw error;
  }
};
