import React from 'react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      degree: 'M.Sc. in Information Technology',
      school: 'S.I.E.S College of Science, Commerce, & Arts',
      period: '2021 – 2023',
      grade: 'CGPA: 9.71',
      location: 'Mumbai, India',
      type: 'Master\'s Degree',
      description: 'Specialized in advanced software development, database management, and emerging technologies.'
    },
    {
      degree: 'B.Sc. in Information Technology',
      school: 'K.J. Somaiya College of Science and Commerce',
      period: '2018 – 2021',
      grade: 'CGPA: 8.78',
      location: 'Mumbai, India',
      type: 'Bachelor\'s Degree',
      description: 'Foundation in computer science, programming, and software engineering principles.'
    },
    {
      degree: 'HSC, Science',
      school: 'G.N Khalsa College of Science, Commerce & Arts',
      period: '2016 – 2018',
      grade: 'Marks: 78%',
      location: 'Mumbai, India',
      type: 'Higher Secondary',
      description: 'Focused on science subjects with emphasis on mathematics and computer science.'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto transition-colors duration-300">
            Academic journey that laid the foundation for my professional career in technology
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

          {education.map((edu, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>

              {/* Content */}
              <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                      {edu.type}
                    </span>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {edu.period}
                    </div>
                  </div>

                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {edu.degree}
                      </h3>
                      <h4 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-2">{edu.school}</h4>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <MapPin className="w-4 h-4 mr-1" />
                      {edu.location}
                    </div>
                    <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold">
                      <Award className="w-4 h-4 mr-1" />
                      {edu.grade}
                    </div>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Academic Achievements */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center transition-colors duration-300">Academic Highlights</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Excellent CGPA</h4>
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">9.71</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Master's Degree Performance</p>
            </div>

            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Strong Foundation</h4>
              <p className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">8.78</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Bachelor's Degree CGPA</p>
            </div>

            <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Research Paper</h4>
              <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">Darwin 2020</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">COVID-19 ML Prediction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;