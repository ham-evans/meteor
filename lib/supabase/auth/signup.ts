"use server";

import { env } from "@/env.mjs";
import { createServerSupabaseClient } from "@/app/supabaseServer";

export const signUp = async ({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}) => {
  const supabase = createServerSupabaseClient();

  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    // options: {
    //   emailRedirectTo: `${env.NEXT_PUBLIC_URL}/auth/callback`,
    //   data: {
    //     full_name: name,
    //   },
    // },
  });

  console.log(data);

  console.log(error?.message);

  return error?.message;
};
