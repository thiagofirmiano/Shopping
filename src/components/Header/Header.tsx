import React from "react";
import {TopoHeader,Bar,NavLink,Avatar,} from "./Header.styles";
import ShoppingCart from "assets/icons/ShoppingCart.svg";
import { CreateContexts } from "contexts";
import { PagesConstantsRoutes } from "pages/contants/routes";
import logo from "../../assets/icons/logo.svg";
import { Link } from "react-router-dom";
 
export const Header: React.FC = () => {
  const { getItemsQuantity } = React.useContext(CreateContexts);
  const itemsQuantity = getItemsQuantity();

  return (
    <TopoHeader>
     <Link to="/"> 
        <img src={logo} alt="Logo" /> 
      </Link>
      <Bar>
        <NavLink to={PagesConstantsRoutes.productListing}>Products</NavLink>
        <NavLink to={PagesConstantsRoutes.cart}>
          <img src={ShoppingCart} alt="Shopping cart" />
          {itemsQuantity}
        </NavLink> 

        <Avatar
          src=""
          alt="user avatar"
        />
      </Bar>
    </TopoHeader>
  );
};