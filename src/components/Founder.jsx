import { motion } from 'framer-motion';
import founderImage from '../assets/founder.jpg';

export default function Founder() {
  return (
    <div className="py-16 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-lg transform rotate-6 group-hover:rotate-3 transition-transform duration-300"></div>
              <img
                src={founderImage}
                alt="Kunal Khairnar - Founder of Coding Conquerors"
                className="relative rounded-lg shadow-xl w-full max-w-md mx-auto transform group-hover:scale-105 transition duration-300"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Meet Our Founder</h2>
            <h3 className="text-xl text-emerald-400 mb-6">Kunal Khairnar</h3>
            <p className="text-gray-300 mb-6">
              With a passion for teaching and extensive experience in software development,
              Kunal founded Coding Conquerors to make quality coding education accessible
              to students in Malegaon and surrounding areas.
            </p>
            <p className="text-gray-300">
              His vision is to empower the next generation of developers with practical
              skills and knowledge that prepare them for successful careers in technology.
            </p>
            <div className="mt-8">
              <a
                href="tel:+918262846508" // This is the important part
                className="inline-flex items-center px-6 py-3 border border-emerald-400 text-emerald-400 rounded-lg hover:bg-emerald-400 hover:text-white transition duration-300"
                aria-label="Contact Kunal Khairnar"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Contact Now
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
