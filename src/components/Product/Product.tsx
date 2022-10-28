import { Box, Button } from "@mui/material";
import React from "react";
import {CardWrapper,Image,Description,Footer,Price,Title,} from "./Product.styles";

interface ProductCardProps {
  id: number; 
  image: string;
  title: string;
  description: string;
  price: number;
}

export const Product: React.FC<ProductCardProps> = ({
  image,
  title,
  description,
  price,
  id,
}) => {

  const onProductClick = () => {
  };

  const onAddToCartClick = () => {
    addCart({
      id,
      title,
      image,
      price,
    });
  };

  return (
    <CardWrapper>
      <Image
        src={image}
        alt={title}
        onClick={onProductClick}  
      />
      <Box>
        <Title onClick={onProductClick}>
          {title.length > 50 ? `${title?.slice(0, 50)}...` : title}
        </Title>
        <Description>{`${description?.slice(
          0,
          50,
        )}...`}</Description>
      </Box>
      <Footer>
        <Price>U$ {price.toFixed(2)}</Price>
        <Button
          variant="contained"
          onClick={onAddToCartClick}
        >
          Add to cart
        </Button>
      </Footer>
    </CardWrapper>
  );
};


function addCart(arg0: { id: number; title: string; image: string; price: number; }) {
  throw new Error("Function not implemented.");
}

