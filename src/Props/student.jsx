import styles from './student.module.css'
import PropTypes from 'prop-types'
function Student(props){
    return (
        <div className={styles.student}>
            <p> Name: {props.name}</p>
            <p> Age: {props.age}</p>
            <p> is student: {props.isStudent ? "yes" : "no"}</p>

        </div>

    );
}
Student.propTypes = {
    name : PropTypes.string,
    age : PropTypes.number,
    isStudent : PropTypes.bool
}

Student.defaultProps = {
    name :'Guest',
    age:20,
    isStudent:false

}
export default Student