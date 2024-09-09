
import styles from './Button.module.css'
function Button(){
    const handleClick = (e) => {
        console.log('Button clicked');
        e.target.textContent = "Ouch! 😢";
    }

    return(
        <button className={styles.button} onClick={(e) => handleClick(e)}>Click Me 😊</button>
    );

}
export default Button