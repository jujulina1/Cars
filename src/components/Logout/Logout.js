import { useContext, useEffect } from "react";
import { Navigate } from 'react-router-dom';
import { AuthContext } from "../../contexts/AuthContext";


export default function Logout() {

    const context = useContext(AuthContext);
    
    

    useEffect(() => {
        context.onLogout(context.accessToken);
        
    },[context])

    return (
        <Navigate to={'/'} replace={true}/>
    )

}