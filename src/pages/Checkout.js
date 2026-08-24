import React from "react";
import { useNavigate } from "react-router-dom";

const Checkout = ({ cart, clearCart }) => {
    const navigate = useNavigate();

    // Calculate total price
    const totalPrice = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    // Submit order to backend (replace with your real API endpoint)
    const handleOrder = async() => {
        if (cart.length === 0) {
            alert("Your cart is empty!");
            return;
        }

        // Example backend API call for saving the order
        // await fetch('http://localhost:5000/api/orders', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify({ items: cart, total: totalPrice })
        // });

        alert("Order placed successfully!");

        clearCart(); // Clear the cart after order

        navigate("/success"); // Go to Success page after checkout
    };

    return ( <
        div >
        <
        h2 className = "text-2xl font-bold mb-4" > Checkout < /h2>

        {
            cart.length === 0 ? ( <
                p > Your cart is empty. < /p>
            ) : ( <
                div >
                <
                table className = "w-full border mb-4" >
                <
                thead >
                <
                tr >
                <
                th className = "border px-2 py-1" > Item < /th> <
                th className = "border px-2 py-1" > Quantity < /th> <
                th className = "border px-2 py-1" > Price < /th> < /
                tr > <
                /thead> <
                tbody > {
                    cart.map((item, index) => ( <
                        tr key = { index } >
                        <
                        td className = "border px-2 py-1" > { item.name } < /td> <
                        td className = "border px-2 py-1" > { item.quantity } < /td> <
                        td className = "border px-2 py-1" > ₹{ item.price * item.quantity } < /td> < /
                        tr >
                    ))
                } <
                /tbody> < /
                table >

                <
                h3 className = "text-xl font-semibold mb-4" > Total: ₹{ totalPrice } < /h3>

                <
                button onClick = { handleOrder }
                className = "bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" >
                Place Order <
                /button> < /
                div >
            )
        } <
        /div>
    );
};

export default Checkout;