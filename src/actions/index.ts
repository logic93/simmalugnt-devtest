"use server";

import { variables } from "@/config";
import { States } from "@/config/enums";
import { revalidatePath } from "next/cache";
import z from "zod";

const emailSchema = z.string().email();

export async function onSignupNewsletter(prevState: any, formData: FormData) {
  const email = formData.get("email");
  const results = emailSchema.safeParse(email);

  await new Promise((resolve) => setTimeout(resolve, variables.SERVER_DELAY));

  if (!results.success) {
    return States.ERROR;
  }

  if (results.success) {
    return States.SUCCESS;
  }

  revalidatePath("/");
}
