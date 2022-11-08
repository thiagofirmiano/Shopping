import React from "react";
import { Main } from "./ProductListing.styles";
import { Product } from "components/Product";
import { CreateContexts } from "contexts";
import { api } from "utils/api";
import { Header } from "components/Header";
import { Footer } from "components/Footer";

export const ProductListing: React.FC = () => {
  const { products,setProducts } = React.useContext(CreateContexts);

  React.useEffect(() => {
    const fetchProducts = async () => {
      const result = await api.get("/products");
      setProducts(result.data);
    };
    fetchProducts();
  }, [setProducts]);

  return (
    <React.Fragment>
      <Header /> 
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
      <Footer /> 
    </React.Fragment>
  );
}; 