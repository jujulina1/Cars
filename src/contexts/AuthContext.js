import { createContext, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { login, register, logout } from '../services/AuthService';
import { useLocalStorage } from "../hooks/useLocalStorage";

export const AuthContext = createContext();

export const ContextProvider = ({
    children
}) => {

    const [auth, setAuth] = useLocalStorage('auth', {});
    
    const navigate = useNavigate();

  //// ----- LOGIN -------/////
    const onLoginSubmit = async (inputs) => {
        

        try {
            
            const response = await login({ ...inputs })
            const data = await response.json();
            console.log(data);
            if (response.status !== 200) {

                throw new Error(data.message)
            }
            setAuth(data);
            navigate('/');

        } catch (error) {
           
            alert(error.message);
            navigate ('/login')

        }

    }
  //// ----- REGISTER -------/////

    const onRegisterSubmit = async (inputs) => {

    try {
         // console.log(values);
         const response = await register({ ...inputs })
         const data = await response.json();
         
         if (response.status !== 200) {

             throw new Error(data.message)
         }
         setAuth(data);
         navigate('/')

     } catch (error) {

         alert(error.message);
         navigate ('/register')
;
     }

} 
      //// ----- LOGOUT --------////

    const onLogout = async (accessToken) => {
        console.log(accessToken);
        try {
           const response = await logout(accessToken);
           if (response.status === 204) {
            
            setAuth({});
           

              
           }else {
               const data = await response.json();
               throw new Error(data.message)
           }

       } catch (error) {
           alert(error.message);
           navigate('/')
       }
     
   }

    const context = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        _id: auth._id,
        accessToken: auth.accessToken,
        username: auth.username,
        email: auth.email,
        gender: auth.gender
       }

 return <AuthContext.Provider value={context}>
      {children}
 </AuthContext.Provider>
}

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    return context;
};