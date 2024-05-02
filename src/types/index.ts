import { States } from "@/config/enums";
import { ReactNode } from "react";

export interface ICard {
  state?: string;
  children: ReactNode;
}

export interface IForm {
  action: any;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  inputClassName?: string;
  children: ReactNode;
}

export interface IButton {
  buttonTitle: string;
  pendingTitle?: string;
  className?: string;
  onClick?: any;
  state?: string;
  setActiveState?: any;
  setIsPending?: (_: boolean) => void;
  disabled?: boolean;
}

export type StatesType = {
  [key in States]?: string;
};
