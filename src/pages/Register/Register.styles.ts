import { Box, Button as Btn } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";

export const LoginWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "auto",
});

export const LoginContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  width: "100%",
  minWidth: "80vw", 
  background: "#FFFFFF",
  borderRadius: "5px",
  marginTop: "4em",
  padding: "4em 12em",
  gap: "1.5em",
  
  "& > svg": {
    color: "#C71D1D",
  },
  "@media (min-width: 900px)": {
    minWidth: "70vh",
  },
  "@media (min-width: 0px) and (max-width: 380px)": {
    marginTop: "70px",
    minWidth: "70vw",
    padding: "2em 1em",
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