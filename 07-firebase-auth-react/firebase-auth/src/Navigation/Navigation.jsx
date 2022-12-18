import { StyledNavLink } from "./NavigationStyled";

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <StyledNavLink to="/">Home</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="auth/login">Login</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="auth/register">Register</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="auth/forgot-password">
            Forgot Password
          </StyledNavLink>
        </li>
      </ul>
    </nav>
  );
};
