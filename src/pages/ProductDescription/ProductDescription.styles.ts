import { Button, styled, Typography } from "@mui/material";

export const OnDescriptionWrapper = styled("div")({
  width: "40vw",
  height: "fit-content",
  backgroundColor: "#FFFFFF",
  padding: 20,
  borderRadius: 5,
  "@media only screen and (max-width: 660px)": {
    "&": {
      width: "80vw",
    },
  },
});

export const TitleText = styled(Typography)({
  fontSize: 26,
  fontWeight: 500,
  color: "#222",
  "@media only screen and (max-width: 470px)": {
    "&": {
      fontSize: 20,
      textAlign: "center",
    },
  },
});

export const Rating = styled(Typography)({
  fontSize: 18,
  fontStyle: "italic",
  color: "#555",
});

export const Description = styled(Typography)({
  marginTop: 10,
  fontSize: 18,
  color: "#222",
  textAlign: "justify",
  textIndent: 50,
  "@media only screen and (max-width: 355px)": {
    "&": {
      fontSize: 16,
    },
  },
});
export const Price = styled(Typography)({
  textAlign: "center",
  fontSize: 26,
  fontWeight: 700,
  color: "#1976D2",
  display: "flex",
  flexDirection: "column",
  "& span": {
    fontSize: 20,
    color: "#222",
  },
});
export const AddButton = styled(Button)({
});
export const PrincipalMain = styled("main")({
  marginTop: 120,
  minHeight: "calc(100vh - 180px)",
  display: "flex",
  gap: "1vw",
  padding: "0 5vw",
  "@media only screen and (max-width: 660px)": {
    "&": {
      gap: "2vh",
      flexDirection: "column",
    },
  },
});
export const Img = styled("img")({
  width: "20vw",
  borderRadius: 5,
  alignSelf: "flex-start",
  "@media only screen and (max-width: 660px)": {
    "&": {
      margin: "0 auto 0 auto",
    },
  },
});
export const AparteAside = styled("div")({
  padding: 20,
  borderRadius: 5,
  alignSelf: "flex-start",
  "@media only screen and (max-width: 660px)": {
    "&": {
      margin: "0 auto 0 auto",
    },
  },
});