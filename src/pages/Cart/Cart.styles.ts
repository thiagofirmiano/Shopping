import { styled } from "@mui/system";
import { Button, Typography } from "@mui/material";

export const Label = styled(Typography)({
  fontWeight: 400,
  fontSize: 26,
  lineHeight: "39px",
  letterSpacing: 0,
  textAlign: "left",
  color: "#222",
});

export const Value = styled(Typography)({
  fontWeight: 600,
  fontSize: 26,
  lineHeight: "39px",
  letterSpacing: 0,
  textAlign: "left",
  color: "#222",
});

export const NextButton = styled(Button)({
  width: "100%",
  height: 40,
  position: "absolute",
  bottom: 0,
});
export const Products = styled("div")({
  width: "55vw",
  display: "flex",
  flexDirection: "column",
  gap: 12,
  marginBottom: 30,
});

export const Summary = styled("div")({
  paddingTop: 20,
  borderRadius: 5,
  width: "40vw",
  height: "40vh",
  backgroundColor: "#FFFFFF",
  position: "relative",
});

export const Item = styled("div")({
  display: "flex",
  alignItems: "center",
  padding: "0 20px",
  justifyContent: "space-between",
  "&:nth-child(3)": {
    marginTop: 50,
  },
});
export const Main = styled("main")({
  width: "100%",
  padding: "120px 10vw 0 10vw",
  display: "flex",
  flexDirection: "column",
  minHeight: "calc(100vh - 60px)",
});

export const Text = styled(Typography)({
  lineHeight: "39px",
  letterSpacing: 0,
  color: "#353545",
  fontSize: 26,
  fontWeight: 600,
});

export const Content = styled("section")({
  display: "flex",
  gap: "1vw",
});