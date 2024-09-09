// useContext is a hook that allows you to use the value of a context provider in a functional component.
import ComponentD from './componentD.jsx';
import styling from './styling.module.css';
function ComponentC(){
    return(
        <div className={styling.Box}>
            <h1>Component C</h1>
            <ComponentD />
        </div>
    );
}
export default ComponentC