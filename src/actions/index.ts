"use server";

import { States } from "@/config/enums";
import z from "zod";

const API_URL = "https://simmalugnt.proxy.beeceptor.com/login";
const emailSchema = z.string().email();

export async function onSignupNewsletter(prevState: any, formData: FormData) {
  const email = formData.get("email");
  const results = emailSchema.safeParse(email);

  await new Promise((resolve) => setTimeout(resolve, 500));

  if (!results.success) {
    return {
      message: "",
      state: States.ERROR,
    };
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

      const data = await res.json();

      if (res.ok) {
        return {
          message: data?.status,
          state: States.SUCCESS,
        };
      }
    } catch (error) {
      return {
        message: "Something went wrong, please try again.",
        state: States.API_ERROR,
      };
    }
  }
}
