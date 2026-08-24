import React from "react";

function Transport() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Book a Ride</h2>
      <form className="bg-white p-4 shadow rounded max-w-md">
        <label className="block mb-2">Pickup Location</label>
        <input type="text" className="w-full mb-4 p-2 border rounded" placeholder="Enter pickup" />

        <label className="block mb-2">Drop Location</label>
        <input type="text" className="w-full mb-4 p-2 border rounded" placeholder="Enter drop" />

        <label className="block mb-2">Auto Type</label>
        <select className="w-full mb-4 p-2 border rounded">
          <option value="back">Back Seater</option>
          <option value="bolero">Bolero Type</option>
        </select>

        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Book Auto
        </button>
      </form>
    </div>
  );
}

export default Transport;
