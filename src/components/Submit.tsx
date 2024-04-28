"use client";

import { useFormStatus } from "react-dom";
import { Button } from "@/types";

export function Submit({ pendingTitle, buttonTitle }: Button) {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? pendingTitle : buttonTitle}
    </button>
  );
}
