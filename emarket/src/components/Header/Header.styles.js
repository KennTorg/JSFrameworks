import styled, { keyframes } from "styled-components";
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
  color: #333;
  text-decoration: none;

  span {
    margin-right: 8px;
  }

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

// Define the animation keyframes
const scaleAnimation = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(2);
  }
`;

// Apply the animation to the styled component
export const AddToCartAnimation = styled.div`
  animation: ${scaleAnimation} 0.3s ease-in-out;
`;
