import { Typography } from "@mui/material";
import React from "react";
import { ButtonIcon, LinkLoginWrapper, LinksAnotherLogin } from "./LoginsOption.styles";

interface LoginsOptionProps {
    message: "login" | "register";
}

export const LoginsOption: React.FC<LoginsOptionProps> = ({message}) => {
    const onButtonClick = () => {
        alert(`${message} com outra conta`);
    };
  return (
    <LinksAnotherLogin>
      <Typography>{`Ou faça o ${message} com`}:</Typography>
      <LinkLoginWrapper>
        <ButtonIcon onClick={onButtonClick}>  
        </ButtonIcon>
        <ButtonIcon onClick={onButtonClick}>   
        </ButtonIcon>
        <ButtonIcon onClick={onButtonClick}>
        </ButtonIcon>
      </LinkLoginWrapper>
    </LinksAnotherLogin>
  );
};