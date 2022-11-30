import { Typography } from "@mui/material";
import React from "react";
import { ButtonIcon, LinkWrapper, LinksLogin } from "./LoginsOption.styles";

import Facebook from "assets/icons/Facebook.svg"

interface LoginsOptionProps {
    message: "login" | "register";
}

export const LoginsOption: React.FC<LoginsOptionProps> = ({message}) => {
    const onButtonClick = () => {
        alert(`${message} com outra conta`);
    };
  return (
    <LinksLogin>
      <Typography>{`Ou faça o ${message} com`}:</Typography>
      <LinkWrapper>
        <ButtonIcon onClick={onButtonClick}>          
        </ButtonIcon>
        <ButtonIcon onClick={onButtonClick}>
        </ButtonIcon>
        <ButtonIcon onClick={onButtonClick}>
        <img src={Facebook} alt="Facebook" /> 
        </ButtonIcon>
      </LinkWrapper>
    </LinksLogin>
  );
};