import React from "react";
import { Code, Heart, Linkedin } from "lucide-react";
import { SiX, SiGithub } from "@icons-pack/react-simple-icons";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Portfolio</span>
            </div>
            <p className="text-gray-300 dark:text-gray-400 leading-relaxed mb-4">
              Full-Stack Developer passionate about creating scalable web and
              mobile applications that make a difference in people's lives.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Amit-exe"
                target="_blank"
                className="w-10 h-10 bg-gray-800 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
              >
                <SiGithub className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/amit-kushwaha-sde/"
                target="_blank"
                className="w-10 h-10 bg-gray-800 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/ak190732"
                target="_blank"
                className="w-10 h-10 bg-gray-800 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors duration-300"
              >
                <SiX className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                "About",
                "Experience",
                "Skills",
                "Education",
                "Achievements",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(
                        item.toLowerCase()
                      );
                      if (element)
                        element.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-gray-300 dark:text-gray-400 hover:text-blue-400 dark:hover:text-purple-400 transition-colors duration-300"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "Node.js",
                "Python",
                "Flutter",
                "PostgreSQL",
                "MongoDB",
                "AWS",
                "Docker",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-gray-800 dark:bg-gray-700 text-gray-300 dark:text-gray-400 rounded text-sm hover:bg-blue-600 hover:text-white transition-colors duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-700 pt-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <span className="text-gray-300 dark:text-gray-400">Made with</span>
            <Heart className="w-4 h-4 text-red-500 mx-2 animate-pulse" />
            <span className="text-gray-300 dark:text-gray-400">
              by a passionate developer
            </span>
          </div>
          <p className="text-gray-400 dark:text-gray-500 text-sm">
            © 2025 Portfolio. All rights reserved. | Built with React,
            TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
