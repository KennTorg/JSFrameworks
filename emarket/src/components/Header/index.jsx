import React, { useContext, useEffect, useState } from "react";
import {
  HeaderWrapper,
  HeaderLogo,
  CheckoutLink,
  ShoppingCartIcon,
  CartCounter,
} from "./Header.styles";
import { Link } from "react-router-dom";
import Nav from "../Navbar";
import { CartContext } from "../../pages/Cart/CartContext";

const Header = () => {
  const { cartCount = 0 } = useContext(CartContext) || {};
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeaderWrapper transparent={isScrolled}>
      <HeaderLogo>
        <Link to='/'>
          <h1>EMARKET</h1>
        </Link>
      </HeaderLogo>
      <Nav />
      <CheckoutLink as={Link} to='/checkout' active>
        <ShoppingCartIcon />
        <CartCounter>{cartCount}</CartCounter>
      </CheckoutLink>
    </HeaderWrapper>
  );
};

export default Header;
