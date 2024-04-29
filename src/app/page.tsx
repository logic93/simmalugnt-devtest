"use client";

import { useEffect, useState } from "react";
import { NewsletterCard } from "@/components/NewsletterCard";
import { onSignupNewsletter } from "@/actions";
import { useFormState } from "react-dom";
import { z } from "zod";
import { States } from "@/config/enums";
import { variables } from "@/config";
import { NewsletterForm } from "@/components/NewsletterForm";
import { Submit } from "@/components/Submit";
import { StatesType } from "@/types";

const emailSchema = z.string().email();

const buttonTitle: { [key: string]: string } = {
  base: "sign up",
  error: "invalid email",
  success: "Thanks!",
};

export default function Home() {
  const [state, formAction] = useFormState(onSignupNewsletter, States.BASE);
  const [activeState, setActiveState] = useState<States>(States.BASE);

  useEffect(() => {
    if (state) {
      setActiveState(state);
    }
  }, [state]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const email = e.target.value;
    const validation = emailSchema.safeParse(email);

    if (state === States.ERROR) {
      if (validation.success) {
        setActiveState(States.BASE);
      }

      if (!validation.success) {
        setActiveState(States.ERROR);
      }
    }
  }

  function handleOnClick() {
    if (activeState === States.ERROR) {
      setActiveState(States.BASE);

      setTimeout(() => {
        setActiveState(States.ERROR);
      }, variables.SERVER_DELAY);
    }
  }

  const buttonWidthVariants: StatesType = {
    [States.BASE]: "w-[5.3rem]",
    [States.ERROR]: "w-[7.7rem]",
    [States.SUCCESS]: "w-full m-0 disabled disabled:opacity-100",
  };

  const inputPaddingVariants: StatesType = {
    [States.BASE]: "pr-[6.5rem]",
    [States.ERROR]: "pr-[8.8rem]",
  };

  return (
    <div className="page-wrapper">
      <NewsletterCard state={activeState}>
        <NewsletterForm
          className={`${inputPaddingVariants[activeState]}`}
          action={formAction}
          onChange={handleChange}
        >
          <Submit
            className={`${buttonWidthVariants[activeState]}`}
            disabled={activeState === States.SUCCESS}
            pendingTitle="signing up..."
            buttonTitle={buttonTitle[activeState]}
            onClick={handleOnClick}
          />
        </NewsletterForm>
      </NewsletterCard>
    </div>
  );
}
