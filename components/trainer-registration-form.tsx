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

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("/api/trainer-registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Application submitted successfully!");

        setFormData({
          name: "",
          phone: "",
          email: "",
          qualification: "",
          experience: "",
          skills: "",
          availability: "Full Time",
          salary: "",
        });
      } else {
        alert(result.error || "Failed to submit application.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-3xl font-bold text-center mb-6">
        ATL Trainer Registration
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border rounded-lg p-3"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full border rounded-lg p-3"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border rounded-lg p-3"
        />

        <input
          type="text"
          name="qualification"
          placeholder="Qualification"
          value={formData.qualification}
          onChange={handleChange}
          required
          className="w-full border rounded-lg p-3"
        />

        <input
          type="text"
          name="experience"
          placeholder="Experience"
          value={formData.experience}
          onChange={handleChange}
          required
          className="w-full border rounded-lg p-3"
        />

        <input
          type="text"
          name="skills"
          placeholder="Skills (Arduino, Robotics, AI, Python...)"
          value={formData.skills}
          onChange={handleChange}
          required
          className="w-full border rounded-lg p-3"
        />

        <select
          name="availability"
          value={formData.availability}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        >
          <option value="Full Time">Full Time</option>
          <option value="Part Time">Part Time</option>
        </select>

        <input
          type="number"
          name="salary"
          placeholder="Expected Salary"
          value={formData.salary}
          onChange={handleChange}
          required
          className="w-full border rounded-lg p-3"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 rounded-lg transition disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Apply Now"}
        </button>
      </form>
    </div>
  );
}
