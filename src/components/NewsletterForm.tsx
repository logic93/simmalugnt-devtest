"use client";

import { Submit } from "./Submit";
import { Button, Newsletter } from "@/types";

type Props = Newsletter & Button;

export function NewsletterForm({ action, pendingTitle, buttonTitle }: Props) {
  return (
    <form action={action} noValidate>
      <label className="hidden" htmlFor="email" />
      <input
        type="email"
        id="email"
        name="email"
        required
        data-1p-ignore
        placeholder="Email"
      />
      <Submit pendingTitle={pendingTitle} buttonTitle={buttonTitle} />
    </form>
  );
}
