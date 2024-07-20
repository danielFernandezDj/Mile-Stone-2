import React, { createContext, useState, useEffect } from 'react';
import { TireContext } from '../context/TireContext';

const CartItems = ({ item }) => {
    const { id, name, price, quantity } = item;
    const { updateCart, removeFromCart } = useContext(TireContext);
    const [itemQuantity, setItemQuantity] = useState(quantity);
    
    const handleQuantityChange = (e) => {
        const newQuantity = parseInt(e.target.value);
        setItemQuantity(newQuantity);
        updateCart(id, newQuantity);
    };
    
    return (
        <div>
        <h3>{name}</h3>
        <p>Price: ${price}</p>
        <input
            type="number"
            value={itemQuantity}
            onChange={handleQuantityChange}
        />
        <button onClick={() => removeFromCart(id)}>Remove from cart</button>
        </div>
    );
    }




