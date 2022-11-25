import { Footer } from "components/Footer";
import React from "react";
import { LoginWrapper, LoginContainer, Button, LinkRegister } from "./Login.styles";
import { Typography } from '@mui/material';
import { UserContext } from "contexts";
import { useNavigate } from "react-router-dom";
import { AlternativeLogins } from "components/LoginsOption";
import { Input } from "components/Input/Input";
import { PagesConstantsRoutes } from "pages/contants";
 
export const Login: React.FC = () => {
  const navigate = useNavigate();
  const [inputEmail, setInputEmail] = React.useState("");
  const [inputPassword, setInputPassword] = React.useState("");
  const { Login, user } = React.useContext(UserContext);
  const onInputEmailChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setInputEmail(e.target.value);
  };
  const onInputPasswordChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    setInputPassword(e.target.value);
  };
  const onLoginButtonClick = () => {
    if(Login(inputEmail, inputPassword)){
      alert("Welcome "+ user.name);
      navigate(PagesConstantsRoutes.products);
    }
  };
  return (
   <React.Fragment>
    <LoginWrapper>
      <LoginContainer>
        <Input 
          label="Email"
          onChange={onInputEmailChange}
          value={inputEmail}
          id="email"
          type="email"
        />
        <Input 
          label="Password"
          onChange={onInputPasswordChange}
          value={inputPassword}
          id="password"
          type="password"
        />
         <Button onClick={onLoginButtonClick}>Login</Button>
         
         <AlternativeLogins message="login" />
      </LoginContainer>
      <Typography>
        Are you new here? <LinkRegister to = {PagesConstantsRoutes.register}>Create an account</LinkRegister>
      </Typography>
    </LoginWrapper>
    <Footer />
   </React.Fragment>
  );
};