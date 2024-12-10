import { useState } from 'react';
import { CodeBracketIcon, AcademicCapIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import FeatureModal from './FeatureModal';

export default function Features() {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const features = [
    {
      name: 'Expert Instruction',
      description: 'Learn from experienced professionals led by Kunal Khairnar',
      icon: AcademicCapIcon,
      details: {
        title: 'Expert Instruction at Coding Conquerors',
        content: [
          'Led by Kunal Khairnar',
          'Personalized mentoring and guidance throughout your learning journey',
          'Industry-relevant curriculum updated with latest technologies',
          'Regular workshops and guest lectures from industry professionals',
          'One-on-one doubt clearing sessions',
          'Continuous assessment and feedback for improvement'
        ]
      }
    },
    {
      name: 'Practical Learning',
      description: 'Hands-on coding experience with real-world projects',
      icon: CodeBracketIcon,
      details: {
        title: 'Practical Learning Approach',
        content: [
          'Build real-world projects that you can add to your portfolio',
          'Industry-standard development tools and practices',
          'Weekly coding challenges ',
          'Collaborative project work simulating real workplace scenarios',
          'Version control and code review practices',
          'Deploy and showcase your applications live'
        ]
      }
    },
    {
      name: 'Supportive Community',
      description: 'Join a community of passionate learners and developers',
      icon: UserGroupIcon,
      details: {
        title: 'Our Learning Community',
        content: [
          'Connect with fellow learners and alumni',
          'Regular community meetups and coding sessions',
          'Online discussion forums for 24/7 support',
          'Networking opportunities with industry professionals',
          'Access to exclusive learning resources',
          'Lifetime access to our community platform'
        ]
      }
    },
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-12">Why Choose Coding Conquerors?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="bg-gray-800 bg-opacity-50 backdrop-blur-lg p-6 rounded-lg shadow-lg border border-gray-700 hover:border-emerald-400 transform hover:scale-105 transition duration-300 cursor-pointer"
              onClick={() => setSelectedFeature(feature)}
            >
              <div className="flex flex-col items-center text-center">
                <feature.icon className="h-12 w-12 text-emerald-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.name}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <FeatureModal
        feature={selectedFeature}
        isOpen={!!selectedFeature}
        onClose={() => setSelectedFeature(null)}
      />
    </div>
  );
}