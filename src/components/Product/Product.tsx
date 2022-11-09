import { Box, Button } from "@mui/material";
import React from "react";
import {CardWrapper,Image,Description,Footer,Price,Title,} from "./Product.styles";
import { useNavigate } from "react-router-dom";
import { CreateContexts } from "contexts";

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
  
  const navigate = useNavigate();
  const { addToCart } = React.useContext(CreateContexts);

  const onProductClick = () => navigate(`/product-Description/${id}`);

  const onAddToCartClick = () => {
    addToCart({
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
          Add no carrinho
        </Button>
      </Footer>
    </CardWrapper>
  );
};


