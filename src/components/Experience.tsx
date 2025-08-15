import React from "react";
import { Calendar, MapPin, ChevronRight } from "lucide-react";

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Full-Stack Developer",
      company: "TSIM Communication Services Pvt. Ltd.",
      location: "Mumbai, India",
      period: "Jan 2024 – Present",
      type: "Full-time",
      achievements: [
        "Developed and maintained the Instasim eSIM app using Flutter (frontend) and Python (backend), contributing to a 20% increase in customer satisfaction",
        "Designed and implemented scalable PostgreSQL schemas with optimized SQL queries for business-critical features",
        "Built RESTful APIs using Express.js and Node.js to support mobile and web integrations",
        "Integrated payment gateways (PayU, Razorpay) and managed secure transaction flows for global users",
        "Integrated Google Analytics to track user behavior and drive data-informed product decisions",
        "Successfully deployed updates to both Google Play Store and Apple App Store regularly",
        "Integrated APIs from global eSIM vendors (Airalo, eSIMGo, RoamWifi, BICS, Tuge) for authentication and SIM provisioning",
      ],
      skills: [
        "Flutter",
        "Python",
        "PostgreSQL",
        "Express.js",
        "Node.js",
        "MongoDB",
        "Firebase",
        "Google Analytics",
      ],
    },
    {
      title: "Software Developer Engineer",
      company: "WarmConnect Internet Services Pvt. Ltd.",
      location: "Mumbai, India",
      period: "June 2023 – Jan 2024",
      type: "Full-time",
      achievements: [
        "Developed Warmbiz app from scratch using Flutter and Python with features like two-stage dialing and selfie attendance",
        "Integrated intelligent call notes to improve communication workflows for users",
        "Optimized backend functionality with C++ and Python, reducing processing delays by 15%",
        "Improved admin dashboard usability, boosting operational efficiency by 30%",
        "Managed and optimized PostgreSQL database operations for efficient data handling",
      ],
      skills: ["Flutter", "Python", "C++", "PostgreSQL", "UI/UX Design"],
    },
    {
      title: "Associate Software Developer",
      company: "LTIMINDTREE",
      location: "Mumbai, India",
      period: "June 2021 – June 2023",
      type: "Full-time",
      achievements: [
        "Automated system monitoring and reduced manual efforts through Python scripting",
        "Improved data migration efficiency by securely transferring 10TB of data using shell scripting",
        "Developed automation scripts for routine tasks, ensuring effective data management and backup operations",
        "Worked extensively with Linux environments and Oracle databases to enhance system performance",
      ],
      skills: [
        "Python",
        "Shell Scripting",
        "Linux",
        "Oracle Database",
        "Automation",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto transition-colors duration-300">
            Professional journey showcasing growth and expertise in full-stack
            development
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-16 last:mb-0">
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>

              {/* Content */}
              <div
                className={`ml-16 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"
                }`}
              >
                <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                      {exp.type}
                    </span>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {exp.period}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {exp.title}
                  </h3>
                  <h4 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-2">
                    {exp.company}
                  </h4>

                  <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
                    <MapPin className="w-4 h-4 mr-1" />
                    {exp.location}
                  </div>

                  <ul className="space-y-2 mb-6">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start">
                        <ChevronRight className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-xs font-medium hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-300 transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
