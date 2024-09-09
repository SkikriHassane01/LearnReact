import profilePic from '../assets/image.png';
import styles from './card.module.css';

function Card() {
    return (
        <div className={styles.card}>
            <img className={styles.cardImg} src={profilePic} alt="card picture" />
            <h2 className={styles.cardTitle}>Hassane Skikri</h2>
            <p className={styles.cardText}>
                Hello, this is Hassane. I'm a data scientist, and I love playing video games.
            </p>
        </div>
    );
}

export default Card;
