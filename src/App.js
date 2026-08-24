import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
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
                    i.name === item.name ? {...i, quantity: i.quantity + 1 } : i
                )
            );
        } else {
            setCart([...cart, {...item, quantity: 1 }]);
        }
    };

    // Update quantity or remove item
    const updateQuantity = (name, action) => {
        setCart((prevCart) =>
            prevCart
            .map((item) =>
                item.name === name ?
                {
                    ...item,
                    quantity: action === "increase" ?
                        item.quantity + 1 :
                        Math.max(1, item.quantity - 1),
                } :
                item
            )
            .filter((item) => item.quantity > 0)
        );
    };

    // Clear entire cart after checkout
    const clearCart = () => {
        setCart([]);
    };

    return ( <
            Router >
            <
            div className = "p-6" >
            <
            h1 className = "text-3xl font-bold mb-4 text-green-700" > Maricharla Mart < /h1>

            <
            nav className = "flex gap-4 mb-6" >
            <
            Link to = "/"
            className = "text-blue-600 hover:underline" >
            Grocery <
            /Link> <
            Link to = "/transport"
            className = "text-blue-600 hover:underline" >
            Transport <
            /Link> <
            Link to = "/cart"
            className = "text-blue-600 hover:underline" >
            Cart({ cart.length }) <
            /Link> <
            Link to = "/checkout"
            className = "text-blue-600 hover:underline" >
            Checkout <
            /Link> <
            /nav>

            <
            Routes >
            <
            Route path = "/"
            element = { < Grocery addToCart = { addToCart }
                />} / >
                <
                Route path = "/transport"
                element = { < Transport / > }
                /> <
                Route path = "/cart"
                element = { < Cart cart = { cart }
                    updateQuantity = { updateQuantity }
                    />} / >
                    <
                    Route path = "/checkout"
                    element = { < Checkout cart = { cart }
                        clearCart = { clearCart }
                        />} / >
                        <
                        Route path = "/success"
                        element = { < Success / > }
                        /> <
                        /Routes> <
                        /div> <
                        /Router>
                    );
                }

                export default App;