"use client";

import { useState } from "react";

export default function TrainerRegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    qualification: "",
    experience: "",
    skills: "",
    availability: "Full Time",
    salary: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-3xl font-bold text-center mb-6">
        ATL Trainer Registration
      </h2>

      <form className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        />

        <input
          type="text"
          name="qualification"
          placeholder="Qualification"
          value={formData.qualification}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        />

        <input
          type="text"
          name="experience"
          placeholder="Experience"
          value={formData.experience}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        />

        <input
          type="text"
          name="skills"
          placeholder="Skills (Arduino, Robotics, AI...)"
          value={formData.skills}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        />

        <select
          name="availability"
          value={formData.availability}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        >
          <option>Full Time</option>
          <option>Part Time</option>
        </select>

        <input
          type="number"
          name="salary"
          placeholder="Expected Salary"
          value={formData.salary}
          onChange={handleChange}
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
