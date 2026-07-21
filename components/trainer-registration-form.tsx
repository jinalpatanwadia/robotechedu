"use client";

export default function TrainerRegistrationForm() {
  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-3xl font-bold text-center mb-6">
        ATL Trainer Registration
      </h2>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full border rounded-lg p-3"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full border rounded-lg p-3"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full border rounded-lg p-3"
        />

        <input
          type="text"
          placeholder="Qualification"
          className="w-full border rounded-lg p-3"
        />

        <input
          type="text"
          placeholder="Experience"
          className="w-full border rounded-lg p-3"
        />

        <input
          type="text"
          placeholder="Skills (Arduino, Robotics, AI...)"
          className="w-full border rounded-lg p-3"
        />

        <select className="w-full border rounded-lg p-3">
          <option>Full Time</option>
          <option>Part Time</option>
        </select>

        <input
          type="number"
          placeholder="Expected Salary"
          className="w-full border rounded-lg p-3"
        />

        <button
          type="submit"
          className="w-full bg-yellow-500 text-black font-bold py-3 rounded-lg"
        >
          Apply Now
        </button>
      </form>
    </div>
  );
}
