import { PropsWithChildren, ReactNode } from "react";
import store from "../app/store";
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

export type Pokemon = {
  name: string;
  url: string;
};

export type PokemonAPI = {
  name: string;
  image: string;
};

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
