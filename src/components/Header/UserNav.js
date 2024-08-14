import { NavLink, Link } from "react-router-dom"
import { useAuthContext } from "../../contexts/AuthContext"


export default function UserNav() {
    const context = useAuthContext();
    return(
        <div id="profile" >

        <Link style={{fontSize: '30px', color: '#fff', position: 'relative', right: '250px', bottom: '20px' }} className="welcome">Hello, {context.username}</Link>
        <NavLink to="/create" >Create</NavLink>
        <NavLink to="/profile" >My Profile</NavLink>
        <NavLink to="/logout" >Logout</NavLink>
     
       </div>
    )
}
