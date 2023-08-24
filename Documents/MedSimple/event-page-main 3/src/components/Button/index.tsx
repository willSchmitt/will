import { ButtonHTMLAttributes } from "react";

export type ButtonProps = {
  size?: "auto" | "full";
}

type Props = ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps;

import { ButtonContainer } from "./styles";

export const Button = ({ size = "auto", ...rest }: Props) => {
  return (
    <ButtonContainer type="button" size={size} {...rest}></ButtonContainer>
  );
};
