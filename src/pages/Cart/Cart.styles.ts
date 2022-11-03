import { styled } from "@mui/system";
import { Button, Typography } from "@mui/material";

export const Main = styled("main")({
  width: "100%",
  padding: "120px 10vw 0 10vw",
  display: "flex",
  flexDirection: "column",
  minHeight: "calc(100vh - 60px)",
});

export const CartText = styled(Typography)({
  fontSize: 26,
  fontWeight: 600,
  lineHeight: "39px",
  letterSpacing: 0,
  color: "#353545",
});

export const CartContent = styled("section")({
  display: "flex",
  gap: "1vw",
  "@media only screen and (max-width: 580px)": {
    flexDirection: "column",
    alignItems: "center",
  },
});

export const CartProducts = styled("div")({
  width: "50vw",
  display: "flex",
  flexDirection: "column",
  gap: 10,
  marginBottom: 20,
  "@media only screen and (max-width: 580px)": {
    width: "80vw",
  },
  "@media only screen and (max-width: 365px)": {
    width: "90vw",
  },
  "@media only screen and (max-width: 320px)": {
    width: "94vw",
  },
});

export const CartSummary = styled("div")({
  paddingTop: 20,
  borderRadius: 5,
  width: "40vw",
  height: "40vh",
  backgroundColor: "#FFFFFF",
  position: "relative",
  "@media only screen and (max-width: 730px)": {
    "&": {
      width: "30vw",
    },
    "& p": {
      fontSize: 18,
    },
  },
  "@media only screen and (max-width: 600px)": {
    "&": {
      height: "50vw",
    },
    "& button": {
      fontSize: 10,
      height: 25,
    },
  },
  "@media only screen and (max-width: 580px)": {
    width: "80vw",
  },
  "@media only screen and (max-width: 320px)": {
    "& p": {
      fontSize: 14,
    },
  },
});

export const SummaryItem = styled("div")({
  display: "flex",
  alignItems: "center",
  padding: "0 20px",
  justifyContent: "space-between",
  "&:nth-child(3)": {
    marginTop: 50,
  },
  "@media only screen and (max-width: 600px)": {
    flexDirection: "column",
    "&:nth-child(3)": {
      marginTop: 0,
    },
  },
  "@media only screen and (max-width: 580px)": {
    flexDirection: "row",
  },
  "@media only screen and (max-width: 320px)": {
    "& p": {
      lineHeight: "25px",
    },
  },
});

export const SummaryLabel = styled(Typography)({
  fontWeight: 400,
  fontSize: 26,
  lineHeight: "39px",
  letterSpacing: 0,
  textAlign: "left",
  color: "#222",
});

export const SummaryValue = styled(Typography)({
  fontWeight: 600,
  fontSize: 26,
  lineHeight: "39px",
  letterSpacing: 0,
  textAlign: "left",
  color: "#222",
});

export const BuyButton = styled(Button)({
  width: "100%",
  height: 40,
  position: "absolute",
  bottom: 0,
});