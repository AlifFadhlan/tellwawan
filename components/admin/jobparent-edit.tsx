"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { useTransition } from "react";
import { JobParentSchema } from "@/schemas";
import { addjobparent, editjobparent } from "@/actions/addusers";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import Card from "@/components/card";
import { Textarea } from "@/components/ui/textarea";
import { Job_Parent } from "@prisma/client";

const UpdateParentForm = ({ jobparent }: { jobparent: Job_Parent }) => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const form = useForm<z.infer<typeof JobParentSchema>>({
    resolver: zodResolver(JobParentSchema),
    defaultValues: {
      name: jobparent?.name || "",
      question: jobparent?.question || "",
    },
  });
  const onSubmit = (values: z.infer<typeof JobParentSchema>) => {
    setError("");
    setSuccess("");
    startTransition(async () => {
      editjobparent(values, jobparent.id).then((data) => {
        // setError(data.error);
        // setSuccess(data.success);
      });
    });
  };
  return (
    <>
      <Card className="p-4">
        <h1 className="flex flex-col items-center">Admin Add Job Parent</h1>
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
                name="question"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Question</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        disabled={isPending}
                        placeholder="Siapa nama kamu?
                        Mengapa kamu tertarik dengan pekerjaan ini?"
                      />
                    </FormControl>
                    <FormDescription>
                      Masukan minimal 5 pertanyaan
                    </FormDescription>
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

export default UpdateParentForm;
