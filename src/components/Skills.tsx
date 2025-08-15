import React from 'react';
import { Code2, Database, Smartphone, Cloud, Wrench, BarChart } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend Technologies',
      icon: Code2,
      color: 'from-blue-500 to-blue-600',
      skills: [
        { name: 'JavaScript', level: 95 },
        { name: 'React.js', level: 92 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'Flutter', level: 88 },
        { name: 'Responsive Design', level: 85 }
      ]
    },
    {
      title: 'Backend Technologies',
      icon: Database,
      color: 'from-purple-500 to-purple-600',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Python', level: 88 },
        { name: 'Express.js', level: 85 },
        { name: 'Django', level: 80 },
        { name: 'REST APIs', level: 92 }
      ]
    },
    {
      title: 'Databases',
      icon: Database,
      color: 'from-blue-600 to-purple-500',
      skills: [
        { name: 'PostgreSQL', level: 90 },
        { name: 'MongoDB', level: 85 },
        { name: 'Oracle Database', level: 75 },
        { name: 'Firebase', level: 80 },
        { name: 'SQL Optimization', level: 85 }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-purple-600 to-indigo-600',
      skills: [
        { name: 'AWS', level: 80 },
        { name: 'Docker', level: 75 },
        { name: 'Git/GitHub', level: 90 },
        { name: 'CI/CD', level: 78 },
        { name: 'Linux', level: 82 }
      ]
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      color: 'from-blue-700 to-blue-800',
      skills: [
        { name: 'Flutter', level: 88 },
        { name: 'Cross-platform', level: 85 },
        { name: 'App Store Deployment', level: 80 },
        { name: 'Mobile UI/UX', level: 82 }
      ]
    },
    {
      title: 'Tools & Others',
      icon: Wrench,
      color: 'from-purple-400 to-purple-600',
      skills: [
        { name: 'Visual Studio Code', level: 95 },
        { name: 'Postman', level: 88 },
        { name: 'Google Analytics', level: 80 },
        { name: 'Agile/Scrum', level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">Technical Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto transition-colors duration-300">
            A comprehensive overview of my technical expertise across various technologies and frameworks
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 p-6 rounded-xl hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white ml-4 transition-colors duration-300">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div
                        className={`h-2 bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width: `${skill.level}%`,
                          animation: `skillBar 2s ease-out ${skillIndex * 0.1}s both`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Programming Languages Statistics */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center transition-colors duration-300">Most Used Technologies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'JavaScript', percentage: 35 },
              { name: 'Python', percentage: 30 },
              { name: 'Dart/Flutter', percentage: 20 },
              { name: 'SQL', percentage: 15 }
            ].map((lang, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 mx-auto mb-3 relative">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="40"
                      cy="40"
                      r="35"
                      stroke="currentColor"
                      strokeWidth="6"
                      fill="transparent"
                      className="text-gray-200 dark:text-gray-600"
                    />
                    <circle
                      cx="40"
                      cy="40"
                      r="35"
                      stroke="currentColor"
                      strokeWidth="6"
                      fill="transparent"
                      strokeDasharray={`${2 * Math.PI * 35}`}
                      strokeDashoffset={`${2 * Math.PI * 35 * (1 - lang.percentage / 100)}`}
                      className="text-blue-600 dark:text-purple-400 transition-all duration-1000 ease-out"
                      style={{
                        animation: `drawCircle 2s ease-out ${index * 0.2}s both`
                      }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold text-gray-900 dark:text-white">{lang.percentage}%</span>
                  </div>
                </div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{lang.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;