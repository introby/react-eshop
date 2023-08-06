import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  type?: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
