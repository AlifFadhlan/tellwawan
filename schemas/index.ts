import { UserRoles } from "@prisma/client";
import { z } from "zod";

export const AddUserSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Email is required" }),
  password: z.string().min(6, { message: "Minimum 6 characters required" }),
  role: z.enum([UserRoles.ADMIN, UserRoles.USER, UserRoles.REKRUTER], {
    message: "Role is required",
  }),
});

export const EditUserSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Email is required" }),
  role: z.enum([UserRoles.ADMIN, UserRoles.USER, UserRoles.REKRUTER], {
    message: "Role is required",
  }),
});

export const JobParentSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  question: z.string().min(30, { message: "Question is required" }),
});

export const LoginSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export const RegisterSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
  password: z.string().min(6, { message: "Minimum 6 characters required" }),
  name: z.string().min(1, { message: "Name is required" }),
});

export const JobChildSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  parent_id: z.string().min(1, { message: "Job parent is required" }),
  user_id: z.string().min(1, { message: "Rekruter is required" }),
});

export const AddInterviewSchema = z.object({
  jobchild_id: z.string().min(1, { message: "Job child is required" }),
  user_id: z.string().min(1, { message: "Rekruter is required" }),
});
