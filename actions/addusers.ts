"use server";
import prisma from "@/lib/db";
import * as z from "zod";
import {
  AddUserSchema,
  EditUserSchema,
  JobChildSchema,
  JobParentSchema,
} from "@/schemas";
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
  try {
    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: values.role,
      },
    });
  } catch (error) {
    return {
      error: "Failed to create user!",
    };
  }

  revalidatePath("/admin/users");
  redirect("/admin/users");
};

export const editusers = async (values: any, id: string) => {
  const validatedFields = EditUserSchema.safeParse(values);
  if (!validatedFields.success) {
    return {
      error: "Invalid fields!",
    };
  }

  const { name } = validatedFields.data;
  try {
    await prisma.user.update({
      data: {
        name,
        role: values.role,
      },
      where: {
        id: id,
      },
    });
  } catch (error) {
    return {
      error: "Failed to update user!",
    };
  }

  revalidatePath("/admin/users");
  redirect("/admin/users");
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

export const editjobparent = async (values: any, id: string) => {
  const validatedFields = JobParentSchema.safeParse(values);
  if (!validatedFields.success) {
    return {
      error: "Invalid fields!",
    };
  }

  const { name, question } = validatedFields.data;

  try {
    await prisma.job_Parent.update({
      data: {
        name,
        question,
      },
      where: {
        id: id,
      },
    });
  } catch (error) {
    return {
      error: "Failed to update job parent!",
    };
  }
  revalidatePath("/admin/jobparent");
  redirect("/admin/jobparent");
};

export const addjobchild = async (values: any) => {
  const validatedFields = JobChildSchema.safeParse(values);
  if (!validatedFields.success) {
    return {
      error: "Invalid fields!",
    };
  }

  const { name, parent_id, user_id } = validatedFields.data;

  try {
    await prisma.job_Child.create({
      data: {
        name,
        parent_id,
        user_id,
      },
    });
  } catch (error) {
    return {
      error: "Failed to create job child!",
    };
  }
  revalidatePath("/admin/jobchild");
  redirect("/admin/jobchild");
};
