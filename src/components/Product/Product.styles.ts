import { styled } from "@mui/system";
import { Typography } from "@mui/material";

export const CardWrapper = styled("div")({
  backgroundColor: "#FFFFFF",
  width: 260,
  padding: 20,
  borderRadius: 5,
  boxShadow: "5px 5px 5px #353545",
  marginTop: 5,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  "@media only screen and (max-width: 320px)": {
    "&": {
      transform: "scale(0.7)",
      marginTop: -50,
    },
  },
});

export const Image = styled("img")({
  height: 160,
  width: 165,
  cursor: "pointer",
});

export const Title = styled(Typography)({
  fontSize: 18,
  fontWeight: 600,
  lineHeight: "29px",
  letterSpacing: 0,
  textAlign: "left",
  marginTop: 10,
  color: "#222",
  cursor: "pointer",
  transition: "all .2s",
  "&:hover": {
    color: "rgb(25, 118, 210)",
  },
});

export const Description = styled(Typography)({
  fontSize: 14,
  fontWeight: 500,
  lineHeight: "17px",
  letterSpacing: 0,
  textAlign: "left",
  margin: "10px 0 10px",
  color: "#373737",
});

export const Footer = styled("div")({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const Price = styled(Typography)({
  fontSize: 18,
  fontWeight: 500,
  lineHeight: "29px",
  letterSpacing: 0,
  textAlign: "left",
  color: "#222",
});