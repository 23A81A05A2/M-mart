import React, { useState } from "react";

function Transport() {
  const [form, setForm] = useState({
    service: "",
    pickup: "",
    drop: "",
    date: "",
  });

  const [booked, setBooked] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleBooking = (e) => {
    e.preventDefault();

    if (!form.service || !form.pickup || !form.drop || !form.date) {
      alert("Please fill all details");
      return;
    }

    setBooked(true);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-green-700 mb-2">
        🛺 Auto Service
      </h2>

      <p className="text-gray-600 mb-6">
        Goods transport and local delivery service
      </p>

      {!booked ? (
        <form
          onSubmit={handleBooking}
          className="bg-white border rounded-xl p-6 shadow-sm space-y-4"
        >
          <div>
            <label className="block font-medium mb-1">
              Select Service
            </label>

            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            >
              <option value="">Choose a service</option>
              <option value="Goods Transport">Goods Transport</option>
              <option value="Local Delivery">Local Delivery</option>
              <option value="Household Shifting">
                Household Shifting
              </option>
            </select>
          </div>

          <div>
            <label className="block font-medium mb-1">
              Pickup Location
            </label>

            <input
              type="text"
              name="pickup"
              value={form.pickup}
              onChange={handleChange}
              placeholder="Enter pickup location"
              className="w-full border rounded-lg p-2"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">
              Drop Location
            </label>

            <input
              type="text"
              name="drop"
              value={form.drop}
              onChange={handleChange}
              placeholder="Enter destination"
              className="w-full border rounded-lg p-2"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">
              Date
            </label>

            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            />
          </div>

          <div className="bg-green-50 p-3 rounded-lg">
            🛺 <b>2 Autos Available</b>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
          >
            Book Auto
          </button>
        </form>
      ) : (
        <div className="bg-green-50 border border-green-200 rounded-xl p-6">
          <h3 className="text-2xl font-bold text-green-700 mb-4">
            ✅ Booking Confirmed
          </h3>

          <p>
            <b>Service:</b> {form.service}
          </p>

          <p>
            <b>Pickup:</b> {form.pickup}
          </p>

          <p>
            <b>Drop:</b> {form.drop}
          </p>

          <p>
            <b>Date:</b> {form.date}
          </p>

          <p className="mt-4 text-gray-600">
            Your auto booking has been successfully received.
          </p>

          <button
            onClick={() => setBooked(false)}
            className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg"
          >
            Book Another Auto
          </button>
        </div>
      )}
    </div>
  );
}

export default Transport;