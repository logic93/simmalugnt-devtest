import { States } from "@/config/enums";

export interface CardProps {
  state?: string;
  children: React.ReactNode;
}

export interface FormProps {
  action: any;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  inputClassName?: string;
  children: React.ReactNode;
}

export interface ButtonProps {
  buttonTitle?: string;
  pendingTitle?: string;
  className?: string;
  state?: State;
  setActiveState?: (state?: State) => void;
  disabled?: boolean;
}

export interface State {
  message?: string;
  state?: string;
}

export type StatesMap = {
  [key in States]?: string;
};
