import React from "react";
import { useNavigate } from "react-router-dom";

function Success() {
    const navigate = useNavigate();

    return ( <
        div className = "min-h-screen flex flex-col items-center justify-center bg-green-50" >
        <
        div className = "bg-white p-8 rounded-2xl shadow-xl text-center w-full max-w-sm" >
        <
        div className = "text-green-600 text-6xl mb-4" > ✔️ < /div> <
        h1 className = "text-2xl font-bold text-gray-800 mb-2" >
        Order Confirmed!
        <
        /h1> <
        p className = "text-gray-600 mb-6" >
        Your order has been successfully placed.You’ ll receive a message once it’ s ready
        for delivery. <
        /p>

        <
        button onClick = {
            () => navigate("/") }
        className = "bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg" >
        Go Home <
        /button> <
        /div> <
        /div>
    );
}

export default Success;