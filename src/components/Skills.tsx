import React from "react";
import { Code2, Database, Smartphone, Cloud, Wrench } from "lucide-react";

// Import technology logos (you'll need to install react-icons or add your own images)
import {
  SiJavascript,
  SiReact,
  SiHtml5,
  SiTailwindcss,
  SiFlutter,
  SiNodedotjs,
  SiPython,
  SiExpress,
  SiUml,
  SiPostgresql,
  SiMongodb,
  SiInternetcomputer,
  SiAxios,
  SiGithub,
  SiLinux,
  SiXcode,
  SiPostman,
  SiGoogleanalytics,
} from "@icons-pack/react-simple-icons";

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      icon: Code2,
      color: "from-blue-500 to-blue-600",
      skills: [
        {
          name: "JavaScript",
          icon: <SiJavascript className="w-6 h-6 text-yellow-400" />,
        },
        {
          name: "React.js",
          icon: <SiReact className="w-6 h-6 text-blue-500" />,
        },
        { name: "HTML", icon: <SiHtml5 className="w-6 h-6 text-orange-500" /> },
        {
          name: "CSS",
          icon: <SiTailwindcss className="w-6 h-6 text-blue-600" />,
        },
      ],
    },
    {
      title: "Backend Technologies",
      icon: Database,
      color: "from-purple-500 to-purple-600",
      skills: [
        {
          name: "Node.js",
          icon: <SiNodedotjs className="w-6 h-6 text-green-500" />,
        },
        {
          name: "Python",
          icon: <SiPython className="w-6 h-6 text-blue-300" />,
        },
        {
          name: "Express.js",
          icon: (
            <SiExpress className="w-6 h-6 text-gray-800 dark:text-gray-200" />
          ),
        },
        {
          name: "RestAPI",
          icon: (
            <SiAxios className="w-6 h-6 text-gray-800 dark:text-gray-200" />
          ),
        },
      ],
    },
    {
      title: "Databases",
      icon: Database,
      color: "from-blue-600 to-purple-500",
      skills: [
        {
          name: "PostgreSQL",
          icon: <SiPostgresql className="w-6 h-6 text-blue-700" />,
        },
        {
          name: "MongoDB",
          icon: <SiMongodb className="w-6 h-6 text-green-500" />,
        },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "from-purple-600 to-indigo-600",
      skills: [
        {
          name: "Git/GitHub",
          icon: (
            <SiGithub className="w-6 h-6 text-gray-800 dark:text-gray-200" />
          ),
        },
        {
          name: "Linux",
          icon: <SiLinux className="w-6 h-6 text-yellow-600" />,
        },
        {
          name: "Computer Network",
          icon: <SiInternetcomputer className="w-6 h-6 text-yellow-600" />,
        },
      ],
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      color: "from-blue-700 to-blue-800",
      skills: [
        {
          name: "Flutter",
          icon: <SiFlutter className="w-6 h-6 text-blue-400" />,
        },
        {
          name: "React Native",
          icon: <SiReact className="w-6 h-6 text-blue-500" />,
        },
      ],
    },
    {
      title: "Tools & Others",
      icon: Wrench,
      color: "from-purple-400 to-purple-600",
      skills: [
        {
          name: "Xcode",
          icon: <SiXcode className="w-6 h-6 text-blue-500" />,
        },
        {
          name: "Postman",
          icon: <SiPostman className="w-6 h-6 text-orange-500" />,
        },
        {
          name: "Google Analytics",
          icon: <SiGoogleanalytics className="w-6 h-6 text-blue-600" />,
        },
        {
          name: "UML Diagrams",
          icon: <SiUml className="w-6 h-6 text-blue-600" />,
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto transition-colors duration-300">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 p-6 rounded-xl hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-center mb-6">
                {/* <div
                  className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <category.icon className="w-6 h-6 text-white" />
                </div> */}
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white ml-4 transition-colors duration-300">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex flex-col items-center p-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="mb-2">{skill.icon}</div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technology Cloud Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center transition-colors duration-300">
            Technology Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              {
                name: "JavaScript",
                icon: <SiJavascript className="w-8 h-8 text-yellow-400" />,
              },
              {
                name: "React",
                icon: <SiReact className="w-8 h-8 text-blue-500" />,
              },
              {
                name: "Node.js",
                icon: <SiNodedotjs className="w-8 h-8 text-green-500" />,
              },
              {
                name: "Express.js",
                icon: (
                  <SiExpress className="w-8 h-8 text-gray-800 dark:text-gray-200" />
                ),
              },
              {
                name: "MongoDB",
                icon: <SiMongodb className="w-8 h-8 text-green-500" />,
              },
              {
                name: "HTML",
                icon: <SiHtml5 className="w-8 h-8 text-orange-500" />,
              },
              {
                name: "CSS",
                icon: <SiTailwindcss className="w-8 h-8 text-blue-600" />,
              },
              {
                name: "Git",
                icon: (
                  <SiGithub className="w-8 h-8 text-gray-800 dark:text-gray-200" />
                ),
              },
              {
                name: "Python",
                icon: <SiPython className="w-8 h-8 text-blue-300" />,
              },
              {
                name: "Flutter",
                icon: <SiFlutter className="w-8 h-8 text-blue-400" />,
              },
            ].map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                {tech.icon}
                <span className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
