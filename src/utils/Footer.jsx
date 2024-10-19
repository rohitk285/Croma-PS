import React from 'react';
import { Link } from 'react-router-dom'; 
// import { FaInstagram, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-center md:justify-around px-4 font-semibold">
        {/* Left Side */}
        <div className="flex flex-col space-y-4 text-center md:text-left md:mr-10">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/about" className="hover:text-blue-600">About</Link>
        </div>
        
        {/* Second Column */}
        <div className="flex flex-col space-y-4 text-center md:text-left md:mr-10">
          <Link to="/resources" className="hover:text-blue-600">Resources</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
