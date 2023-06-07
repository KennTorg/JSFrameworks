import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";

export const HeaderWrapper = styled.header`
  a {
    text-decoration: none;
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #f5f5f5;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px 10px;
  }
`;

export const HeaderLogo = styled.div`
  flex: 1;
  h1 {
    color: #ff5722;
  }
  font-size: 24px;
  font-weight: bold;
  font-family: Roboto;
  color: #333;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

export const CheckoutLink = styled.a`
  display: flex;
  align-items: center;
  position: relative;
  color: #333;
  text-decoration: none;

  @media (max-width: 768px) {
    font-size: 14px;

    span {
      font-size: 12px;
    }
  }
`;

export const ShoppingCartIcon = styled(FaShoppingCart)`
  width: 20px;
  height: 20px;
  padding: 10px;

  &:hover {
    color: #ff5722;
    transition: 0.3s;
  }

  @media (max-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;

export const CartCounter = styled.span`
  display: inline-block;
  background-color: #ff5722;
  color: #fff;
  font-size: 10px;
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 50%;
  margin-left: 5px;
  position: absolute;
  top: -5px;
  right: -5px;
`;
