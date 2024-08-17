import styles from '../Car/Car.module.css'
import { Link } from 'react-router-dom'

export default function Car({
    _id,
    brand,
    image,
    model,
    price,
    year
}) {

    return (
        <div className={styles.listing}>

            <div className={styles.preview}>

                <img src={image} alt="Audi A3" />
            </div>
            <h2>{brand} {model}</h2>
            <div className={styles.info}>
                <div className={styles.info}>
                    <h3>Year: {year}</h3>
                    <h3>Price: {price} $</h3>
                </div>
                <div>
                    <Link to={`/details/${_id}`} className={styles.button}>Details</Link>
                </div>
            </div>
        </div>
    )
}