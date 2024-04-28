"use client";

import { useState } from "react";
import { NewsletterCard } from "@/components/NewsletterCard";

export default function Home() {
  const [state, setState] = useState("");

  async function formAction() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("test");
    setState("error");
  }

  return (
    <div className="page-wrapper">
      <NewsletterCard
        status={state}
        action={formAction}
        pendingTitle="signing up..."
        buttonTitle="sign up"
      />
    </div>
  );
}
