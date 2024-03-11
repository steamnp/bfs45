import { PropsWithChildren, ReactNode } from "react";

export interface Counter {
  value: number;
}

export type Route = {
  text: string;
  to: string;
  element: ReactNode;
};

export type ButtonProps = PropsWithChildren & {
  onClick: () => void;
  className?: string;
  style?: object;
  type?: "button" | "submit" | "reset";
};
