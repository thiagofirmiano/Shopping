import { styled } from "@mui/system";
import { Link } from "react-router-dom";

export const HeaderWrapper = styled("header")({
  width: "100%",
  height: 90,
  backgroundColor: "#FFF",
  padding: "0 50px",
  display: "flex",
  justifyContent: "space-between",
  position: "fixed",
  left: 0,
  top: 0,
  zIndex: 1,
  "@media only screen and (max-width: 630px)": {
    "&": {
      flexDirection: "column",
      padding: "10px 0",
    },
  },
  "@media only screen and (max-width: 450px)": {
    "& a": {
      fontSize: 16,
    },
    "& p": {
      fontSize: 20,
    },
    "& img": {
      width: 18,
      height: 18,
    },
    "& img[alt='user avatar']": {
      width: 30,
      height: 30,
    },
  },
  "@media only screen and (max-width: 380px)": {
    "& img[alt='user avatar']": {
      display: "none",
    },
  },
  "@media only screen and (max-width: 320px)": {
    "& a": {
      fontSize: 12,
    },
  },
});

export const NavBar = styled("nav")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 20,
});

export const NavLink = styled(Link)({
  fontFamily: "roboto, sans-serif",
  textDecoration: "none",
  textTransform: "uppercase",
  fontSize: 17,
  color: "#222",
});

export const UserAvatar = styled("img")({
  width: 48,
  height: 48,
  marginLeft: 18,
  borderRadius: "100%",
  border: "2px solid #1976D2",
});