
import React, { useContext, useState } from 'react';
import Basket from './GlobalBasketProvider';

function App() {
  const {items, removeItem, addItem } = useContext(Basket);
  const [newItemName, setNewItemName] = useState('');
  const [newItemPrice, setNewItemPrice] = useState(0);

  return (
    <>
      <h2>Global Functions Example</h2>

      <table>
        <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td>  {item.name}</td>
            <td>  {item.price}</td>
            <td> <button onClick={() => removeItem(item.id)}>Remove</button> </td>
          </tr>
        ))}
        </tbody>
      </table>
      <hr />

      <input type="text" value={newItemName}
        onChange={(e) => setNewItemName(e.target.value)}
        placeholder="New item name"
      />
      <input type="number" step="0.1"  value={newItemPrice}
        onChange={(e) => setNewItemPrice(e.target.value)}
        placeholder="New item price"
      />
      <button onClick={() => addItem(newItemName, newItemPrice)}>Add Item</button>
    </>
  );
}

export default App;
