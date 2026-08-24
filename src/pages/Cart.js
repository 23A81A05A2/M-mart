import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cart, updateQuantity }) => {
  // Calculate total price
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty. <Link to="/" className="text-blue-600 hover:underline">Go shopping!</Link></p>
      ) : (
        <div>
          <table className="w-full border mb-4">
            <thead>
              <tr>
                <th className="border px-2 py-1">Item</th>
                <th className="border px-2 py-1">Quantity</th>
                <th className="border px-2 py-1">Price</th>
                <th className="border px-2 py-1">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td className="border px-2 py-1">{item.name}</td>
                  <td className="border px-2 py-1">{item.quantity}</td>
                  <td className="border px-2 py-1">₹{item.price * item.quantity}</td>
                  <td className="border px-2 py-1">
                    <button
                      onClick={() => updateQuantity(item.name, "increase")}
                      className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                    >
                      +
                    </button>
                    <button
                      onClick={() => updateQuantity(item.name, "decrease")}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      -
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3 className="text-xl font-semibold mb-4">Total: ₹{totalPrice}</h3>

          <Link
            to="/checkout"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Proceed to Checkout
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
