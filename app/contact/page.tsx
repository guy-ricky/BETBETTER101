"use client";

import React, { useState } from "react";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Hook into backend/email service
    alert("Message sent! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 text-gray-200">
      <h1 className="text-3xl font-bold mb-6 text-white">Contact Us</h1>
      <p className="mb-6 text-gray-400">
        Have questions or need support? Fill out the form below and we’ll get
        back to you.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 text-sm text-gray-400">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-3 bg-[#1a1a1a] border border-[#333] rounded-lg text-white focus:ring-2 focus:ring-[#00FF66]"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm text-gray-400">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-3 bg-[#1a1a1a] border border-[#333] rounded-lg text-white focus:ring-2 focus:ring-[#00FF66]"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm text-gray-400">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full p-3 bg-[#1a1a1a] border border-[#333] rounded-lg text-white focus:ring-2 focus:ring-[#00FF66]"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-[#00FF66] text-[#111] font-semibold py-3 rounded-lg hover:bg-[#00cc52] transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
