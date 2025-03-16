'use client';
import React, { useState } from "react";
import { cn } from "@/lib/utils"; // Utility for conditional classes
import { buttonVariants } from "@/components/ui/button";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    setLoading(false);

    if (result.success) {
      setMessage("Thank you! Your message has been sent.");
      e.currentTarget.reset();
    } else {
      setMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <section className="container mx-auto py-16 px-6 md:px-12 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Info Section */}
        <div className="text-left">
          <h2 className="text-4xl font-bold text-white">
            Get in Touch
          </h2>
          <p className="mt-3 text-gray-300">
            We'd love to hear from you! Fill out the form and we'll get back to you soon.
          </p>
        </div>

        {/* Right Side - Contact Form Card */}
        <div className="bg-white/5 backdrop-blur-lg shadow-xl rounded-lg p-6 md:p-8 border border-white/10">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name Field */}
              <div>
                <label className="block text-gray-300">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full p-3 mt-1 border border-white/20 rounded-md bg-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-gray-300 focus:outline-none"
                  required
                />
              </div>
              {/* Email Field */}
              <div>
                <label className="block text-gray-300">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full p-3 mt-1 border border-white/20 rounded-md bg-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-gray-300 focus:outline-none"
                  required
                />
              </div>
            </div>

            {/* Contact Number */}
            <div>
              <label className="block text-gray-300">Contact Number</label>
              <input
                type="tel"
                name="contact"
                placeholder="Your Phone Number"
                className="w-full p-3 mt-1 border border-white/20 rounded-md bg-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-gray-300 focus:outline-none"
                required
              />
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-gray-300">Message</label>
              <textarea
                name="message"
                rows={4}
                placeholder="Write your message..."
                className="w-full p-3 mt-1 border border-white/20 rounded-md bg-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-gray-300 focus:outline-none"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={cn(
                buttonVariants({ size: "lg" }),
                "w-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-200"
              )}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {/* Message Feedback */}
            {message && (
              <p className="text-center mt-3 text-sm text-green-400">
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
