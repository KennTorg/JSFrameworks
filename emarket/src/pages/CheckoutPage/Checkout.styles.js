import styled from "styled-components";

export const Card = styled.div`
  padding: 1.5em;
  width: 100%;
  max-width: 600px;
  margin: 5em auto;
  background-color: #f5f5f5;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1em;
`;

export const Input = styled.input`
  width: 50px;
  text-align: center;
  padding: 0.5em;
  border: 1px solid #ccc;
  border-radius: 4px;

  @media only screen and (max-width: 768px) {
    width: 40px;
  }

  @media only screen and (max-width: 480px) {
    width: 30px;
  }
`;

export const Buttons = styled.button`
  border: none;
  background-color: #ddd;
  padding: 0.5em 1em;
  margin-left: 0.5em;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ccc;
  }

  @media only screen and (max-width: 480px) {
    padding: 0.3em 0.8em;
    margin-left: 0.3em;
  }
`;

export const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1.5rem;

  @media only screen and (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

export const RemoveButton = styled.button`
  background-color: red;
  border: none;
  padding: 0.5em 1em;
  margin-left: 0.5em;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  color: #fff;

  &:hover {
    color: #333;
    transition: 0.3s;
  }
`;

export const CheckoutButton = styled.button`
  background-color: green;
  border: none;
  padding: 0.5em 1em;
  margin-left: 0.5em;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  color: #fff;
  margin: 20px;

  &:hover {
    transition: 0.3s;
    transform: scale(1.1);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
`;
