"use client";

import { NewsletterCard } from "@/components/NewsletterCard";

export default function Home() {
  async function formAction() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("test");
  }

  return (
    <div className="page-wrapper">
      <NewsletterCard
        action={formAction}
        pendingTitle="signing up..."
        buttonTitle="sign up"
      />
    </div>
  );
}
