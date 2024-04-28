import { ReactNode } from "react";

export type Card = {
  status: string;
};

export type Newsletter = {
  action: any;
};

export type Button = {
  pendingTitle: string;
  buttonTitle: ReactNode;
};
