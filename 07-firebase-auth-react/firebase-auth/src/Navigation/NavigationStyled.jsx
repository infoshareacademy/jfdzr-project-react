import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
  background: yellow;
  color: blue;
  font-size: 36px;
  box-sizing: 5px;
  font-size: 16px;
  text-decoration: none;
  &:visited {
    color: red;
  }
`;
