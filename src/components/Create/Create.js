import { useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom"

import styles from '../Create/Create.module.css'
import  { useAuthContext } from '../../contexts/AuthContext'
import { createCar } from '../../services/CarService';
import { checkErrors, checkStatusButton } from '../../utils/checkErrors';
// import Loader from '../Loader/Loader';


export default function Create() {

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
    
    const navigate = useNavigate();
    const context = useAuthContext();
   
    
    useEffect(() => {
      
        setButton(checkStatusButton(errors, values));
        
    }, [errors, values]);


    const onSubmit = async (e) => {
      e.preventDefault();
      
       try {

          const response = await createCar({...values}, context.accessToken);
          const data = await response.json();
          if (response.status !==200) {
              throw new Error(data.message)
          }
         navigate('/catalog')
        
       } catch (error) {
        console.log(error);
        alert(error.message);
         //TO DO ERRORS
       }
    }
    const onChangeHandler = (e) => {
        
        let message = checkErrors(e.target.name, e.target.value);
      
        setErrors(state => ({...state, [e.target.name]: message}))
        setValues(state => ({...state, [e.target.name]: e.target.value}));

      }
      
    return (
        // <Loader />
        <section className='background' >
            <div className={styles.container}>

                <form onSubmit={onSubmit}>
                    <h1>Create Car Listing</h1>
                    <p>Please fill in this form to create an listing.</p>
                    <hr className={styles.hr} />

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


                    <hr className={styles.hr} />
                    <div >
                        <button type='submit' className={styles.button_list} disabled={button}>Create</button>

                    </div>

                </form>
            </div>
        </section>
    )
}