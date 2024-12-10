import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">About Coding Conquerors</h1>

          <div className="prose lg:prose-lg text-gray-300">
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">About Kunal Khairnar</h2>
            <p className="mb-6">
              Kunal Khairnar, the founder of Coding Conquerors, is a passionate educator and software development expert. With years of industry experience, he founded Coding Conquerors to provide students with the practical coding skills needed to succeed in the tech world. Kunal’s vision is to equip the next generation of developers with real-world skills and empower them to build successful careers in technology.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">About Coding Conquerors</h2>
            <p className="mb-6">
              At Coding Conquerors, we don’t just teach coding—we shape the future of tech. Led by Kunal Khairnar, our institute provides a hands-on, project-based learning experience. Our mission is to empower students with the skills and confidence they need to succeed in the tech industry. With a focus on small batch sizes, personalized attention, and real-world projects, we ensure that every student is ready for a career in software development.
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Practical, project-based learning</li>
              <li>Industry-relevant curriculum</li>
              <li>Small batch sizes for personalized attention</li>
              <li>Career guidance and placement support</li>
            </ul>

            <div className="mt-8">
              <a
                href="tel:+918262846508"
                className="inline-flex items-center px-6 py-3 border border-emerald-400 text-emerald-400 rounded-lg hover:bg-emerald-400 hover:text-white transition duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
