import React, { useState } from "react";

function Grocery({ addToCart }) {
  const [search, setSearch] = useState("");

  const items = [
    { name: "Onions", price: 40, emoji: "🧅", category: "Vegetables" },
    { name: "Potatoes", price: 35, emoji: "🥔", category: "Vegetables" },
    { name: "Tomatoes", price: 30, emoji: "🍅", category: "Vegetables" },
    { name: "Salt", price: 20, emoji: "🧂", category: "Essentials" },
    { name: "Sugar", price: 45, emoji: "🍚", category: "Essentials" },
    { name: "Rice", price: 60, emoji: "🍚", category: "Grains" },
    { name: "Pulses", price: 80, emoji: "🫘", category: "Grains" },
    { name: "Milk", price: 30, emoji: "🥛", category: "Dairy" },
  ];

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>

      {/* Page Header */}
      <div className="mb-8">
        <p className="text-green-600 font-semibold">
          Fresh & Affordable 🛒
        </p>

        <h2 className="text-3xl font-bold text-gray-800 mt-1">
          Grocery Shopping
        </h2>

        <p className="text-gray-500 mt-2">
          Get your daily essentials delivered with ease.
        </p>
      </div>

      {/* Search */}
      <div className="mb-8">
        <div className="flex items-center bg-white border border-gray-200 rounded-2xl px-5 py-3 shadow-sm">
          <span className="text-xl mr-3">🔍</span>

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search groceries..."
            className="w-full outline-none text-gray-700"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          Categories
        </h3>

        <div className="flex flex-wrap gap-3">
          <div className="bg-green-100 text-green-700 px-5 py-3 rounded-xl font-medium">
            🥦 Vegetables
          </div>

          <div className="bg-orange-100 text-orange-700 px-5 py-3 rounded-xl font-medium">
            🍎 Fruits
          </div>

          <div className="bg-blue-100 text-blue-700 px-5 py-3 rounded-xl font-medium">
            🥛 Dairy
          </div>

          <div className="bg-purple-100 text-purple-700 px-5 py-3 rounded-xl font-medium">
            🌾 Grains
          </div>
        </div>
      </div>

      {/* Products */}
      <div>
        <div className="flex justify-between items-center mb-5">
          <h3 className="text-xl font-bold text-gray-800">
            Popular Products
          </h3>

          <span className="text-sm text-gray-500">
            {filteredItems.length} items
          </span>
        </div>

        {filteredItems.length === 0 ? (
          <div className="bg-white rounded-2xl border border-gray-200 p-10 text-center">
            <div className="text-4xl mb-3">🔎</div>

            <p className="text-gray-500">
              No groceries found.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

            {filteredItems.map((item) => (
              <div
                key={item.name}
                className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition"
              >

                {/* Product Image Area */}
                <div className="h-36 bg-green-50 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-6xl">
                    {item.emoji}
                  </span>
                </div>

                {/* Product Info */}
                <p className="text-xs text-green-600 font-medium mb-1">
                  {item.category}
                </p>

                <h4 className="text-lg font-bold text-gray-800">
                  {item.name}
                </h4>

                <div className="flex justify-between items-center mt-4">

                  <span className="text-lg font-bold text-gray-800">
                    ₹{item.price}
                  </span>

                  <button
                    onClick={() => addToCart(item)}
                    className="bg-green-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-green-700 transition"
                  >
                    Add +
                  </button>

                </div>

              </div>
            ))}

          </div>
        )}
      </div>

    </div>
  );
}

export default Grocery;