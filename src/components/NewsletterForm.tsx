"use client";

import { IForm } from "@/types";

export function NewsletterForm(props: IForm) {
  return (
    <form action={props.action} noValidate>
      <label className="hidden" htmlFor="email" />
      <input
        className={props.inputClassName}
        type="email"
        id="email"
        name="email"
        required
        data-1p-ignore
        placeholder="Email"
        onChange={props.onChange}
      />
      {props.children}
    </form>
  );
}
