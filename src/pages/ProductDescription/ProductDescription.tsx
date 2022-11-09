import { Divider } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { AddButton, AparteAside, Description, OnDescriptionWrapper, Img, PrincipalMain, Price, TitleText,Rating } from "./ProductDescription.styles";
import { ProductGetDescription  } from "utils/auxiliaryFunction";
import { CreateContexts } from "contexts";
import { useLocation, useNavigate } from "react-router-dom";
import { PagesConstantsRoutes } from "pages/contants";
import { Footer } from "components/Footer";
import { Header } from "components/Header";

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
      <Header />
      <PrincipalMain>
        <Img src={product?.image} alt={product?.title} />
        <OnDescriptionWrapper>
          <TitleText>
            {product?.title}
          </TitleText>
          <Rating>Rating: {product?.rating?.rate}</Rating>
          <Divider />
          <Description>
            {product?.description}
          </Description>
        </OnDescriptionWrapper>
        <AparteAside>
          <Price>
            <Box component="span">Aproveite, por apenas:</Box>
            U$ {product?.price?.toFixed(2)}
          </Price>
          <AddButton variant="contained" onClick={onAddToCartButtonClick}>
            Add no carrinho
          </AddButton>
        </AparteAside>
      </PrincipalMain>
      <Footer />
    </React.Fragment>
  );
};