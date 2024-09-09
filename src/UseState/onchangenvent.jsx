// onchange event 
import React, { useState } from 'react';

function OnChangeEvent(){
    const [name, setName] = useState('Gest');
    const [quantity, setQuantity] = useState(0);
    const [shipping, setShipping] = useState("Pick Up");

    function handleNameChange(e){
        setName(e.target.value);
    }

    function handleQuantityChange(e){
        setQuantity(e.target.value);
    }

    function handleShippingChange(e){
        setShipping(e.target.value);
    }

    return (
        <div>
            <input value={name} onChange={handleNameChange}/>
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantityChange}/>
            <p>Quantity: {quantity}</p>

            <label>
                <input type="radio" value="Pick Up" checked={shipping === "Pick Up"} onChange={handleShippingChange}/>
                Pick Up
            </label><br/>
            <label>
                <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange}/>
                Delivery
            </label>

            <p>Shipping: {shipping}</p>

        </div>
    );
}
export default OnChangeEvent