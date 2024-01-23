import { Outlet } from "react-router-dom";
import { StyledNav, StyledLink } from "./styles";

const Layout = () => (
  <>
    <StyledNav>
      <StyledLink to="/">Home </StyledLink>
      <StyledLink to="/houses">Houses </StyledLink>
      <StyledLink to="/contact">Contact</StyledLink>
    </StyledNav>
    <Outlet />
  </>
);

export default Layout;
