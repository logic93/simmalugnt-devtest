import { States } from "@/config/enums";
import { ReactNode } from "react";

export interface ICard {
  state?: string;
  children: ReactNode;
}

export interface IForm {
  action: any;
  onChange?: any;
  className?: any;
  children: ReactNode;
}

export interface IButton {
  buttonTitle: string;
  pendingTitle?: string;
  className?: any;
  onClick?: any;
  disabled?: boolean;
}

export type StatesType = {
  [key in States]?: string;
};
