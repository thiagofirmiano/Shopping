import React from "react";
import {HeaderWrapper,NavBar,NavLink,UserAvatar,} from "./Header.styles";
import ShoppingCart from "assets/icons/ShoppingCart.svg";
import { CreateContexts } from "contexts";
import { PagesConstantsRoutes } from "pages/contants/routes";


export const Header: React.FC = () => {
  const { getItemsQuantity } = React.useContext(CreateContexts);
  const itemsQuantity = getItemsQuantity();

  return (
    <HeaderWrapper>

      <NavBar>
        <NavLink to={PagesConstantsRoutes.productListing}>Products</NavLink>
        <NavLink to={PagesConstantsRoutes.cart}>
          <img src={ShoppingCart} alt="Shopping cart" />
          {itemsQuantity}
        </NavLink> 

        <UserAvatar
          src="https://avatars.githubusercontent.com/u/73958393?v=4"
          alt="user avatar"
        />
      </NavBar>
    </HeaderWrapper>
  );
};