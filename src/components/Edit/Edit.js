import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import styles from '../Edit/Edit.module.css'
import { editCar, getCarById } from '../../services/CarService';
import  { useAuthContext } from '../../contexts/AuthContext'
import { checkErrors, checkStatusButton } from '../../utils/checkErrors';

export default function Edit() {

    const { carId } = useParams();
    const context = useAuthContext();
    const navigate = useNavigate();

    const initialValues = {
        brand: '',
        model: '',
        description: '',
        year: '',
        image: '',
        price: ''
    }
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState(initialValues);
    const [button, setButton] = useState(true);
   
    useEffect(() => {

        
        getCarById(carId)
        .then(data => {
            setValues(data);
            
        });
      
    },[carId]);
    
    useEffect(() => {
        setButton(checkStatusButton(errors, values))
    }, [errors, values]) 

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
           
            const response = await editCar({...values}, carId, context.accessToken);
            const data = await response.json();
           
            if (response.status !==200) {
                throw new Error(data.message)
                
            }
            setValues(data);
            alert('You successfully updated!');
            navigate(`/details/${carId}`)
            
          
        } catch (error) {
             alert(error.message);
           
        }
       
    }

    const onChangeHandler= (e) => {
        e.preventDefault();
       
        let message = checkErrors(e.target.name, e.target.value);
      
        setErrors(state => ({...state, [e.target.name]: message}))
        setValues(state => ({...state, [e.target.name]: e.target.value}));;
       
    }
    return (
        <section className="background" >
            <div className={styles.container}>

                <form onSubmit={onSubmit} >
                    <h1>Edit Car Listing</h1>
                    <p>Please fill in this form to edit an listing.</p>
                    <hr className={styles.hr}/>
                    {/* <!-- BRAND --> */}
                    <div className={styles.icons}>
                        <p className={styles.heading}>Car Brand</p>
                        <input type="text" className={styles.input} placeholder="Enter Car Brand" name="brand" value={values.brand} onChange={onChangeHandler} />
                    </div>
                    <p className={styles.errors}>{errors.brand}</p>

                    {/* <!-- MODEL --> */}
                    <div className={styles.icons}>
                        <p className={styles.heading}>Car Model</p>
                        <input type="text" className={styles.input} placeholder="Enter Car Model" name="model" value={values.model} onChange={onChangeHandler} />
                    </div>
                    <p className={styles.errors}>{errors.model}</p>
                   
                    {/* <!-- DESCRIPTION --> */}
                    <div className={styles.icons}>
                        <p className={styles.heading}>Description</p>
                        <input type="text" className={styles.input} placeholder="Enter Description" name="description"
                            value={values.description} onChange={onChangeHandler} />
                    </div>
                    <p className={styles.errors}>{errors.description}</p>

                    {/* <!-- YEAR --> */}
                    <div className={styles.icons}>
                        <p className={styles.heading}>Car Year</p>
                        <input type="number" className={styles.input} placeholder="Enter Car Year" name="year" value={values.year} onChange={onChangeHandler} />
                    </div>
                    <p className={styles.errors}>{errors.year}</p>
      
                    {/* <!-- IMAGE --> */}
                    <div className={styles.icons}>
                        <p className={styles.heading}>Car Image</p>
                        <input type="text" className={styles.input} placeholder="Enter Car Image" name="image" value={values.image} onChange={onChangeHandler} />
                    </div>
                    <p className={styles.errors}>{errors.image}</p>

                    {/* <!-- PRICE--> */}
                    <div className={styles.icons}>
                        <p className={styles.heading}>Car Price</p>
                        <input type="number" className={styles.input} placeholder="Enter Car Price" name="price" value={values.price} onChange={onChangeHandler} />
                    </div>
                    <p className={styles.errors}>{errors.price}</p>

                    <hr className={styles.hr}/>
                    <div className={styles.listings_buttons} >
                        <button type='submit' className={styles.button_list} disabled={button}>Edit</button>

                    </div>

                </form>
            </div>
        </section>
    )
}