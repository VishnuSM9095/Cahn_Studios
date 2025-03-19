"use client";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { useTheme } from "next-themes";

export default function ContactForm() {
  const { theme, resolvedTheme } = useTheme(); // Handling both default and resolved themes
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(resolvedTheme === "dark");
  }, [resolvedTheme]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "179f7d6f-2486-4b5d-aee8-60d9636ad54c");

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
    <section
      className={cn(
        "container mx-auto py-16 px-6 md:px-12 lg:px-20 transition-colors duration-300",
        isDark ? "bg-black/10  text-white" : "bg-gray-100 text-black"
      )}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Info Section */}
        <div>
          <h2
            className={cn(
              "text-4xl font-bold",
              isDark ? "text-white" : "text-black"
            )}
          >
            Get in Touch
          </h2>
          <p
            className={cn(
              "mt-3 text-lg",
              isDark ? "text-gray-300" : "text-gray-600"
            )}
          >
            We would love to hear from you! Fill out the form and we will get
            back to you soon.
            <br />
            Email us at{" "}
            <strong
              className={cn(isDark ? "text-gray-200" : "text-gray-700")}
            >
              Create@cahnstudios.com
            </strong>
          </p>
        </div>

        {/* Right Side - Contact Form */}
        <div
          className={cn(
            "shadow-xl rounded-lg p-6 md:p-8 border backdrop-blur-lg transition-all",
            isDark
              ? "bg-black/50 border-white/10 text-white"
              : "bg-white border-gray-200 text-black"
          )}
        >
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name Field */}
              <div>
                <label
                  className={cn(
                    "block text-sm font-medium",
                    isDark ? "text-gray-300" : "text-gray-700"
                  )}
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className={cn(
                    "w-full p-3 mt-1 border rounded-md focus:ring-2 focus:outline-none transition-all",
                    isDark
                      ? "bg-black/30 text-white placeholder-gray-500 border-white/20 focus:ring-gray-300"
                      : "bg-white text-black placeholder-gray-500 border-gray-300 focus:ring-gray-600"
                  )}
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  className={cn(
                    "block text-sm font-medium",
                    isDark ? "text-gray-300" : "text-gray-700"
                  )}
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className={cn(
                    "w-full p-3 mt-1 border rounded-md focus:ring-2 focus:outline-none transition-all",
                    isDark
                      ? "bg-black/30 text-white placeholder-gray-500 border-white/20 focus:ring-gray-300"
                      : "bg-white text-black placeholder-gray-500 border-gray-300 focus:ring-gray-600"
                  )}
                  required
                />
              </div>
            </div>

            {/* Contact Number */}
            <div>
              <label
                className={cn(
                  "block text-sm font-medium",
                  isDark ? "text-gray-300" : "text-gray-700"
                )}
              >
                Contact Number
              </label>
              <input
                type="tel"
                name="contact"
                placeholder="Your Phone Number"
                className={cn(
                  "w-full p-3 mt-1 border rounded-md focus:ring-2 focus:outline-none transition-all",
                  isDark
                    ? "bg-black/30 text-white placeholder-gray-500 border-white/20 focus:ring-gray-300"
                    : "bg-white text-black placeholder-gray-500 border-gray-300 focus:ring-gray-600"
                )}
                required
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                className={cn(
                  "block text-sm font-medium",
                  isDark ? "text-gray-300" : "text-gray-700"
                )}
              >
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="Write your message..."
                className={cn(
                  "w-full p-3 mt-1 border rounded-md focus:ring-2 focus:outline-none transition-all",
                  isDark
                    ? "bg-black/30 text-white placeholder-gray-500 border-white/20 focus:ring-gray-300"
                    : "bg-white text-black placeholder-gray-500 border-gray-300 focus:ring-gray-600"
                )}
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={cn(
                buttonVariants({ size: "lg" }),
                "w-full transition-all duration-200",
                isDark
                  ? "bg-white/10 border border-white/20 text-white hover:bg-white/20"
                  : "bg-black/90 text-white border border-gray-300 hover:bg-gray-800"
              )}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {/* Message Feedback */}
            {message && (
              <p
                className={cn(
                  "text-center mt-3 text-sm transition-all",
                  message.includes("Thank you") ? "text-green-400" : "text-red-400"
                )}
              >
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
