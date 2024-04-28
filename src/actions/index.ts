"use server";

import z from "zod";

const schema = z.object({
  email: z.string().email(),
});

export async function formAction(formData: FormData) {
  const results = schema.safeParse({
    email: formData.get("email"),
  });

  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (results.success) {
    console.log("valid");
  }

  if (!results.success) {
    throw new Error("error");
  }
}
