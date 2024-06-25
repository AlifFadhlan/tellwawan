"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { useTransition } from "react";
import { AddUserSchema, EditUserSchema } from "@/schemas";
import { addusers, editusers } from "@/actions/addusers";
import { User, UserRoles } from "@prisma/client";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import Card from "@/components/card";
import BackButton from "../BackButton";

const UpdateUserForm = ({ user }: { user: User }) => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const form = useForm<z.infer<typeof EditUserSchema>>({
    resolver: zodResolver(EditUserSchema),
    defaultValues: {
      email: user?.email || "",
      name: user?.name || "",
      role: user?.role || "",
    },
  });
  const onSubmit = (values: z.infer<typeof EditUserSchema>) => {
    setError("");
    setSuccess("");
    startTransition(async () => {
      editusers(values, user.id).then((data) => {
        // setError(data.error);
        // setSuccess(data.success);
      });
    });
  };
  return (
    <>
      <BackButton text="Back to User" link="/admin/users" />
      <Card className="p-4">
        <h1 className="flex flex-col items-center">Admin Edit User</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        placeholder="Alif"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        readOnly
                        placeholder="alif@example.com"
                        type="email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Role</FormLabel>
                    <FormControl>
                      <Select
                        disabled={isPending}
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value={UserRoles.ADMIN}>Admin</SelectItem>
                          <SelectItem value={UserRoles.USER}>User</SelectItem>
                          <SelectItem value={UserRoles.REKRUTER}>
                            Rekruter
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormError message={error} />
            <FormSuccess message={success} />
            <Button
              disabled={isPending}
              type="submit"
              size="lg"
              className="w-full"
            >
              Submit
            </Button>
          </form>
        </Form>
      </Card>
    </>
  );
};

export default UpdateUserForm;
