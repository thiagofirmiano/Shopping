import { ComponentsCard } from "components/ComponentsCard";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { CreateContexts } from "contexts";
import React from "react";
import {NextButton,Content, Products,Summary,Text,Main,Item,Label,Value,} from "./Cart.styles";

export const Cart: React.FC = () => {
  const {cart, Total } = React.useContext(CreateContexts);

  return (   
    <React.Fragment> 
      <Header />
      <Main>
        <Text>Carinho</Text>
        <Content>
          <Products>
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
          </Products>
          <Summary>
            <Item>
              <Label>Shopping Card</Label>
              <Value>U$ 0.00</Value>
            </Item>
            <Item>
              <Label>count</Label>
              <Value>U$ 0.00</Value>
            </Item>
            <Item>
              <Label>Total</Label>
              <Value>U$ {Total().toFixed(2)}</Value>
            </Item>
            <NextButton variant="contained">Confirmar</NextButton>
          </Summary>
        </Content>
      </Main>
      <Footer /> 
    </React.Fragment>
  );
}; 