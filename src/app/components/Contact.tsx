"use client";

import React from "react";
import { FaEnvelopeOpenText } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="pt-20 md:pt-32 px-4 sm:px-6 md:px-12 bg-background text-white"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 flex items-center justify-center gap-3">
        <FaEnvelopeOpenText className="text-indigo-500 text-2xl sm:text-3xl" />
        Get In Touch
      </h2>

      <div className="max-w-xl sm:max-w-2xl mx-auto bg-gray-800/70 backdrop-blur-sm p-8 sm:p-10 rounded-xl shadow-xl">
        <p className="text-center text-base sm:text-lg text-gray-300 mb-8 sm:mb-10">
          Have a question or want to collaborate? Drop me a message!
        </p>

        <form action="#" method="POST" className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-gray-400 mb-2 text-sm sm:text-base"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-200 text-sm sm:text-base"
              placeholder="Your name"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-gray-400 mb-2 text-sm sm:text-base"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-200 text-sm sm:text-base"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-gray-400 mb-2 text-sm sm:text-base"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-200 text-sm sm:text-base"
              placeholder="Your message..."
              required
            />
          </div>

          <div className="text-center pt-4">
            <button
              type="submit"
              className="cursor-pointer bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-8 rounded-lg transition-transform transform hover:scale-105 duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
