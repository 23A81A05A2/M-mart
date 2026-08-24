import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Checkout({ cart, clearCart }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const deliveryFee = subtotal > 0 ? 20 : 0;
  const total = subtotal + deliveryFee;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    clearCart();
    navigate("/success");
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8">
        <p className="text-green-600 font-medium">
          Almost there 🛍️
        </p>

        <h2 className="text-3xl font-bold text-gray-800 mt-1">
          Checkout
        </h2>

        <p className="text-gray-500 mt-2">
          Enter your delivery details to place your order.
        </p>
      </div>

      {cart.length === 0 ? (
        <div className="bg-white border border-gray-200 rounded-2xl p-10 text-center shadow-sm">
          <div className="text-5xl mb-4">🛒</div>

          <h3 className="text-xl font-semibold text-gray-800">
            Your cart is empty
          </h3>

          <p className="text-gray-500 mt-2 mb-6">
            Add some products before checking out.
          </p>

          <button
            onClick={() => navigate("/")}
            className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Delivery Form */}
          <div className="lg:col-span-2 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-800 mb-6">
              Delivery Details
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  placeholder="Enter your phone number"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Address
                </label>

                <textarea
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Enter your complete address"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    City
                  </label>

                  <input
                    type="text"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    required
                    placeholder="City"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Pincode
                  </label>

                  <input
                    type="text"
                    name="pincode"
                    value={form.pincode}
                    onChange={handleChange}
                    required
                    placeholder="Pincode"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition"
              >
                Place Order ₹{total}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm h-fit">
            <h3 className="text-xl font-bold text-gray-800 mb-5">
              Order Summary
            </h3>

            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.name}
                  className="flex justify-between text-sm"
                >
                  <span className="text-gray-600">
                    {item.name} × {item.quantity}
                  </span>

                  <span className="font-medium">
                    ₹{item.price * item.quantity}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 my-5"></div>

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
          </div>
        </div>
      )}
    </div>
  );
}

export default Checkout;