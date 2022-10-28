import { ProductCartDescription, ProductGetDescription  } from "utils/auxiliaryFunction";
import React from "react";

interface CartContextDescription {
  products: ProductGetDescription [];
  cart: ProductCartDescription[];
  setProducts: React.Dispatch<React.SetStateAction<ProductGetDescription []>>;
  getProduct: (id: number) => ProductGetDescription  | undefined;
  getItemsQuantity: () => number;
   
}

interface CartProviderProps {
  children: React.ReactNode;
}

export const CreateContexts = React.createContext<CartContextDescription >({} as CartContextDescription );

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [products, setProducts] = React.useState<ProductGetDescription []>([]);
  const [cart] = React.useState<ProductCartDescription[]>([]);

  const getProduct = (id: number) => {
    return products.find(product => product.id === id);
  };
  const getItemsQuantity = () =>
    cart.reduce((total, product) => total + product.count, 0); 
    
  return (
    <CreateContexts.Provider value={{
      products,
      cart,
      setProducts,
      getProduct,
      getItemsQuantity,
      
    
    }}>
      {children}
    </CreateContexts.Provider>
  );
};