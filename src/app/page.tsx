"use client";

import { onSignupNewsletter } from "@/actions";
import { NewsletterCard } from "@/components/NewsletterCard";
import { NewsletterForm } from "@/components/NewsletterForm";
import { Submit } from "@/components/Submit";
import { States } from "@/config/enums";
import { State, StatesMap } from "@/types";
import { useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";
import { z } from "zod";

const emailSchema = z.string().email();

const buttonTitle: { [key: string]: string } = {
  [States.BASE]: "sign up",
  [States.ERROR]: "invalid email",
  [States.API_ERROR]: "sign up",
  [States.SUCCESS]: "Thanks!",
};

export default function Home() {
  const [state, formAction] = useFormState(onSignupNewsletter, {
    message: "",
    state: States.BASE,
  });
  const [activeState, setActiveState] = useState<State | typeof state>(state);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state) {
      setActiveState(state);

      if (state?.state === States.API_ERROR) {
        formRef.current?.reset();
      }
    }
  }, [state]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const email = e.target.value;
    const validation = emailSchema.safeParse(email);

    if (state?.state === States.ERROR) {
      if (validation.success) {
        setActiveState({ ...state, state: States.BASE });
      }

      if (!validation.success) {
        setActiveState({ ...state, state: States.ERROR });
      }
    }
  }

  const buttonWidthVariants: StatesMap = {
    [States.BASE]: "w-[5.3rem]",
    [States.PENDING]: "w-[7.4rem]",
    [States.ERROR]: "w-[7.7rem]",
    [States.SUCCESS]: "w-full m-0 disabled disabled:opacity-100",
  };

  const inputPaddingVariants: StatesMap = {
    [States.BASE]: "pr-[calc(5.3rem+1.2rem)]",
    [States.PENDING]: "pr-[calc(7.4rem+1.2rem)]",
    [States.ERROR]: "pr-[calc(7.7rem+1.2rem)]",
  };

  return (
    <div className="page-wrapper">
      <NewsletterCard state={activeState?.state}>
        <NewsletterForm
          ref={formRef}
          inputClassName={`${activeState?.state && inputPaddingVariants[activeState?.state as States]}`}
          action={formAction}
          onChange={handleChange}
        >
          <Submit
            className={`${activeState?.state && buttonWidthVariants[activeState?.state as States]}`}
            disabled={activeState?.state === States.SUCCESS}
            pendingTitle="signing up..."
            buttonTitle={buttonTitle[activeState?.state as States]}
            state={state}
            setActiveState={setActiveState}
          />
        </NewsletterForm>
      </NewsletterCard>

      <div className="error-wrapper">
        <div
          className={`error-toast ${
            state?.state === States.API_ERROR
              ? "translate-y-0"
              : "translate-y-full"
          }`}
        >
          {activeState?.message}
        </div>
      </div>
    </div>
  );
}
