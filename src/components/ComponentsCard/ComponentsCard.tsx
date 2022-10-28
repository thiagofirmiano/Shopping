import { Box, Button } from "@mui/material";
import { ProductCartDescription  } from "utils/auxiliaryFunction";
import React from "react";
import {CardWrapper,DeleteIcon,Description,Image,Price,ProductActions,ProductData,Title,Units,} from "./ComponentsCard.styles";
import TrashCan from "assets/icons/TrashCan.svg";
import { CreateContexts } from "contexts";


export const ComponentsCard : React.FC<ProductCartDescription > = ({
  id,
  title,
  image,
  price,
  count,
}) => {
    React.useContext(CreateContexts);

  const ArrouUpButtonClick = () =>{}
    
  const ArrouDownButtonClick = () =>{}
    
  const DeleteButtonClick = () =>{}
    
  const ProductItemClick = () =>{}
    

  return (
    <CardWrapper>
      <ProductData>
        <Image src={image} alt={title} onClick={ProductItemClick} />
        <Box>
          <Title onClick={ProductItemClick}>
            {title.length < 50 ? title : `${title.slice(0, 30)}...`}
          </Title>
          <Description>
            <Units>{count} Units</Units>
            <Price>U$ {(count * price).toFixed(2)}</Price>
          </Description>
        </Box>
      </ProductData>
      <ProductActions>
        <Box>
          <Button onClick={ArrouUpButtonClick}>
          </Button>
          <Button onClick={ArrouDownButtonClick}>
          </Button>
        </Box>
        <DeleteIcon
          onClick={DeleteButtonClick}
          src={TrashCan}
          alt="Trash can icon"
        />
      </ProductActions>
    </CardWrapper>
  );
};

