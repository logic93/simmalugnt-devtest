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
  state?: { message: string; state: string };
  setActiveState?: any;
  disabled?: boolean;
}

export type StatesType = {
  [key in States]?: string;
};
