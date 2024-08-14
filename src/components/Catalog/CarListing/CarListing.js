import styles from '../CarListing/CarListing.module.css'
import Car from '../Car/Car';



export default function CarListing({
    cars,

}) {

    const countCars = (cars.length > 0) ? true : false;


    return (

        <section>

            {countCars ?
                <>
                    <h1>Car Listing</h1>
                    <div className={styles.listings}>
                        {cars && cars.map(x => <Car {...x} key={x._id} />)}
                    </div>
                </>
                : <p className={styles.nocars}>No cars in database.</p>
            }
        </section>

    )
}
