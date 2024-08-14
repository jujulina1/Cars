import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from '../Profile/Profile.module.css'
import { useAuthContext } from '../../../contexts/AuthContext'
import { getProfile } from '../../../services/AuthService';
import { chooseAvatar } from '../../../utils/chooseAvatar'

export default function Profile() {


    const context = useAuthContext();
   


    const [user, setUser] = useState({
        username: '',
        email: '',
        gender: 'male'
    });
    const [avatar, setAvatar] = useState('')


    useEffect(() => {

        getProfile(context.accessToken)
            .then(data => {
                setUser(data);
                setAvatar(chooseAvatar(data.gender))
            })
    }, [context.accessToken]);

  return (
        <section className='background'>
            <div className={styles.container}>

                <div className={styles.profile}><img src={avatar} alt="default user" />
                    <h2 style={{ fontWeight: 'bolder' }}>User Info:</h2>

                    <div className={styles.icons} >
                        <p style={{ fontWeight: '600' }}>Username: </p>
                        <p>{user.username}</p>
                    </div>
                    <div className={styles.icons}>
                        <p style={{ fontWeight: '600' }}>Email: </p>
                        <p>{user.email}</p>
                    </div>

                    <div className={styles.icons}>
                        <p style={{ fontWeight: '600' }}>Gender: </p>
                        <p>{user.gender}</p>
                    </div>

                    
                    <div className={styles.listings_buttons} >
                            <Link to= {`/profile/edit/${context._id}`} className={styles.button_list}>Edit</Link>
                               
                    </div>

                </div>

            </div>
        </section>
    )
}