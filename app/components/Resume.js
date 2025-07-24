"use client";

export default function Resume() {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      school: "JIS University",
      period: "2026",
      description: "CGPA: 8.63 [Till 6th Semester]",
    },
    {
      degree: "CBSE Class 12",
      school: "Kendriya Vidyalaya IIM Joka",
      period: "2021",
      description: "Percentage: 71%",
    },
    {
      degree: "CBSE Class 10",
      school: "Kendriya Vidyalaya IIM Joka",
      period: "2019",
      description: "Percentage: 88.8%",
    },
  ];

  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Resume
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-6">
            My educational background and resume.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 flex items-center">
            <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm mr-3">
              🎓
            </span>
            Education
          </h3>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {edu.degree}
                  </h4>
                  <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                    {edu.period}
                  </span>
                </div>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                  {edu.school}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>

          {/* Download Resume Button */}
          <a
            href="https://drive.google.com/file/d/1mKPsAM4FR9ma68Gd7vykCmQrSJ2fNVtF/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="mt-8">
              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span>Download Resume</span>
              </button>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
