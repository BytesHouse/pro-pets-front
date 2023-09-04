import { MouseEventHandler } from "react";

export interface ButtonProps {
  icon: JSX.Element;
  text: string;
}
export interface BtnProps {
  text: string;
  onclick: MouseEventHandler<HTMLButtonElement>;
}
