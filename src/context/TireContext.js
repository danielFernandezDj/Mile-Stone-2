import React, { createContext, useState, useEffect } from 'react';

export const TireContext = createContext();

export const TireProvider = ({ children }) => {
  const [tires, setTires] = useState([]);
  const [cart, setCart] = useState([]);

  const apiUrl = 'http://localhost:4000/api/tires';

  useEffect(() => {
    const fetchTires = async () => {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setTires(data);
    };

    fetchTires();
  }, []);

  const addToCart = (tire) => {
    setCart((prevCart) => {
      const existingTire = prevCart.find(item => item.id === tire.id);
      if (existingTire) {
        return prevCart.map(item =>
          item.id === tire.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...tire, quantity: 1 }];
    });
  };

  const updateCart = (tireId, quantity) => {
    setCart((prevCart) =>
      prevCart.map(item =>
        item.id === tireId ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (tireId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== tireId));
  };

  return (
    <TireContext.Provider value={{ tires, cart, addToCart, updateCart, removeFromCart }}>
      {children}
    </TireContext.Provider>
  );
};
