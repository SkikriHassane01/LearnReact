// useContext is a hook that allows you to use the value of a context provider in a functional component.
import React, {useContext} from 'react';
import {UserContext} from './componentA.jsx';
import styling from './styling.module.css';
function ComponentD(){
    const user = useContext(UserContext);
    return(
        <div className={styling.Box}>
            <h1>Component D</h1>
            <h2> {`Bay ${user}`} </h2>
        </div>
    );
}
export default ComponentD;