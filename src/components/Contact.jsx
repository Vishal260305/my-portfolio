import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaGlobe , FaCode, FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    fetch("https://formspree.io/f/mkgrgpze", {
      method: "POST",
      body: new FormData(form),
      headers: {
        Accept: "application/json",
      },
    })
    .then((response) => {
      if (response.ok) {
        setSubmitted(true);
        form.reset(); // Clear the form after submit
      } else {
        alert("Something went wrong. Please try again.");
      }
    })
    .catch((error) => {
      alert("Something went wrong. Please try again.");
    });
  };

  return (
    <section id="contact" className="bg-dark text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Left Side - Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6 text-gray-400">
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-[#5f00ff] text-xl mt-1" />
                <div>
                  <p className="font-semibold text-white">Location</p>
                  <p>Jaipur, Rajasthan, India</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaPhoneAlt className="text-[#5f00ff] text-xl mt-1" />
                <div>
                  <p className="font-semibold text-white">Phone</p>
                  <p>+91 8619075758</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FaEnvelope className="text-[#5f00ff] text-xl mt-1" />
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p>2022uec1571@mnit.ac.in</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-10">
              <h4 className="font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex gap-6 text-xl text-gray-400">
                <a href="https://github.com/Vishal260305" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="hover:text-[#5f00ff] transition" />
                </a>
                <a href="https://www.linkedin.com/in/vishal-gupta-377047258/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn className="hover:text-[#5f00ff] transition" />
                </a>
                <a href="https://instagram.com/vishal_26g" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="hover:text-[#5f00ff] transition" />
                </a>
                <a href="mailto:2022uec1571@mnit.ac.in">
                  <FaEnvelope className="hover:text-[#5f00ff] transition" />
                </a>
                <a href="https://leetcode.com/u/_vg260305._/" target="_blank" rel="noopener noreferrer">
                  <FaCode className="hover:text-[#5f00ff] transition" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Side - Form */}
          <div className="bg-[#11152e] p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>

            {submitted ? (
              <div className="text-green-400 text-center text-lg">
                Thank you! Your message has been sent.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full bg-transparent border border-gray-600 rounded-lg p-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5f00ff]"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full bg-transparent border border-gray-600 rounded-lg p-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5f00ff]"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full bg-transparent border border-gray-600 rounded-lg p-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5f00ff]"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  required
                  className="w-full bg-transparent border border-gray-600 rounded-lg p-3 text-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5f00ff]"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-[#5f00ff] hover:bg-[#7f00ff] text-white font-semibold py-3 rounded-lg transition"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
