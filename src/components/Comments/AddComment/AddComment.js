import { useState, useContext } from "react";
import { createComment } from "../../../services/CarService";
// import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { chooseAvatar } from "../../../utils/chooseAvatar";
import { useNavigate } from "react-router-dom";


export default function AddComment({
    carId
    
}) {

    const initialValues = {
        comment: ''
    }

    const [values, setValues] = useState(initialValues);
    const context = useContext(AuthContext);
    const avatar = chooseAvatar(context.gender);
    const navigate = useNavigate();
    
   

    const onChangeHandler = (e) => {

        setValues(state => ({...state, [e.target.name]: e.target.value}))
        
    }

    const onClick = () => {
        
        setValues(initialValues);
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        
        try {
       
            const response = await createComment(values, carId, context.accessToken);
            //const data = await response.json();
            
            if (response.status === 200) {
                
                window.alert("Successfully add a comment");
                navigate(`/details/${carId}`)
                setValues(initialValues);
            }
        } catch (error) {
            window.alert("Opps something wrong")
        }
        
    }
    return (
        <form onSubmit={onSubmit}>
        <div className="bg-light p-2">
            <div className="d-flex flex-row align-items-start">
                <img className="rounded-circle" src={`/${avatar}`} width="40" alt="avatar"/>
                <textarea className="form-control ml-1 shadow-none textarea" name="comment" value={values.comment} onChange={onChangeHandler}></textarea>
            </div>
            <div className="mt-2 text-right">
                <button  className="btn btn-primary btn-sm shadow-none" type="submit">Post comment</button>
                <button className="btn btn-outline-primary btn-sm ml-1 shadow-none" type="button" onClick={onClick}>Cancel</button>
            </div>
        </div>
        </form>
    )
}