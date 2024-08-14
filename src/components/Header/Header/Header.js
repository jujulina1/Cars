import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { AuthContext } from "../../../contexts/AuthContext"
import '../Header/Header.css'
import GuestNav from "../GuestNav";
import UserNav from "../UserNav";


export default function Header() {

    const context = useContext(AuthContext);

    return (

        <header>

            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to="/catalog" >All Listings</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                {context._id ? <UserNav /> : <GuestNav />}
            </nav>
        </header>
    )
}