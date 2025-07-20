import React, { useRef } from "react";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { toast } from 'react-toastify';

export const ContactForm = () => {
  const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  
  emailjs
    .sendForm(
      "service_742ncwh",
      "template_zz0hayr", 
      form.current,
      "HpWKxfZB3WOoHPjMQ"
    )
    .then(() => {
      console.log("Message sent to owner");

      
      emailjs
        .sendForm(
          "service_742ncwh",
          "template_yc9yfr5", // Auto-reply template
          form.current,
          "HpWKxfZB3WOoHPjMQ"
        )
        .then(() => {
          toast.success("Message sent successfully!");
          form.current.reset();
        })
        .catch((error) => {
          console.error("Auto-reply failed:", error);
          toast.error("Failed to send auto-reply.");
        });
    })
    .catch((error) => {
      console.error("Sending to owner failed:", error);
      toast.error("Failed to send message.");
    });
};


  return (
    <div className="flex w-full min-h-screen justify-center items-center px-4 bg-gray-50">
      <div className="bg-cyan-700 flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 w-full max-w-4xl p-8 rounded-xl shadow-lg text-white overflow-hidden">
        {/* Left Side - Info */}
        <div className="flex flex-col justify-between flex-1">
          <div>
            <h1 className="font-bold text-4xl tracking-wide">Contact Me</h1>
            <p className="pt-2 text-cyan-100 text-sm">
              Feel free to reach out through any platform or by filling out the form.
            </p>
          </div>

          <div className="flex flex-col space-y-6 mt-6">
            <div className="inline-flex space-x-2 items-center text-justify">
              <MdPhone className="text-teal-300 text-2xl" />
              <span>+91 7025833467</span>
            </div>
            <div className="inline-flex space-x-2 items-center text-justify">
              <MdEmail className="text-teal-300 text-2xl" />
              <span>anandhubalakrishnan77@gmail.com</span>
            </div>
            <div className="inline-flex space-x-2 items-center text-justify">
              <MdLocationOn className="text-teal-300 text-2xl" />
              <span>Ernakulam, Kerala</span>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-2">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <FaGithub size={24} className="text-white hover:text-gray-300" />
              </a>
              <a href="www.linkedin.com/in/anandhu-balakrishnan" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} className="text-white hover:text-gray-300" />
              </a>
              <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={24} className="text-white hover:text-gray-300" />
              </a>
              <a href="https://facebook.com/yourhandle" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={24} className="text-white hover:text-gray-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="relative z-10 bg-white rounded-xl shadow-lg p-8 text-gray-600 flex-1 md:w-[400px]">
          <form
            ref={form}
            name="contact"
            onSubmit={sendEmail}
            className="flex flex-col space-y-4"
          >
            <div>
              <label className="text-sm">Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"
              />
            </div>

            <div>
              <label className="text-sm">Your Email</label>
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"
              />
            </div>

            <div>
              <label className="text-sm">Message</label>
              <textarea
                name="message"
                placeholder="Your message"
                rows={4}
                required
                className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300"
              />
            </div>

            <button
              type="submit"
              className="inline-block self-end bg-cyan-700 text-white font-bold rounded-lg uppercase text-sm px-6 py-2 hover:bg-cyan-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};




