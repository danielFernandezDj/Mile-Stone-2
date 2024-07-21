import React, { createContext, useState, useEffect } from 'react';

export const TireContext = createContext();

export const TireProvider = ({ children }) => {
  const [tires, setTires] = useState([]);
  const [cart, setCart] = useState([]);

  const apiUrl = 'http://localhost:4000/api/tires';

  // GET request to fetch all tires
  useEffect(() => {
    const fetchTires = async () => {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setTires(data);
    };

    fetchTires();
  }, []);

  // POST request to add a tire to the cart
  const addToCart = (tire) => {
    console.log('log.tire', tire);
    setCart((prevCart) => {
      return [...prevCart, { ...tire, quantity: 1 }];
    });
  };

  // PUT request to update the quantity of a tire in the cart
  const updateCart = (tireId, quantity) => {
    setCart((prevCart) =>
      prevCart.map(item =>
        item.id === tireId ? { ...item, quantity } : item
      )
    );
  };

  // DELETE request to remove a tire from the cart
  const removeFromCart = (tireId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== tireId));
  };

  return (
    <TireContext.Provider value={{ tires, cart, addToCart, updateCart, removeFromCart }}>
      {children}
    </TireContext.Provider>
  );
};
