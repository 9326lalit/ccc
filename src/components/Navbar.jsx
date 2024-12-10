import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Logo />
              <span className="text-xl font-bold">Coding Conquerors</span>
              {/* ISO 9001:2015 Certified Badge */}
              <span className="text-sm text-green-500 font-medium bg-gray-800 px-2 py-1 rounded-full ml-3">
                ISO 9001:2015 Certified
              </span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="hover:text-emerald-400 px-3 py-2 rounded-md transition duration-300">Home</Link>
              <Link to="/courses" className="hover:text-emerald-400 px-3 py-2 rounded-md transition duration-300">Courses</Link>
              <Link to="/about" className="hover:text-emerald-400 px-3 py-2 rounded-md transition duration-300">About</Link>
              <Link to="/contact" className="hover:text-emerald-400 px-3 py-2 rounded-md transition duration-300">Contact</Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-emerald-400 focus:outline-none transition duration-300"
            >
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block hover:text-emerald-400 px-3 py-2 rounded-md transition duration-300">Home</Link>
            <Link to="/courses" className="block hover:text-emerald-400 px-3 py-2 rounded-md transition duration-300">Courses</Link>
            <Link to="/about" className="block hover:text-emerald-400 px-3 py-2 rounded-md transition duration-300">About</Link>
            <Link to="/contact" className="block hover:text-emerald-400 px-3 py-2 rounded-md transition duration-300">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
