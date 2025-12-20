import React from 'react';
import { User, Briefcase, GraduationCap, Target } from 'lucide-react';
import { portfolioData } from '../data';
import SkillCard from '../components/SkillCard';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mb-4">
            <User className="w-5 h-5 mr-2" />
            <span className="font-medium">About Me</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Journey & Expertise
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Combining web development expertise with AI/ML knowledge to build intelligent solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Introduction */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white dark:bg-dark-card rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Who I Am
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  I'm a passionate MERN Stack Developer with a strong interest in Artificial Intelligence 
                  and Machine Learning. My journey in tech started with web development, and I've since 
                  expanded my expertise to include AI/ML integration and computer vision.
                </p>
                <p>
                  What drives me is the challenge of bridging traditional web interfaces with intelligent 
                  systems. I believe that the future of web development lies in creating applications 
                  that not only look good but also think intelligently.
                </p>
                <p>
                  Currently, I'm focused on building projects that demonstrate the intersection of 
                  web technologies and AI, while continuously learning and staying updated with the 
                  latest advancements in both fields.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="bg-white dark:bg-dark-card rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Skills & Expertise
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {portfolioData.skills.map((skill, index) => (
                  <SkillCard key={index} skill={skill} />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Experience & Education */}
          <div className="space-y-8">
            {/* Experience */}
            <div className="bg-white dark:bg-dark-card rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <Briefcase className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-3" />
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Experience
                </h3>
              </div>
              <div className="space-y-6">
                {portfolioData.experience.map((exp) => (
                  <div key={exp.id} className="relative pl-6 border-l border-gray-200 dark:border-gray-700">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-600 rounded-full"></div>
                    <div className="mb-2">
                      <h4 className="font-bold text-gray-800 dark:text-white">{exp.title}</h4>
                      <p className="text-sm text-primary-600 dark:text-primary-400">{exp.company}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</p>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="bg-white dark:bg-dark-card rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <GraduationCap className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-3" />
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Education
                </h3>
              </div>
              <div className="space-y-6">
                {portfolioData.education.map((edu) => (
                  <div key={edu.id} className="relative pl-6 border-l border-gray-200 dark:border-gray-700">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-600 rounded-full"></div>
                    <div>
                      <h4 className="font-bold text-gray-800 dark:text-white">{edu.degree}</h4>
                      <p className="text-sm text-primary-600 dark:text-primary-400">{edu.institution}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{edu.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Goals */}
            <div className="bg-white dark:bg-dark-card rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <Target className="w-6 h-6 text-primary-600 dark:text-primary-400 mr-3" />
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Goals
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-600 dark:text-gray-300">
                    Master advanced AI/ML concepts and their practical applications
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-600 dark:text-gray-300">
                    Contribute to open-source projects in both web dev and AI domains
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-600 dark:text-gray-300">
                    Build innovative products that solve real-world problems
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-600 dark:text-gray-300">
                    Mentor aspiring developers entering the AI/ML field
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;