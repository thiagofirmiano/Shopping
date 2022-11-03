import { styled } from "@mui/system";

export const Main = styled("main")({
  width: "90vw",
  minHeight: "calc(100vh - 200px)",
  margin: "120px 0 20px 0",
  display: "flex",
  justifyContent: "center",
  gap: 20,
  flexWrap: "wrap",
  "@media only screen and (max-width: 320px)": {
    "&": {
      gap: 0,
    },
  },
});  