import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="max-w-6xl mx-auto">

      {/* Welcome Section */}
      <section className="bg-green-50 rounded-3xl p-8 mb-8">
        <p className="text-green-600 font-semibold mb-2">
          Welcome to M-Mart 👋
        </p>

        <h2 className="text-4xl font-bold text-gray-800">
          Everything you need,
          <br />
          in one place.
        </h2>

        <p className="text-gray-500 mt-3">
          Shop groceries or book an auto service easily.
        </p>
      </section>

      {/* Services */}
      <h3 className="text-2xl font-bold text-gray-800 mb-4">
        Our Services
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">

        {/* Grocery */}
        <Link
          to="/"
          className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-green-300 transition"
        >
          <div className="text-5xl mb-4">🛍️</div>

          <h4 className="text-xl font-bold text-gray-800">
            Grocery Shopping
          </h4>

          <p className="text-gray-500 mt-2">
            Buy your daily grocery essentials.
          </p>

          <p className="text-green-600 font-semibold mt-4">
            Shop Now →
          </p>
        </Link>

        {/* Auto */}
        <Link
          to="/transport"
          className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-green-300 transition"
        >
          <div className="text-5xl mb-4">🚗</div>

          <h4 className="text-xl font-bold text-gray-800">
            Auto Service
          </h4>

          <p className="text-gray-500 mt-2">
            Book an auto for passengers or goods.
          </p>

          <p className="text-green-600 font-semibold mt-4">
            Book Now →
          </p>
        </Link>

      </div>

      {/* Why M-Mart */}
      <section className="bg-white border border-gray-200 rounded-2xl p-6">

        <h3 className="text-2xl font-bold text-gray-800 mb-5">
          Why M-Mart?
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          <div>
            <div className="text-3xl mb-2">🛒</div>
            <h4 className="font-bold">Easy Shopping</h4>
            <p className="text-sm text-gray-500 mt-1">
              Simple grocery ordering.
            </p>
          </div>

          <div>
            <div className="text-3xl mb-2">🚗</div>
            <h4 className="font-bold">Auto Service</h4>
            <p className="text-sm text-gray-500 mt-1">
              Passenger and goods transport.
            </p>
          </div>

          <div>
            <div className="text-3xl mb-2">⚡</div>
            <h4 className="font-bold">Simple & Fast</h4>
            <p className="text-sm text-gray-500 mt-1">
              Everything in one place.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;