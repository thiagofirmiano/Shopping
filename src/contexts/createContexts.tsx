import { ProductCartDescription, ProductGetDescription  } from "utils/auxiliaryFunction";
import React from "react";

interface CartContextDescription {
  products: ProductGetDescription [];
  cart: ProductCartDescription[];
  setProducts: React.Dispatch<React.SetStateAction<ProductGetDescription []>>;
  getProduct: (id: number) => ProductGetDescription  | undefined;
  getItemsQuantity: () => number;
  addToCart: (product: ProductGetDescription) => void;
  removeCart: (id: number) => void;
  aumentarCart: (id: number) => void;
  diminuirCart: (id: number) => void;
  Total: () => number; 
}

interface CartProviderProps {
  children: React.ReactNode;
}

export const CreateContexts = React.createContext<CartContextDescription >({} as CartContextDescription );

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [products, setProducts] = React.useState<ProductGetDescription []>([]);
  const [cart, setCart] = React.useState<ProductCartDescription[]>([]);

  const getProduct = (id: number) =>
  products.find(product => product.id === id);
const addToCart = (product: ProductGetDescription) => {
  const cartList = [...cart];
  const isInCart = cartList.some(item => item.id === product.id);
  if (isInCart) return;
  cartList.push({
    id: product.id,
    title: product.title,
    image: product.image, 
    price: product.price,
    count: 1,
  });
  setCart(cartList);
};
  const getItemsQuantity = () =>
    cart.reduce((total, product) => total + product.count, 0); 
    const Total = () =>
    cart.reduce((total, product) => total + product.count * product.price, 0);
  const aumentarCart = (id: number) => {
    const cartList = cart.map(product => {
      if (product.id === id) product.count += 1;

      return product;
    });
    setCart(cartList);
  };
  const diminuirCart = (id: number) => {
    const cartList = cart.map(product => {
      if (product.id === id && product.count > 1) product.count -= 1;

      return product;
    });
    setCart(cartList);
  };
  const removeCart = (id: number) => {
    const cartList = cart.filter(product => product.id !== id);
    setCart(cartList);
  };
    
  return (
    <CreateContexts.Provider value={{
      products,
      cart,
      setProducts,
      getProduct,
      getItemsQuantity,
      addToCart,
      removeCart,
      aumentarCart,
      diminuirCart,
      Total,
    
    }}>
      {children}
    </CreateContexts.Provider>
  );
};