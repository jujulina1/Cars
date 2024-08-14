import { NavLink } from "react-router-dom";
export default function GuestNav() {
    return (
        <div id="guest" >
            <NavLink to="/login" >Login</NavLink>
            <NavLink to="/register" >Register</NavLink>
        </div>
    )

}