import { Divider } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { AddButton, Aside, Description, DescriptionWrapper, Image, Main, Price, Title } from "./ProductDescription.styles";
import { ProductGetDescription  } from "utils/auxiliaryFunction";

export const ProductDescription: React.FC = () => {
  const [product] = React.useState<ProductGetDescription | undefined>({} as ProductGetDescription);


  const onAddToCartButtonClick = () => {  
  };

  return (
    <React.Fragment>
      <Main> 
        <Image src={product?.image} alt={product?.title} />
        <DescriptionWrapper>
          <Title>
            {product?.title}
          </Title>
          <Divider />
          <Description>
            {product?.description}
          </Description>
        </DescriptionWrapper>
        <Aside>
          <Price>
            <Box component="span">Now, for only:</Box>
            U$ {product?.price?.toFixed(2)}
          </Price>
          <AddButton variant="contained" onClick={onAddToCartButtonClick}>
            Add to cart
          </AddButton>
        </Aside>
      </Main>
    </React.Fragment>
  );
};