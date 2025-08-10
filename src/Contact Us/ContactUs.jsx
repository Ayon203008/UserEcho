import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="w-11/12 mx-auto py-12 min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold font-serif bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Contact Us
        </h1>
        <p className="mt-3 text-lg text-gray-400">
          Have questions? We’d love to hear from you.
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Contact Section */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="bg-gray-800 p-10 rounded-3xl shadow-lg hover:shadow-xl transition duration-300">
          <h2 className="text-3xl font-semibold mb-6 text-white font-serif">
            Get In Touch
          </h2>
          <p className="mb-6 text-gray-400">
            We are here to answer any questions you may have about our services.
          </p>
          <ul className="space-y-6 text-gray-300">
            <li className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-purple-400 text-2xl" />
              <span>123 Service Street, Dhaka, Bangladesh</span>
            </li>
            <li className="flex items-center gap-4">
              <FaPhoneAlt className="text-pink-400 text-2xl" />
              <span>+880 123 456 789</span>
            </li>
            <li className="flex items-center gap-4">
              <FaEnvelope className="text-red-400 text-2xl" />
              <span>support@userecho.com</span>
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-800 p-10 rounded-3xl shadow-lg border border-gray-700 hover:shadow-xl transition duration-300">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="mt-2 block w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-pink-500 outline-none text-white placeholder-gray-500 transition"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="mt-2 block w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-pink-500 outline-none text-white placeholder-gray-500 transition"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">
                Message
              </label>
              <textarea
                placeholder="Write your message..."
                rows="4"
                className="mt-2 block w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-pink-500 outline-none text-white placeholder-gray-500 transition"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 text-white py-3 rounded-lg hover:opacity-90 transition font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
