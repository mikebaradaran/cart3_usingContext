// GlobalFunctionsContext.js
import React, { createContext, useState } from 'react';
import products from "./products.json"
const Basket = createContext();

export function GlobalBasketProvider ({ children }) {

  const [items, setItems] = useState(products);

  function addItem(name, price) {
    setItems([...items, {"id":items.length+1, "name":name, "price":price}]);
  }

  function removeItem(id) {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
  };
  return (
    <Basket.Provider value={{ addItem, removeItem, items }}>
      {children}
    </Basket.Provider>
  );
}

export default Basket;
