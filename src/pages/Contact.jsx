import React from 'react';
import online from '../assets/online.jpg';
import contactUs from '../assets/contactUs.jpg';
import smm from '../assets/smm.webp';

const Contact = () => {
  return (
    <div className="p-5">
      <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
        <div className="p-10 rounded-2xl shadow-2xl bg-white shadow-gray-300">
          <h1 className="text-center m-2 text-lg font-sans font-black">Contact Us - X-10 Gaming</h1>
          <p>
            Welcome to X-10 Gaming! We’d love to hear from you. Whether you have a question, feedback, or need support,
            feel free to reach out to us through the channels below.
          </p>
        </div>
        <img src={online} alt="" className="rounded-2xl w-full" />
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
        <img src={smm} alt="" className="rounded-2xl w-full" />
        <div className="shadow-2xl bg-white shadow-gray-300 rounded-2xl p-10 text-lg">
          <h1 className="text-center font-black font-sans">Get in Touch</h1>
          <ul className="mt-4">
            <li className="mb-4">📍 <strong>Address:</strong> 123 Gamer’s Street, Virtual City, GameWorld</li>
            <li className="mb-4">📞 <strong>Phone:</strong> +123 456 7890</li>
            <li className="mb-4">📧 <strong>Email:</strong> support@x10gaming.com</li>
            <li>🌍 <strong>Website:</strong> <a href="#" className="text-blue-500">www.x10gaming.com</a></li>
          </ul>
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-5 items-center">
        <img src={contactUs} alt="" className="rounded-2xl w-full" />
        <div className="bg-white shadow-gray-300 shadow-2xl rounded-2xl p-10 text-lg">
          <h1 className="font-black font-sans text-center m-4">Customer Support</h1>
          <p>
            Facing issues with your account, game purchases, or gameplay? Our support team is available 24/7 to assist you.
            We offer multiple ways to get in touch with us:
          </p>
          <ul className="mt-4">
            <li className="mb-2">📩 <strong>Support Ticket:</strong> <a href="#" className="text-blue-500">Submit a Ticket</a></li>
            <li className="mb-2">📢 <strong>Community Forum:</strong> <a href="#" className="text-blue-500">Join the Discussion</a></li>
            <li className="mb-2">🎥 <strong>Live Chat:</strong> Available on our website during business hours.</li>
            <li>📧 <strong>Email:</strong> support@x10gaming.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
