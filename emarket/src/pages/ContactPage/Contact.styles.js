import styled from "styled-components";

export const FormContainer = styled.div`
  margin: 2rem auto;
  margin-top: 5rem;
  margin-bottom: 5rem;
  max-width: 600px;
  padding: 2rem;
  background-color: rgb(245, 245, 245);
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    margin-top: 3rem;
    margin-bottom: 3rem;
    padding: 1.5rem;
  }
`;

export const H1 = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1rem;
  font-family: Roboto, Montserrat;
  color: #333;
`;

export const Hr = styled.hr`
  border: none;
  height: 1px;
  background-color: #5722;
  margin-bottom: 2rem;
`;

export const Label = styled.label`
  font-family: Roboto, Montserrat;
  margin-bottom: 1rem;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  border: none;

  &:focus {
    outline: 1px solid;
    border-color: #333;
    transition: 0.3s;
  }

  &:invalid {
    border-color: red;
  }
`;

export const TextArea = styled.textarea`
  display: block;
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  border: none;

  &:focus {
    outline: 1px solid;
    border-color: #333;
  }

  &:invalid {
    border-color: #333;
  }
`;

export const Button = styled.button`
  background-color: #0077cc;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #005fa3;
  }
`;

export const ErrorMessage = styled.div`
  color: #cc0000;
  font-size: 0.8rem;
  margin-top: 0.2rem;
`;
