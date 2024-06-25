"use server";
import prisma from "@/lib/db";
import * as z from "zod";
import { AddUserSchema, JobParentSchema } from "@/schemas";
import bcrypt from "bcryptjs";
import { getUserByEmail } from "@/data/user";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const addusers = async (values: any) => {
  const validatedFields = AddUserSchema.safeParse(values);
  if (!validatedFields.success) {
    return {
      error: "Invalid fields!",
    };
  }

  const { name, email, password } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);
  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return {
      error: "Email already in use!",
    };
  }
  await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      role: values.role,
    },
  });
  return {
    success: "User successfully created!",
  };
};

export const addjobparent = async (values: any) => {
  const validatedFields = JobParentSchema.safeParse(values);
  if (!validatedFields.success) {
    return {
      error: "Invalid fields!",
    };
  }

  const { name, question } = validatedFields.data;

  try {
    await prisma.job_Parent.create({
      data: {
        name,
        question,
      },
    });
  } catch (error) {
    return {
      error: "Failed to create job parent!",
    };
  }
  revalidatePath("/admin/jobparent");
  redirect("/admin/jobparent");
};
