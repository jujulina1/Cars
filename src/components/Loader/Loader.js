import styles from '../Loader/Loader.module.css'

export default function Loader() {
    return (
      
     
        <div className={styles.loader_bg}>
            <p className={styles.paragraph}>Loading....</p>
            <div className={styles.loader}>
                <img src="images/loading.gif" alt="loader" />
            </div>
            
        </div>
    )
}