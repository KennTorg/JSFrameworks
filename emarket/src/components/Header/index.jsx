import React, { useContext } from "react";
import {
  HeaderWrapper,
  HeaderLogo,
  CheckoutLink,
  ShoppingCartIcon,
} from "./Header.styles";
import { Link } from "react-router-dom";
import Nav from "../Navbar";
import { CartContext } from "../../pages/Cart/CartContext";

const Header = () => {
  const { cartCount = 0 } = useContext(CartContext) || {}; // Accessing cartCount from the CartContext with optional chaining and default value assignment

  return (
    <HeaderWrapper>
      <HeaderLogo>
        <Link to='/'>
          <h1>EMARKET</h1>
        </Link>
      </HeaderLogo>
      <Nav />
      <CheckoutLink as={Link} to='/checkout' active>
        <span>{cartCount}</span>
        <ShoppingCartIcon />
      </CheckoutLink>
    </HeaderWrapper>
  );
};

export default Header;
