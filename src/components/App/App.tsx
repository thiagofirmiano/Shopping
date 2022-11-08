import { Router } from "components/Router";
import { CartProvider } from "contexts";
import React from "react";
import { ContantWrapper } from "./App.styles";

export const App: React.FC = () => (
  <ContantWrapper>
    <CartProvider>
      <Router /> 
    </CartProvider>
  </ContantWrapper>
); 