import React, { useEffect, useState } from "react";
import { ChevronDown, Download, Linkedin } from "lucide-react";
import ParticleBackground from "./ParticleBackground";
import { SiX, SiGithub } from "@icons-pack/react-simple-icons";

const Hero: React.FC = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const roles = [
    "Full-Stack Developer",
    "React.js Expert",
    "Python Developer",
    "Mobile App Developer",
  ];

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let charIndex = 0;
    let isTyping = true;

    const typeInterval = setInterval(
      () => {
        if (isTyping) {
          if (charIndex < currentRole.length) {
            setDisplayedText(currentRole.substring(0, charIndex + 1));
            charIndex++;
          } else {
            isTyping = false;
            setTimeout(() => {
              isTyping = false;
            }, 2000);
          }
        } else {
          if (charIndex > 0) {
            setDisplayedText(currentRole.substring(0, charIndex - 1));
            charIndex--;
          } else {
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
            isTyping = true;
          }
        }
      },
      isTyping ? 100 : 50
    );

    return () => clearInterval(typeInterval);
  }, [currentRoleIndex]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 transition-colors duration-300"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <ParticleBackground />
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-blue-200 dark:bg-blue-800 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob"></div>
        <div className="absolute -bottom-32 -left-40 w-80 h-80 bg-purple-200 dark:bg-purple-800 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute top-32 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-indigo-300 dark:bg-indigo-700 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              a Developer
            </span>
          </h1>

          <div className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-8 h-12 transition-colors duration-300">
            <span className="font-semibold">{displayedText}</span>
            <span className="animate-blink text-blue-600 dark:text-blue-400">
              |
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={() => {
                const link = document.createElement("a");
                link.href =
                  "https://drive.google.com/uc?export=download&id=1mcOXI38nruF5pIdrpL-YIpqANGqpwxtz";
                link.download = "Amit_Kushwaha_Resume.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center space-x-2"
            >
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              <span>Download Resume</span>
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-full font-semibold text-lg hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 transform hover:-translate-y-1 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>

          <div className="flex items-center justify-center space-x-6">
            <a
              href="https://github.com/Amit-exe"
              target="_blank"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group"
            >
              <SiGithub className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
            </a>
            <a
              href="https://www.linkedin.com/in/amit-kushwaha-sde/"
              target="_blank"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group"
            >
              <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
            </a>
            <a
              href="https://x.com/ak190732"
              target="_blank"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group"
            >
              <SiX className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-gray-400 dark:text-gray-500" />
      </div>
    </section>
  );
};

export default Hero;
