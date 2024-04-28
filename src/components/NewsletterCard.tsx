"use client";

import { NewsletterForm } from "@/components/NewsletterForm";
import { Button, Newsletter } from "@/types";

type Props = Newsletter & Button;

export function NewsletterCard({ action, pendingTitle, buttonTitle }: Props) {
  return (
    <div className="signup-wrapper">
      <div className="text-wrapper">
        <h1>Sign up to our newsletter</h1>
        <p>
          Lorem ipsum dolor sit amet, consecte adipiscing elit praesent sodales
          purus magna, eget lacinia sapien hendrerit.
        </p>
      </div>
      <NewsletterForm
        action={action}
        pendingTitle={pendingTitle}
        buttonTitle={buttonTitle}
      />
    </div>
  );
}
