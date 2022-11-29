import { Typography } from "@mui/material";
import {  Footer } from "components/Footer";
import { Input } from "components/Input/Input";
import { PagesConstantsRoutes } from "pages/contants";
import React from "react";
import {Button,LinkRegister,LoginContainer,LoginWrapper} from "./Register.styles";
import {validatePassword,validateEmail} from "utils/ValidatePassword";
import { UserContext } from "contexts";
import { useNavigate } from "react-router-dom";
import { LoginsOption } from "components/LoginsOption/LoginsOption";
import { ValidPasswordRules } from "components/ValidPasswordRules/ValidPasswordRules";

export const Register: React.FC = () => {
  const navigate = useNavigate();
  const { RegisterUser } = React.useContext(UserContext);

  const [inputEmail, setInputEmail] = React.useState("");
  const [inputName, setInputName] = React.useState("");
  const [inputPassword, setInputPassword] = React.useState("");
  const [inputConfirmPassword, setInputConfirmPassword] = React.useState("");

  let passwordValid = validatePassword(inputPassword);
  let passwordMatch = (inputPassword === inputConfirmPassword);
  let emailValid = validateEmail(inputEmail);

  const onRegisterButtonClick = () => {
    if (RegisterUser(inputName, inputEmail, inputPassword)) {
      alert("Registered User!");
      navigate(PagesConstantsRoutes.login);
    }
  };
  const onInputEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputEmail(e.target.value);
  };
  const onInputNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputName(e.target.value);
  };
  const onInputPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputPassword(e.target.value);
  };
  const onInputConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputConfirmPassword(e.target.value);
  };

  return (
    <React.Fragment>
      <LoginWrapper>
        <LoginContainer>
          <Input
            label="Email:"
            onChange={onInputEmailChange}
            value={inputEmail}
            id="email"
            type="email"
            helpText={emailValid || inputEmail === "" ? "" : "Email inválido"}
            colorHelp="red"
          />
          <Input
            label="Name:"
            onChange={onInputNameChange}
            value={inputName}
            id="name"
            type="text"
          />
          <Input
            label="Password:"
            onChange={onInputPasswordChange}
            value={inputPassword}
            id="password"
            type="password"
            helpText={
              (passwordValid || inputPassword === "") ? "" : "password inválida"
            }
            colorHelp="red"
          />
          <Input
            label="Confirm Password:"
            onChange={onInputConfirmPasswordChange}
            value={inputConfirmPassword}
            id="password"
            type="password"
            helpText={
              inputConfirmPassword === ""
                ? ""
                : passwordMatch
                ? "Palavras-chave correspondem"
                : "as senhas não correspondem"
            }
            colorHelp={passwordMatch ? "green" : "red"}
          />

          <ValidPasswordRules password = {inputPassword}/>

          <Button
            disabled={
              !(
                passwordValid &&
                passwordMatch &&
                emailValid &&
                inputName !== ""
              )
            }
            onClick={onRegisterButtonClick}
          >
            Register
          </Button>

          <LoginsOption message="register" />
        </LoginContainer>
        <Typography>
        Já tem uma conta?{" "}
          <LinkRegister to={PagesConstantsRoutes.login}>Login</LinkRegister>
        </Typography>
      </LoginWrapper>
      <Footer />
    </React.Fragment>
  );
};