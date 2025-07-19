'use client';

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";

export default function Contact() {
  const contactInfo = [
    {
      icon: <FiMail />,
      title: 'Email',
      value: 'subhayanp.cse.jisu22@gmail.com',
      link: 'mailto:subhayanp.cse.jisu22@gmail.com'
    },
    {
      icon: <FiPhone />,
      title: 'Phone',
      value: '+91 7003039778',
      link: 'tel:+917003039778'
    },
    {
      icon: <FaLinkedin />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/subho4104062003',
      link: 'https://www.linkedin.com/in/subho4104062003'
    },
    {
      icon: <FaGithub />,
      title: 'GitHub',
      value: 'github.com/Subho4156',
      link: 'https://github.com/Subho4156'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Let&apos;s Work Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-6">
            Ready to bring your ideas to life? Let&apos;s connect and create something amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl text-center hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 text-blue-600 dark:text-blue-400 flex justify-center items-center">
                {contact.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {contact.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {contact.value}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}