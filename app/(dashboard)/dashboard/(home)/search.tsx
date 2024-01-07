"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { PlusIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import {
  createContactSchema,
  CreateContactType,
} from "@/lib/validations/contact";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export function SearchPapers() {
  const router = useRouter();
  const [search, setSearch] = useState(false);

  const form = useForm<CreateContactType>({
    resolver: zodResolver(createContactSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const onSubmit = async (values: CreateContactType) => {
    const payload: CreateContactType = {
      name: values.name,
      email: values.email,
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (result.error) {
      return toast.error(result.error);
    }

    router.refresh();
    toast.success(result.message);
    // setOpen(false);
    form.reset();
  };

  return (
    <div className="grid gap-4 py-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid gap-2">
            <div className="grid gap-1">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={form.formState.isSubmitting}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid gap-1">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={form.formState.isSubmitting}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="pt-4">
              <Button
                isLoading={form.formState.isSubmitting}
                disabled={form.formState.isSubmitting}
              >
                Create
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
