import React from "react";
import { Link } from "react-router-dom"; // Ensure Link is imported from react-router-dom
//import "./About.css";

const About = () => {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-gray-400 min-h-screen">
      {/* Home Section */}
      <div className="pt-24 md:pt-32 container mx-auto px-4 md:px-8 lg:px-24 flex flex-col-reverse lg:flex-row items-center justify-between">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-600 mb-4">
           Chroma Intelligent Solutions
          </h1>
          <h3 className="text-base md:text-lg text-gray-600 mb-6 mt-8">
          Our platform helps you gain competitive insights into India’s
          electronics retail sector. We provide detailed comparisons of major
          players in the market, including Reliance Digital, Vijay Sales, Aditya
          Vision, and more. Whether you’re looking to understand business
          models, product portfolios, geographical presence, or customer
          feedback, we’ve got you covered.
          </h3>
          <div className="flex flex-col sm:flex-row sm:space-x-4">
            <a
              href="https://whatsapp.com/channel/0029Vaj7NoD3AzNNs0H8kg44"
              className="w-full sm:w-auto px-6 py-2 md:px-8 md:py-3 bg-green-600 text-white rounded-lg shadow-lg hover:bg-gray-700 mb-2 sm:mb-0"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more about our project
            </a>
          </div>

          {/* <ul className="mt-12 space-y-2 font-semibold text-gray-600 text-sm md:text-base mb-6">
            <li>&#10003; Direct connections to startups.</li>
            <li>&#10003; Real-world projects for hands-on learning.</li>
            <li>&#10003; Mentorship from industry experts.</li>
            <li>&#10003; Paid internships for top performers.</li>
            <li>&#10003; Portfolio-building opportunities.</li>
          </ul> */}
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/3 flex justify-center">
          <div className="relative">
            <img src="../assets/home.png" alt="Illustration" className="max-w-full h-auto" />
            {/* Ensure homeIcon path is correct */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
