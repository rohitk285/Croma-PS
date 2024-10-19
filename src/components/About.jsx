import React from "react";
import { Link } from "react-router-dom"; // Ensure Link is imported from react-router-dom
//import "./About.css";

const About = () => {
  return (
    <section className="bg-gradient-to-b from-blue-100 to-blue-400 min-h-screen">
      {/* Home Section */}
      <div className="pt-24 md:pt-32 container mx-auto px-4 md:px-8 lg:px-24 flex flex-col-reverse lg:flex-row items-center justify-between">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600 mb-4">
            Get Industry Experience & Paid Internships without ever creating a Resume or Paying for a Course!
          </h1>
          <h3 className="text-base md:text-lg text-gray-600 mb-6 mt-8">
            KADAL connects students with startups looking to hire, via live industry projects in domains of Tech, Design & Management, offering hands-on experience and hiring opportunities.
          </h3>
          <div className="flex flex-col sm:flex-row sm:space-x-4">
            <a
              href="https://whatsapp.com/channel/0029Vaj7NoD3AzNNs0H8kg44"
              className="w-full sm:w-auto px-6 py-2 md:px-8 md:py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 mb-2 sm:mb-0"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join the community now →
            </a>
            <Link
              to="/contact?role=organization"
              className="text-sm w-full sm:w-auto px-6 py-2 rounded-lg md:px-3 md:py-3 text-gray-600 font-semibold hover:bg-gray-400 hover:text-white text-center cursor-pointer"
            >
              Hire Instantly →
            </Link>
          </div>

          <ul className="mt-12 space-y-2 font-semibold text-gray-600 text-sm md:text-base mb-6">
            <li>&#10003; Direct connections to startups.</li>
            <li>&#10003; Real-world projects for hands-on learning.</li>
            <li>&#10003; Mentorship from industry experts.</li>
            <li>&#10003; Paid internships for top performers.</li>
            <li>&#10003; Portfolio-building opportunities.</li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
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
