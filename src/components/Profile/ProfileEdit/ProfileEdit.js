import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../ProfileEdit/ProfileEdit.module.css'
import { getProfile, editProfile } from '../../../services/AuthService';
import { useAuthContext } from '../../../contexts/AuthContext'
import { chooseAvatar } from '../../../utils/chooseAvatar';
import { checkErrors, checkStatusButton } from '../../../utils/checkErrors';



export default function ProfileEdit() {
    

    
    const navigate = useNavigate();
    const context = useAuthContext();

    const [option, setOption] = useState('male');//set gender
    const [avatar, setAvatar] = useState('');


    const [user, setUser] = useState({
        username:'',
        email: '',
        gender: 'male'
    });
    const[errors, setErrors] = useState({
        username:'',
        email: ''
    })
    const [button, setButton] = useState(true);


    useEffect(() => {
        console.log('UseEfect');
        getProfile(context.accessToken)
        .then(data => {
            
            setUser(data);
            setOption(data.gender)
            console.log(chooseAvatar(data.gender));
            setAvatar(chooseAvatar(data.gender))
        })
    },[context.accessToken])
    useEffect(() => {
        
       
        setButton(checkStatusButton(errors, user));
        
       
    }, [errors, user]);

  
    const onSubmit = async (e) => {
        e.preventDefault()
        
      
        try {
            
           const response = await editProfile({...user}, user._id, user.accessToken);
            const data = await response.json();
            if (response.status !== 200) {
                throw new Error(data.message)
            }
            navigate('/profile');

        } catch (error) {
            alert(error)
        }

     }

     const onChangeHandler = (e) => {
      
        let targetName = e.target.name
        
        if (targetName === 'female' || targetName === 'male' || targetName === 'gender') {
            targetName = 'gender';
            setOption(e.target.value)
            
        }
        let message = checkErrors(targetName, e.target.value);
        setErrors(state => ({...state, [targetName]: message}))
        setUser(state => ({...state, [targetName]: e.target.value}));
        console.log(user);
        
         
     }
 
    return (
        <section className='background'>
            <div className={styles.container}>
                <form onSubmit={onSubmit}>
                    <div className={styles.profile}>
                        <img src={`/${avatar}`} alt="default user" />
                        <h2 style={{ fontWeight: 'bolder' }}>User Info:</h2>


                        <div className={styles.icons}>
                            <p className={styles.heading}>Username:</p>
                            <input className={styles.input} type="text" id="username" placeholder="Enter your username" name="username" value={user.username} onChange={onChangeHandler} />
                        </div>
                        <p className={styles.errors}>{errors.username}</p>
                       

                        {/* <!-- EMAIL --> */}
                        <div className={styles.icons}>

                            <p className={styles.heading}>Email:</p>
                            <input className={styles.input} type="email" id="email" placeholder="Enter your email" name="email" value={user.email} onChange={onChangeHandler} />
                        </div>
                        <p className={styles.errors}>{errors.email}</p>
                        {/* <!-- Email Errors --> */}


                        {/* <!-- Gender --> */}
                        <div className={styles.icons}>
                            <p className={styles.heading}>Gender:</p>


                            <div>
                                <div className={styles.wrap}>
                                    <input type="radio" id="male" name="male" value='male' checked={option === 'male' ? true: false}  onChange={onChangeHandler} />
                                    <label htmlFor="male" className={styles.radio}>Male</label>
                                </div>
                                <div className={styles.wrap}>
                                    <input type="radio" id="female" name="female" value='female' checked={option === 'female' ? true: false} onChange={onChangeHandler} />
                                    <label htmlFor="female" className={styles.radio}>Female</label>
                                </div>
                                <div className={styles.wrap}>
                                    <input type="radio" id="gender" name="gender" value='gender' checked={option === 'gender' ? true: false} onChange={onChangeHandler} />
                                    <label htmlFor="gender" className={styles.radio}>Gender</label>
                                </div>
                            </div>

                        </div>

                        <div className={styles.listings_buttons} >
                                <Link to={`/profile`} className={styles.button_list} >Cancel</Link>
                                <button type='submit' className={styles.button_list} disabled={button}>Save</button>
                                
                        </div>
                        {/* <div className={styles.listings_buttons} >
                        <button type='submit' className={styles.button_list} disabled={button}>Edit</button>

                    </div> */}
                    </div>
                </form>
            </div>
        </section>
    )
}