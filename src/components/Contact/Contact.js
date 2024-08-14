import { useState } from 'react'
import styles from '../Contact/Contact.module.css'
import ContactForm from './ContactForm/ContactForm';


export default function Contact() {

    const initialValues = {
        name: '',
        email: '',
        phone: '',
        text: '',
    }

    const [values, setValues] = useState(initialValues);
    const [toogle, setToogle] = useState(true);

    const onSubmit = (e) => {

        e.preventDefault();
        setToogle(false);


    }
    const onChangeHandler = (e) => {
        e.preventDefault();
        setValues(state => ({ ...state, [e.target.name]: e.target.value }));
    }
    return (
        <>
            {toogle ?

                <section id="contact" className="background">
                    <div className="container">

                        <div className="row">
                            <div className="col-md-12">
                                <div className="full center">
                                    <h2 className="heading_main orange_heading">Contact</h2>
                                </div>
                            </div>
                        </div>
                        <form onSubmit={onSubmit} className={styles.container} >


                            <div className={styles.icons}>
                                <p className={styles.heading}>Your Name:</p>
                                <input type="text" className={styles.input} placeholder="Enter Your Name" name="name" value={values.name} onChange={onChangeHandler} />
                            </div>


                            <div className={styles.icons}>
                                <p className={styles.heading}>Your E-Mail:</p>
                                <input type="text" className={styles.input} placeholder="Enter Your E-Mail" name="email" value={values.email} onChange={onChangeHandler} />
                            </div>


                            <div className={styles.icons}>
                                <p className={styles.heading}>Phone Number</p>
                                <input type="text" className={styles.input} placeholder="Enter Your Number" name="phone"
                                    value={values.phone} onChange={onChangeHandler} />
                            </div>



                            <div className={styles.icons}>
                                <p className={styles.heading}>Enter Text</p>
                                <input type="text" className={styles.input} style={{ height: '100px' }} placeholder="Message" name="text"
                                    value={values.text} onChange={onChangeHandler} />
                            </div>

                            <hr className={styles.hr} />
                            <div className={styles.listings_buttons} >
                                <button type='submit' className={styles.button_list}>Submit</button>

                            </div>

                        </form>

                    </div>
                </section> : <ContactForm />}
        </>

    )
}