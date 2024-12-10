import { Link } from 'react-router-dom';
import { CodeBracketIcon } from '@heroicons/react/24/outline';

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <CodeBracketIcon className="h-16 w-16 text-emerald-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to <span className="text-emerald-400">Coding Conquerors</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Transform your future with expert coding education in Malegaon, Maharashtra
          </p>
          <div className="space-x-4">
            <Link
              to="/courses"
              className="bg-emerald-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-600 transition duration-300"
            >
              Explore Courses
            </Link>
            <Link
              to="/contact"
              className="border-2 border-emerald-400 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-400 hover:text-white transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}