"use client";

import { CardProps } from "@/types";

export function NewsletterCard(props: CardProps) {
  return (
    <div className="signup-wrapper" data-theme={props.state}>
      <div className="text-wrapper">
        <h1>Sign up to our newsletter</h1>
        <p>
          Lorem ipsum dolor sit amet, consecte adipiscing elit praesent sodales
          purus magna, eget lacinia sapien hendrerit.
        </p>
      </div>
      {props.children}
    </div>
  );
}
