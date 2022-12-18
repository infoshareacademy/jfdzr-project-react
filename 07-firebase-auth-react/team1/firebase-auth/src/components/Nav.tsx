import { NavLink } from "react-router-dom";

export const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/auth/login">Login</NavLink>
                </li>
                <li>
                    <NavLink to="/auth/register">Register</NavLink>
                </li>
            </ul>
        </nav>
    )

}
