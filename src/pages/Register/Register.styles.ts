import { Box, Button as Btn } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";

export const LoginWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  
});

export const LoginContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  background: "#FFFFFF",
  borderRadius: "5px",
  width:"40vw",
  padding: "50px 0",
  gap: "2em",

  "& > svg": {
    color: "#C71D1D",
  },
  "@media (min-width: 0px) and (max-width: 650px)": {
    width: "80vw",
  },
});

export const Button = styled(Btn)({
  alignSelf: "center",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  background: "#FFFF00",
  flexGrow: 0,
  height: "51px",
  width: "80%",
  border: "none",
  borderRadius: "5px",
  color: "#FFFFFF",
  fontFamily: "Inter",
  fontWeight: 600,
  fontSize: "16px",
  "&:hover": {
    transition: "all 0.5s",
    color: "#F0F0F0",
    background: "#82CF5D",
    cursor: "pointer",
  }, 
});
export const LinkRegister = styled(Link)({
  color: "#C71D1D",
});