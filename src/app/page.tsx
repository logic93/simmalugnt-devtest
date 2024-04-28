"use client";

import { useState } from "react";
import { NewsletterCard } from "@/components/NewsletterCard";
import { formAction } from "@/actions";

export default function Home() {
  const [state, setState] = useState("");

  async function handleAction(formData: FormData) {
    try {
      await formAction(formData);
    } catch (error) {
      setState(error?.message);
    }
  }

  return (
    <div className="page-wrapper">
      <NewsletterCard
        status={state}
        action={handleAction}
        pendingTitle="signing up..."
        buttonTitle="sign up"
      />
    </div>
  );
}
