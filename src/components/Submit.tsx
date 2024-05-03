"use client";

import { States } from "@/config/enums";
import { IButton } from "@/types";
import { useEffect } from "react";
import { useFormStatus } from "react-dom";

export function Submit(props: IButton) {
  const { pending } = useFormStatus();
  const {
    setActiveState,
    state,
    disabled,
    className,
    pendingTitle,
    buttonTitle,
  } = props;

  useEffect(() => {
    if (setActiveState && state) {
      if (pending) {
        setActiveState({ ...state, state: States.PENDING });
      } else {
        setActiveState(state);
      }
    }
  }, [pending, setActiveState, state]);

  return (
    <button type="submit" disabled={pending || disabled} className={className}>
      {pending && pendingTitle ? pendingTitle : buttonTitle}
    </button>
  );
}
