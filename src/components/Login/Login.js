import { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import styles from '../Login/Login.module.css'
import { AuthContext } from '../../contexts/AuthContext';
import { checkErrors, checkStatusButton } from '../../utils/checkErrors';

export default function Login() {
    const initialValues = {
        username: '',
        password: ''
    }

    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState(initialValues);
    const [button, setButton] = useState(false);//true, false//Login button to be disable ot not
    const context = useContext(AuthContext);
    const navigate = useNavigate();
   
    useEffect(() => {
        
        setButton(checkStatusButton(errors, values))
       
    }, [errors, values])
    //if there are no dependany array, will not unable the Submit Button

    const onChangeHandler = (e) => {

        let message = checkErrors(e.target.name, e.target.value);//"ect. username should be at least 5"
        setErrors(state => ({ ...state, [e.target.name]: message }))
        setValues(state => ({ ...state, [e.target.name]: e.target.value }));

    }
    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await context.onLoginSubmit((values));
            navigate('/');
            setValues(initialValues);
        } catch (error) {
            window.alert(error.message);
            navigate('/login');
        }
        
    }

    return (
        <section className={styles.login}>
            <div className={styles.background}>
                <div className={styles.shape}></div>
                <div className={styles.shape}></div>
            </div>
            <div>

            </div>
            <form method='post' className={styles.form} onSubmit={onSubmit}>
                <h3>Login Here</h3>

                <label htmlFor="username">Username</label>
                <input type="text" placeholder="Username" id="username" name="username" value={values.username} onChange={onChangeHandler} />
                {errors.username && <p className={styles.error}>{errors.username}</p>}

                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Password" id="password" name="password" value={values.password} onChange={onChangeHandler} autoComplete="off" />
                {errors.password && <p className={styles.error}>{errors.password}</p>}

                <button className={styles.button} disabled={button}>Log In</button>

                <div className={styles.signin}>
                    <p>Dont have an account?<br />
                        <Link to="/register" className={styles.sign}>Sign up</Link>.
                    </p>

                </div>
            </form>

        </section>

    )
}

