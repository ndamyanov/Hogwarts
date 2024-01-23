import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-size: 2rem;
  color: var(--color-main);
`;
