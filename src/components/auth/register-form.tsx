"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { CardWrapper } from "./card-wrapper";
import { RegisterSchema } from "@/schemas";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState, useTransition } from "react";
import { register } from "@/actions/register";
import { FormError } from "../form-error";

export const RegisterForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setError("");
    startTransition(() => {
      register(values).then((data) => {
        setError(data.error);
      });
    });
  };
  return (
    <CardWrapper
      headerLabel="Create new Account"
      backButtonHref="/auth/login"
      backButtonLabel="Already have an account>"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <div className="space-y-4">
            {/* Username */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      disabled={isPending}
                      placeholder="Enter your username..."
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      disabled={isPending}
                      placeholder="Enter your email..."
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      disabled={isPending}
                      placeholder="Enter your password..."
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {error?.length !== 0 && <FormError message={error} />}
          <Button
            type="submit"
            className="inline-block w-full"
            disabled={isPending}
            size={"lg"}
            variant={"default"}
          >
            Register
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
