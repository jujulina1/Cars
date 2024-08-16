import styles from '../Details/Details.module.css'
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom"
import { getCarById, deleteCar, getAllComments } from "../../services/CarService";
import { useAuthContext } from '../../contexts/AuthContext'
import Loader from "../Loader/Loader";
import CommentList from '../Comments/CommentList/CommentList';
import { getUsers } from '../../services/AuthService';




export default function Details() {

    const { carId } = useParams();
    const context = useAuthContext();
    const navigate = useNavigate();
    const [car, setCar] = useState({});
    const [comments, setComments] = useState([]);
    const [loader, setLoader] = useState(true); //if Loader
    const [isOwner, setIsOwner] = useState("");
    const [users, setUsers] = useState([]);



    useEffect(() => {


        getCarById(carId)
            .then(data => {
                setCar(data);
                setLoader(false);
                setIsOwner(data.userId === context._id ? true : false)
            });
        getAllComments(carId)
            .then(comments => {
                setComments(comments);
                
            }) ;
        getUsers()
           .then(users => setUsers(users))   

    }, [carId, context])

    const onDelete = async () => {


        alert('Are you sure to delete this item?');
        try {
            const response = await deleteCar(carId, context.accessToken);
            const data = await response.json();

            if (response.status !== 200) {

                throw new Error(data.message)
            }
            navigate(`/catalog`)
        } catch (error) {

            alert(error.message)
        }
    }
    return (
        <>
            {loader ? <Loader /> :
                <section>
                    <div className={styles.listing}>
                        <h1 className={styles.heading}>Details</h1>
                        <div className={styles.details_info}>
                            <img src={car.image} alt='car' />
                            <hr />
                            <ul className={styles.listing_props}>
                                <li><span>Brand:</span>{car.brand}</li>
                                <li><span>Model:</span>{car.model}</li>
                                <li><span>Year:</span>{car.year}</li>
                                <li><span>Price:</span>{car.price} $</li>

                            </ul>

                            <p className={styles.description_para}>{car.description}</p>
                            {
                                  isOwner &&

                                    <div className={styles.listings_buttons} >
                                        <Link to={`/edit/${carId}`} className={styles.button_list}>Edit</Link>
                                        <Link to={`/delete/${carId}`} className={styles.button_list} onClick={onDelete}>Delete</Link>
                                    </div>
                                   
                            }
                        </div>
                    </div>

                </section>
            }
          <CommentList carId={carId} isOwner={isOwner} comments={comments} users={users}/>
    
        </>

    )
}