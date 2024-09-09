// useContext is a hook that allows you to use the value of a context provider in a functional component.
import React, {useState, createContext} from 'react';
import ComponentB from './componentB.jsx';
import styling from './styling.module.css';
export const UserContext = createContext();
function ComponentA(){
    const [user, setUser] = useState('Hassane');
    return(
        <div className={styling.Box}>
            <h1>Component A</h1>
            <h2>{`Hello ${user}`}</h2>
            <UserContext.Provider value={user}>
                <ComponentB user= {user}/>
            </UserContext.Provider>
        </div>
    );
}
export default ComponentA;