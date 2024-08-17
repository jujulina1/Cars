import { useContext, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext';
import { checkErrors, checkStatusButton, matchPassword } from '../../utils/checkErrors';
import styles from '../Register/Register.module.css'

export default function Register() {

    const initialValues = {
        username: '',
        email: '',
        password: '',
        rePass: '',
        gender: 'male'
    }
    const [values, setValues] = useState(initialValues);
    const [option, setOption] = useState('male');
    const [errors, setErrors] = useState({
        username: '',
        email: '',
        password: '',
        rePass: '',

    });
    const [button, setButton] = useState(false);
    const context = useContext(AuthContext);
    const navigate = useNavigate();


    useEffect(() => {
        console.log('UseEffect');
        setButton(checkStatusButton(errors, values))
       
    }, [errors, values])

    const onChangeHandler = (e) => {

      
        let targetName = e.target.name;
        let message = '';

        if (targetName === 'female' || targetName === 'male' || targetName === 'gender') {
            targetName = 'gender'
            setOption(e.target.value)
        } else if (targetName === 'password') {


            message = checkErrors(targetName, e.target.value);
            let matchMessage = matchPassword(e.target.value, values.rePass);

            setErrors(state => ({ ...state, 'password': message, 'rePass': matchMessage }))
        } else if (targetName === 'rePass') {
            message = matchPassword(values.password, e.target.value)
            setErrors(state => ({ ...state, 'rePass': message }))
        } else {
            message = checkErrors(e.target.name, e.target.value, values.password, values.rePass);
            setErrors(state => ({ ...state, [targetName]: message }))
        }

        setValues(state => ({ ...state, [targetName]: e.target.value }))
       
    }

    const onSubmit = async (e) => {
        
            e.preventDefault();
            try {
                await context.onRegisterSubmit((values));
                navigate('/');
                setValues(initialValues);
            } catch (error) {
                window.alert(error.message);
                navigate('/register');
            }
            
       
    }

    return (
        <section className={styles.register}>
            <div className='container'>
                <div className='row'>
                    <div className={styles.background}>
                        <div className={styles.shape}></div>
                        <div className={styles.shape}></div>
                    </div>
                    <div>
                    </div>
                    <form className={styles.form} onSubmit={onSubmit}>
                        <h3>Registration Here</h3>

                        <label htmlFor="username">Username</label>
                        <input type="text" placeholder="Username" name="username" id="username" value={values.username} onChange={onChangeHandler} />
                        {errors.username && <p className={styles.error}>{errors.username}</p>}


                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="Email" name="email" id="email" value={values.email} onChange={onChangeHandler} />
                        {errors.email && <p className={styles.error}>{errors.email}</p>}


                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Password" name="password" id="password" value={values.password} onChange={onChangeHandler} autoComplete='off' />
                        {errors.password && <p className={styles.error}>{errors.password}</p>}


                        <label htmlFor="rePass">Repeat Password</label>
                        <input type="password" placeholder="Confirm your password" name="rePass" id="rePass" value={values.rePass} onChange={onChangeHandler} autoComplete='off' />
                        {errors.rePass && <p className={styles.error}>{errors.rePass}</p>}



                        <div>
                            <div className={styles.wrap}>
                                <input type="radio" id="male" name="male" value="male" checked={option === 'male' ? true : false} onChange={onChangeHandler} />
                                <label htmlFor="male" className="radio">Male</label>
                            </div>
                            <div className={styles.wrap}>
                                <input type="radio" id="female" name="female" value="female" checked={option === 'female' ? true : false} onChange={onChangeHandler} />
                                <label htmlFor="female" className="radio">Female</label>
                            </div>
                            <div className={styles.wrap}>
                                <input type="radio" id="gender" name="gender" value='gender' checked={option === 'gender' ? true : false} onChange={onChangeHandler} />
                                <label htmlFor="gender" className="radio">Gender</label>
                            </div>
                        </div>



                        <button className={styles.button} disabled={button} >Register</button>

                        <div className={styles.signin}>
                            <p>Already have an account?<br />
                                <Link to="/login" className={styles.sign}>Sign in</Link>.
                            </p>
                        </div>

                    </form>
                </div>
            </div>
        </section>
    )
}



