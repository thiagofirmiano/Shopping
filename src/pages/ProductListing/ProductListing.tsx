import React from "react";
import { Main } from "./ProductListing.styles";
import { Product } from "components/Product";
import { CreateContexts } from "contexts";

export const ProductListing: React.FC = () => {
  const { products } = React.useContext(CreateContexts);

 
  return (
    <React.Fragment> 
      <Main>
      {products.map(product => 
          <Product
            key={product.id} 
            id={product.id}  
            image={product.image}
            title={product.title}
            description={product.description|| ""}
            price={product.price}
          />  
        )}
      </Main>
    </React.Fragment>
  );
};