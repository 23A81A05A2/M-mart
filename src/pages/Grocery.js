import React from "react";

function Grocery({ addToCart }) {
  const items = [
    { name: "Onions", price: 40 },
    { name: "Salt", price: 20 },
    { name: "Sugar", price: 45 },
    { name: "Pulses", price: 80 },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Grocery Items</h2>
      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item.name}
            className="flex justify-between items-center border p-3 rounded-lg hover:bg-gray-50"
          >
            <div>
              <p className="font-medium">{item.name}</p>
              <p className="text-sm text-gray-600">₹{item.price}</p>
            </div>
            <button
              onClick={() => addToCart(item)}
              className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600"
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Grocery;
