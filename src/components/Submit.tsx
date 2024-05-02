"use client";

import { States } from "@/config/enums";
import { IButton } from "@/types";
import { useEffect } from "react";
import { useFormStatus } from "react-dom";

export function Submit(props: IButton) {
  const { pending } = useFormStatus();
  const {
    setActiveState,
    setIsPending,
    state,
    disabled,
    className,
    pendingTitle,
    buttonTitle,
  } = props;

  useEffect(() => {
    if (setActiveState && setIsPending && state) {
      if (pending) {
        setActiveState(States.PENDING);
        setIsPending(true);
      } else {
        setActiveState(state);
        setIsPending(false);
      }
    }
  }, [pending, setActiveState, setIsPending, state]);

  return (
    <button type="submit" disabled={pending || disabled} className={className}>
      {pending && pendingTitle ? pendingTitle : buttonTitle}
    </button>
  );
}
