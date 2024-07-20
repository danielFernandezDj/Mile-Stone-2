import React, { useContext } from 'react';
import { TireContext } from '../context/TireContext';
import { Button, Typography } from '@mui/material';

export default function ShoppingCart() {
  const { cart, updateCart, removeFromCart } = useContext(TireContext);

  return (
    <div>


      <Typography variant="h4">Shopping Cart</Typography>
      {cart.map(item => (
        <div key={item.tire_id}>
          <Typography variant="h6">{item.brand_name} - {item.size}</Typography>
          <Typography variant="body1">Price: ${item.price}</Typography>
          <Typography variant="body1">Quantity: {item.quantity}</Typography>
          <Button onClick={() => updateCart(item.id, item.quantity + 1)}>Increase</Button>
          <Button onClick={() => updateCart(item.id, item.quantity - 1)}>Decrease</Button>
          <Button onClick={() => removeFromCart(item.id)}>Remove</Button>
        </div>
      ))}
    </div>
  );
};