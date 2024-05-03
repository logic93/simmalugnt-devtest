"use client";

import { FormProps } from "@/types";
import { forwardRef } from "react";

export const NewsletterForm = forwardRef<HTMLFormElement, FormProps>(
  (props, ref) => {
    const { action, inputClassName, onChange, children } = props;

    return (
      <form ref={ref} action={action} noValidate>
        <label className="hidden" htmlFor="email" />
        <input
          className={inputClassName}
          type="email"
          id="email"
          name="email"
          required
          data-1p-ignore
          placeholder="Email"
          onChange={onChange}
        />
        {children}
      </form>
    );
  },
);

NewsletterForm.displayName = "NewsletterForm";
