import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Home from "./pages/Home";
import Grocery from "./pages/Grocery";
import Transport from "./pages/Transport";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";

function App() {
  const [cart, setCart] = useState([]);

  // Add item to cart
  const addToCart = (item) => {
    const existing = cart.find((i) => i.name === item.name);

    if (existing) {
      setCart(
        cart.map((i) =>
          i.name === item.name
            ? { ...i, quantity: i.quantity + 1 }
            : i
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  // Update quantity
  const updateQuantity = (name, action) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.name === name
            ? {
                ...item,
                quantity:
                  action === "increase"
                    ? item.quantity + 1
                    : Math.max(1, item.quantity - 1),
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Clear cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">

        {/* Header */}
        <header className="bg-white border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-6 py-5">

            <div className="flex justify-between items-center">

              <Link
  to="/"
  className="text-3xl font-bold text-green-700"
>
  M-Mart 🛒
</Link>

              <nav className="flex gap-5 text-sm font-medium">

               <Link
  to="/"
  className="text-gray-600 hover:text-green-600"
>
  Home
</Link>

                <Link
  to="/grocery"
  className="text-gray-600 hover:text-green-600"
>
  Grocery
</Link>

                <Link
                  to="/transport"
                  className="text-gray-600 hover:text-green-600"
                >
                  Auto
                </Link>

                <Link
                  to="/cart"
                  className="text-gray-600 hover:text-green-600"
                >
                  Cart ({cart.length})
                </Link>

              </nav>

            </div>

          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-6xl mx-auto px-6 py-8">

          <Routes>

            {/* Home */}
<Route
  path="/"
  element={<Home />}
/>

<Route
  path="/grocery"
  element={<Grocery addToCart={addToCart} />}
/>
            {/* Auto Service */}
            <Route
              path="/transport"
              element={<Transport />}
            />

            {/* Cart */}
            <Route
              path="/cart"
              element={
                <Cart
                  cart={cart}
                  updateQuantity={updateQuantity}
                />
              }
            />

            {/* Checkout */}
            <Route
              path="/checkout"
              element={
                <Checkout
                  cart={cart}
                  clearCart={clearCart}
                />
              }
            />

            {/* Success */}
            <Route
              path="/success"
              element={<Success />}
            />

          </Routes>

        </main>

      </div>
    </Router>
  );
}

export default App;