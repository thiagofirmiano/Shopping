import { ComponentsCard } from "components/ComponentsCard";
import { CreateContexts } from "contexts";
import React from "react";
import {BuyButton,CartContent, CartProducts,CartSummary,CartText,Main,SummaryItem,SummaryLabel,SummaryValue,} from "./Cart.styles";

export const Cart: React.FC = () => {
  const {cart} = React.useContext(CreateContexts);

  return (   
    <React.Fragment>
      <Main>
        <CartText>Your cart</CartText>

        <CartContent>
          <CartProducts>
            {cart?.map(product => ( 
              <ComponentsCard
                key={product.id}
                id={product.id}
                title={product.title}
                image={product.image}
                price={product.price}
                count={product.count}
              />
            ))}
          </CartProducts>
          <CartSummary>
            <SummaryItem>
              <SummaryLabel>Shipping</SummaryLabel>
              <SummaryValue>U$ 0.00</SummaryValue>
            </SummaryItem>
            <SummaryItem>
              <SummaryLabel>Discount</SummaryLabel>
              <SummaryValue>U$ 0.00</SummaryValue>
            </SummaryItem>
            <SummaryItem>
              <SummaryLabel>Total</SummaryLabel>
            </SummaryItem>
            <BuyButton variant="contained">Make purchase</BuyButton>
          </CartSummary>
        </CartContent>
      </Main>
    </React.Fragment>
  );
}; 