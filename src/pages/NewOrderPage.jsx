import React, { useState } from 'react';
import styles from './NewOrderPage.module.css';

const NewOrderPage = () => {
  const categories = [
    {
      name: 'Herbs',
      items: [
        { id: 1, name: 'Burdock Root Tea', price: 5.00, emoji: '🫚' },
        { id: 2, name: 'Reshi Mushroom Tea', price: 9.00, emoji: '🍄' },
        { id: 3, name: 'Dandelion', price: 7.00, emoji: '🌻' },
        { id: 4, name: 'Yellow Dock Tea', price: 8.00, emoji: '🥬' },
        { id: 5, name: 'Matcha Tea', price: 12.00, emoji: '🍵' },
      ],
    },
    {
      name: 'Herbs and Spices',
      items: [
        { id: 6, name: 'Garlic', price: 10, emoji: '🧄' },
        { id: 7, name: 'Basil', price: 10, emoji: '🍃' },
        { id: 8, name: 'Cloves', price: 10, emoji: '🌰' },
        { id: 9, name: 'Oregano', price: 10, emoji: '🌿' },
        { id: 10, name: 'Tumeric', price: 12, emoji: '🌿' },
      ],
    },
    {
      name: 'Bath and Body',
      items: [
        { id: 11, name: 'Black African Bar', price: 15, emoji: '🧼' },
        { id: 12, name: 'Tea Tree Body Wash', price: 18, emoji: '🧴' },
        { id: 13, name: 'Peppermint Soap', price: 8, emoji: '🧼' },
        { id: 14, name: 'Bath Bomb', price: 12, emoji: '🫧' },
        { id: 15, name: 'Oatmeal and Honey Bar', price: 20, emoji: '🧼' },
      ],
    },
  ];

  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const handleRemoveFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className={styles.newOrderContainer}>
    {/* Display categories */}
    {categories.map((category) => (
      <div key={category.name} className={styles.categoryContainer}>
        <h3>{category.name}</h3>
        {/* Display items in each category */}
        <div className={styles.itemContainer}>
          {category.items.map((item) => (
            <div key={item.id} className={styles.item}>
              <span className={styles.itemEmoji}>{item.emoji}</span>
             <div>
                <h4>{item.name}</h4>
                <p>${item.price}</p>
                <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    ))}

    <div className={styles.cartContainer}>
      <h6>Shopping Cart</h6>
      {cart.length === 0 ? (
        <p></p>
      ) : (
        <>
          <ul className={styles.cartList}>
            {cart.map((cartItem) => (
              <li key={cartItem.id} className={styles.cartItem}>
                {cartItem.name} Price:${cartItem.price}
                <button onClick={() => handleRemoveFromCart(cartItem.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <p>Total: ${calculateTotal()}</p>
        </>
      )}
    </div>
  </div>
);
};
export default NewOrderPage;

