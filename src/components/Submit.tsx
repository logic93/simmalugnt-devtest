"use client";

import { IButton } from "@/types";
import { useFormStatus } from "react-dom";

export function Submit(props: IButton) {
  const { pending } = useFormStatus();

  const buttonStyles = {
    pending: "w-[7.4rem]",
  };

  return (
    <button
      type="submit"
      disabled={pending || props.disabled}
      className={`${props.className} ${pending && buttonStyles.pending}`}
      onClick={props.onClick}
    >
      {pending ? props.pendingTitle : props.buttonTitle}
    </button>
  );
}
