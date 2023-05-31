import styled from "styled-components";

export const Card = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 18px;
  text-align: center;
`;

export const Heading = styled.h1`
  font-size: 36px;
  font-weight: 500;
  margin-bottom: 16px;
`;

export const Message = styled.p`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 24px;
`;

export const BackToStore = styled.p`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 24px;
  text-decoration: none;
  color: black;

  &:hover {
    color: #ff5722;
    transition: 0.3s;
  }
`;
