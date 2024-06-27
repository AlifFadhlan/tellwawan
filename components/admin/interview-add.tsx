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
import { AddInterviewSchema } from "@/schemas";
import { addinterview } from "@/actions/addusers";
import { Job_Child, Job_Parent, User } from "@prisma/client";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import Card from "@/components/card";
import BackButton from "@/components/BackButton";

const AddInterviewForm = ({
  jobchild_id,
  user_id,
}: {
  jobchild_id: any;
  user_id: any;
}) => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const form = useForm<z.infer<typeof AddInterviewSchema>>({
    resolver: zodResolver(AddInterviewSchema),
    defaultValues: {
      user_id: "",
      jobchild_id: "",
    },
  });
  const onSubmit = (values: z.infer<typeof AddInterviewSchema>) => {
    setError("");
    setSuccess("");
    startTransition(async () => {
      addinterview(values).then((data) => {
        setError(data?.error);
        // setSuccess(data.success);
      });
    });
  };
  return (
    <>
      <BackButton text="Back To Interview" link="/admin/interview" />
      <Card className="p-4">
        <h1 className="flex flex-col items-center">Admin Add Interview</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="jobchild_id"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Job Child</FormLabel>
                    <FormControl>
                      <Select
                        disabled={isPending}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a job child" />
                        </SelectTrigger>
                        <SelectContent>
                          {jobchild_id.map((child: Job_Child) => (
                            <SelectItem value={child.id}>
                              {child.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="user_id"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pelamar</FormLabel>
                    <FormControl>
                      <Select
                        disabled={isPending}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a pelamar" />
                        </SelectTrigger>
                        <SelectContent>
                          {user_id.map((user: User) => (
                            <SelectItem value={user.id}>{user.name}</SelectItem>
                          ))}
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

export default AddInterviewForm;
