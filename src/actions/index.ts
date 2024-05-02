"use server";

import { variables } from "@/config";
import { States } from "@/config/enums";
import z from "zod";

const API_URL = "https://simmalugnt.proxy.beeceptor.com/login";
const emailSchema = z.string().email();

export async function onSignupNewsletter(prevState: any, formData: FormData) {
  const email = formData.get("email");
  const results = emailSchema.safeParse(email);

  await new Promise((resolve) => setTimeout(resolve, variables.SERVER_DELAY));

  if (!results.success) {
    return States.ERROR;
  }

  if (results.success) {
    const email = formData.get("email");

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        return States.SUCCESS;
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  }
}
