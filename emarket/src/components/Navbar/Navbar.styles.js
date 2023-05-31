import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Ul = styled.ul`
  display: flex;
  list-style: none;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 1rem;
    padding-left: 0;
  }
`;

export const Li = styled.li`
  margin-right: 1rem;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 0.5rem;
  }
`;

export const NavLink = styled(Link)`
  color: #333;
  text-decoration: none;
  font-family: Roboto, Montserrat;

  &:hover {
    color: #ff5722;
    transition: color 0.3s ease;
  }
`;
