import React from "react";
import { Link } from "react-router-dom";

function Cart({ cart, updateQuantity }) {
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const deliveryFee = subtotal > 0 ? 20 : 0;
  const total = subtotal + deliveryFee;

  return (
    <div className="max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <p className="text-green-600 font-medium">Your Shopping Cart 🛒</p>
        <h2 className="text-3xl font-bold text-gray-800 mt-1">
          Cart Summary
        </h2>
        <p className="text-gray-500 mt-2">
          Review your items before checkout.
        </p>
      </div>

      {cart.length === 0 ? (
        /* Empty Cart */
        <div className="bg-white border border-gray-200 rounded-2xl p-10 text-center shadow-sm">
          <div className="text-5xl mb-4">🛒</div>

          <h3 className="text-xl font-semibold text-gray-800">
            Your cart is empty
          </h3>

          <p className="text-gray-500 mt-2 mb-6">
            Add some groceries to your cart and come back here.
          </p>

          <Link
            to="/"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-green-700 transition"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div
                key={item.name}
                className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                {/* Product Information */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.name}
                  </h3>

                  <p className="text-gray-500 mt-1">
                    ₹{item.price} × {item.quantity}
                  </p>

                  <p className="text-green-600 font-semibold mt-2">
                    ₹{item.price * item.quantity}
                  </p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() =>
                      updateQuantity(item.name, item.quantity - 1)
                    }
                    className="w-9 h-9 rounded-lg bg-gray-100 hover:bg-gray-200 font-bold text-lg"
                  >
                    −
                  </button>

                  <span className="w-8 text-center font-semibold">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() =>
                      updateQuantity(item.name, item.quantity + 1)
                    }
                    className="w-9 h-9 rounded-lg bg-green-100 text-green-700 hover:bg-green-200 font-bold text-lg"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm h-fit">
            <h3 className="text-xl font-bold text-gray-800 mb-5">
              Order Summary
            </h3>

            <div className="space-y-3 text-gray-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>

              <div className="flex justify-between">
                <span>Delivery</span>
                <span>₹{deliveryFee}</span>
              </div>
            </div>

            <div className="border-t border-gray-200 my-5"></div>

            <div className="flex justify-between text-lg font-bold text-gray-800">
              <span>Total</span>
              <span>₹{total}</span>
            </div>

            <Link
              to="/checkout"
              className="block text-center mt-6 bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition"
            >
              Proceed to Checkout →
            </Link>

            <Link
              to="/"
              className="block text-center mt-3 text-green-600 hover:underline"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;