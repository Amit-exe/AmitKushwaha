import React from 'react';
import { Trophy, Star, FileText, Code, Award, ExternalLink } from 'lucide-react';

const Achievements: React.FC = () => {
  const certifications = [
    {
      title: 'Python Programming',
      provider: 'HackerRank',
      icon: Code,
      color: 'from-blue-500 to-blue-600',
      description: 'Advanced Python programming certification demonstrating expertise in core concepts'
    },
    {
      title: 'Flutter Development Bootcamp',
      provider: 'Udemy',
      icon: Award,
      color: 'from-purple-500 to-purple-600',
      description: 'Comprehensive Flutter development course covering mobile app development'
    },
    {
      title: 'Responsive Web Design',
      provider: 'FreeCodeCamp',
      icon: Trophy,
      color: 'from-blue-600 to-purple-500',
      description: 'Modern web design principles and responsive layout techniques'
    }
  ];

  const achievements = [
    {
      title: 'Research Paper Publication',
      description: 'Presented research paper on COVID-19 prediction using Machine Learning at Darwin 2020 International Conference',
      icon: FileText,
      color: 'from-blue-500 to-purple-500',
      highlight: 'International Conference'
    },
    {
      title: '3-Star Coder',
      description: 'Achieved 3-star rating on CodeChef competitive programming platform',
      icon: Star,
      color: 'from-purple-600 to-indigo-600',
      highlight: 'CodeChef Platform'
    },
    {
      title: 'Customer Satisfaction Impact',
      description: '20% increase in customer satisfaction through performance optimizations at TSIM',
      icon: Trophy,
      color: 'from-blue-600 to-purple-600',
      highlight: '20% Improvement'
    },
    {
      title: 'Operational Efficiency',
      description: '30% boost in operational efficiency through admin dashboard improvements at WarmConnect',
      icon: Award,
      color: 'from-purple-700 to-blue-600',
      highlight: '30% Efficiency Boost'
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">Achievements & Certifications</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto transition-colors duration-300">
            Professional certifications and notable achievements throughout my career journey
          </p>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center transition-colors duration-300">Professional Certifications</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 p-6 rounded-xl hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${cert.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <cert.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4 flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-sm font-medium text-purple-600 dark:text-purple-400">{cert.provider}</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center transition-colors duration-300">Notable Achievements</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 p-6 rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start">
                  <div className={`w-12 h-12 bg-gradient-to-r ${achievement.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                    <achievement.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <div className="flex items-center mb-2">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {achievement.title}
                      </h4>
                      <span className="ml-2 px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium">
                        {achievement.highlight}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-900 to-purple-900 p-8 rounded-2xl text-white">
          <h3 className="text-2xl font-bold mb-8 text-center text-white">Career Highlights</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-300 mb-2">4+</div>
              <div className="text-sm text-blue-100">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-300 mb-2">10TB</div>
              <div className="text-sm text-purple-100">Data Migrated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">30%</div>
              <div className="text-sm text-blue-100">Efficiency Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-200 mb-2">3⭐</div>
              <div className="text-sm text-purple-100">CodeChef Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;