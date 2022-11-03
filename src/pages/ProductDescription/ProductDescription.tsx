import { Divider } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { AddButton, Aside, Description, DescriptionWrapper, Image, Main, Price, Title } from "./ProductDescription.styles";
import { ProductGetDescription  } from "utils/auxiliaryFunction";
import { CreateContexts } from "contexts";
import { useLocation, useNavigate } from "react-router-dom";
import { PagesConstantsRoutes } from "pages/contants";

export const ProductDescription: React.FC = () => {
  const [product, setProduct] = React.useState<ProductGetDescription | undefined>({} as ProductGetDescription);

  const { getProduct, addToCart } = React.useContext(CreateContexts);
  const location = useLocation();
  const navigate = useNavigate();

  const onAddToCartButtonClick = () => {
    if (product) addToCart(product);
    navigate(PagesConstantsRoutes.cart);
  };

  React.useEffect(() => {
    const productID = Number(location.pathname.split("/").reverse()[0]);
    const prod = getProduct(productID);
    if (!prod) navigate(PagesConstantsRoutes.products);
    setProduct(prod);
  }, [getProduct, location, navigate]);

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