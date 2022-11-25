import { Typography } from "@mui/material";
import React from "react";
import { ButtonIcon, LinkLoginWrapper, LinksAnotherLogin } from "./LoginsOption.styles";

interface LoginsOptionProps {
    message: "login" | "register";
}

export const LoginsOption: React.FC<LoginsOptionProps> = ({message}) => {
    const onButtonClick = () => {
        alert(`${message} with another account`);
    };
  return (
    <LinksAnotherLogin>
      <Typography>{`Or ${message} with`}:</Typography>
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