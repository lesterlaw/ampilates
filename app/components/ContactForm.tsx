"use client";

import { useState, FormEvent } from "react";
import { ChevronDown } from "lucide-react";

interface ContactFormProps {
  className?: string;
}

export default function ContactForm({ className }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    location: "Jurong CPF",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with actual API call if needed)
    await new Promise((resolve) => setTimeout(resolve, 500));

    setIsSubmitting(false);
    setShowSuccess(true);
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      location: "Jurong CPF",
      message: "",
    });

    // Hide success message after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  return (
    <div className={className}>
      {showSuccess && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-[20px] md:rounded-[30px] text-center">
          <p className="text-sm md:text-base text-green-800">
            Thanks for your message! Our team will be in touch shortly.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-4 md:space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 md:p-4 rounded-full bg-white border border-gray-300 focus:outline-none focus:border-[#80978b] text-sm md:text-base"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 md:p-4 rounded-full bg-white border border-gray-300 focus:outline-none focus:border-[#80978b] text-sm md:text-base"
          />
        </div>
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full p-3 md:p-4 rounded-full bg-white border border-gray-300 focus:outline-none focus:border-[#80978b] text-sm md:text-base"
        />
        <div>
          <label className="block text-[#656565] text-sm md:text-base mb-2">
            Location
          </label>
          <div className="relative">
            <select
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full p-3 md:p-4 pr-10 rounded-full bg-white border border-gray-300 focus:outline-none focus:border-[#80978b] text-sm md:text-base appearance-none"
            >
              <option>Jurong CPF</option>
              <option>Punggol Coast Mall</option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-4 md:right-5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#656565]" />
          </div>
        </div>
        <textarea
          name="message"
          placeholder="Your message"
          rows={6}
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-3 md:p-4 rounded-[20px] md:rounded-[30px] bg-white border border-gray-300 focus:outline-none focus:border-[#80978b] resize-none text-sm md:text-base"
        />
        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#80978b] cursor-pointer hover:bg-[#6b8276] disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 md:px-8 py-3 rounded-full font-bold text-sm md:text-base transition-colors"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}

