import styled from "styled-components";

export const ProductListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;
`;

export const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  margin-bottom: 10px;
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const CardPrice = styled.p`
  margin-bottom: 10px;
`;

export const CartCount = styled.p`
  font-weight: bold;
  margin-top: 20px;
`;

export const ViewButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px;
  border-radius: 8px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #ff5722;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
`;
