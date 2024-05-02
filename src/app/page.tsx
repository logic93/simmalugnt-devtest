"use client";

import { useEffect, useState } from "react";
import { NewsletterCard } from "@/components/NewsletterCard";
import { onSignupNewsletter } from "@/actions";
import { useFormState } from "react-dom";
import { z } from "zod";
import { States } from "@/config/enums";
import { NewsletterForm } from "@/components/NewsletterForm";
import { Submit } from "@/components/Submit";
import { StatesType } from "@/types";

const emailSchema = z.string().email();

const buttonTitle: { [key: string]: string } = {
  [States.BASE]: "sign up",
  [States.ERROR]: "invalid email",
  [States.SUCCESS]: "Thanks!",
};

export default function Home() {
  const [state, formAction] = useFormState(onSignupNewsletter, States.BASE);
  const [activeState, setActiveState] = useState<States | typeof state>(
    States.BASE
  );
  const [_, setIsPending] = useState<boolean>(false);

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

  const buttonWidthVariants: StatesType = {
    [States.BASE]: "w-[5.3rem]",
    [States.PENDING]: "w-[7.4rem]",
    [States.ERROR]: "w-[7.7rem]",
    [States.SUCCESS]: "w-full m-0 disabled disabled:opacity-100",
  };

  const inputPaddingVariants: StatesType = {
    [States.BASE]: "pr-[calc(5.3rem+1.2rem)]",
    [States.PENDING]: "pr-[calc(7.4rem+1.2rem)]",
    [States.ERROR]: "pr-[calc(7.7rem+1.2rem)]",
  };

  return (
    <div className="page-wrapper">
      <NewsletterCard state={activeState}>
        <NewsletterForm
          inputClassName={`${inputPaddingVariants[activeState!]}`}
          action={formAction}
          onChange={handleChange}
        >
          <Submit
            className={`${buttonWidthVariants[activeState!]}`}
            disabled={activeState === States.SUCCESS}
            pendingTitle="signing up..."
            buttonTitle={buttonTitle[activeState!]}
            state={state}
            setActiveState={setActiveState}
            setIsPending={setIsPending}
          />
        </NewsletterForm>
      </NewsletterCard>
    </div>
  );
}
