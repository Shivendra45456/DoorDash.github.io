// const Cart=()=>
// {
//     return(
//       <div>
//         <h1>This is your cart</h1>
//         <p>
//            Hair oil andmulti vitamin.
//            phone cover.
//            grocery items.
//            books.
//         </p>
//       </div>
//     );
// };
// export default Cart;



import React, { useState } from "react";
import "./Cart.css"; // Add the appropriate styling

const Cart = () => {
  // Sample cart items
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Margherita Pizza",
      price: 299,
      quantity: 1,
      image: "https://via.placeholder.com/100",
      restaurant: "Pizza Hut",
    },
    {
      id: 2,
      name: "Garlic Breadsticks",
      price: 199,
      quantity: 1,
      image: "https://via.placeholder.com/100",
      restaurant: "Pizza Hut",
    },
    {
      id: 3,
      name: "Coke",
      price: 99,
      quantity: 2,
      image: "https://via.placeholder.com/100",
      restaurant: "Pizza Hut",
    },
  ]);

  // Handle quantity change
  const handleQuantityChange = (id, increment) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + increment) }
          : item
      )
    );
  };

  // Remove an item from the cart
  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h1>Your Order from {cartItems[0].restaurant}</h1>

      {cartItems.length > 0 ? (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h2>{item.name}</h2>
                <p>₹{item.price}</p>
                <div className="quantity-control">
                  <button onClick={() => handleQuantityChange(item.id, -1)}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleQuantityChange(item.id, 1)}>
                    +
                  </button>
                </div>
                <button className="remove-button" onClick={() => removeItem(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Special Instructions */}
          <div className="special-instructions">
            <h3>Special Instructions</h3>
            <textarea
              placeholder="Any instructions for the restaurant? e.g. Less spicy"
            ></textarea>
          </div>

          {/* Order Summary */}
          <div className="cart-summary">
            <h2>Order Summary</h2>
            <p>Subtotal: ₹{totalPrice}</p>
            <p>Taxes: ₹{(totalPrice * 0.05).toFixed(2)}</p>
            <h3>Total: ₹{(totalPrice + totalPrice * 0.05).toFixed(2)}</h3>
            <button className="checkout-button">Proceed to Checkout</button>
          </div>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
