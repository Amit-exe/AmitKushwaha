import React from "react";
import { Code, Database, Smartphone, Terminal } from "lucide-react";

const About: React.FC = () => {
  const highlights = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "Expertise in React.js, Node.js, and modern web technologies",
    },
    {
      icon: Database,
      title: "Database Design",
      description: "PostgreSQL, MongoDB, and optimized data architecture",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Flutter development for cross-platform mobile solutions",
    },
    {
      icon: Terminal,
      title: "BackEnd",
      description: "Rest API, FastAPI, and Scalable System design",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
              Passionate Full-Stack Developer
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300">
              With 4+ years of experience in the software industry, I specialize
              in building scalable web and mobile applications. My journey
              started at LTIMindTree and has evolved through various challenging
              roles, each adding to my expertise in modern development
              practices.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300">
              Currently working at TSIM Communication Services, where I develop
              and maintain the Instasim eSIM app using Flutter and Python,
              contributing to a 20% increase in customer satisfaction through
              performance optimizations and feature enhancements.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed transition-colors duration-300">
              I'm passionate about clean code, user experience, and staying
              updated with the latest technologies. I believe in continuous
              learning and applying best practices to deliver exceptional
              software solutions.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {[
                "React.js",
                "Node.js",
                "Python",
                "Flutter",
                "PostgreSQL",
                "MongoDB",
                "AWS",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="group p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-xl hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <highlight.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                  {highlight.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed transition-colors duration-300">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
