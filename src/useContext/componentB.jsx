// useContext is a hook that allows you to use the value of a context provider in a functional component.
import styling from './styling.module.css';
import ComponentC from './componentC.jsx';
function ComponentB(){
    return(
        <div className={styling.Box}>
            <h1>Component B</h1>
            <ComponentC />
        </div>
    );
}

export default ComponentB;