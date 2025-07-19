'use client';

export default function Skills() {
  const skills = [
    { icon: '💻', title: 'Frontend Development', description: 'React, JavaScript, TypeScript, Next.js, and Tailwind CSS' },
    { icon: '⚡', title: 'Backend Development', description: 'Node.js, Express, MongoDB, and Convex' },
    { icon: '🔧', title: 'Tools & Workflow', description: 'Git, Webpack, Vite, and modern development tools' }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {skill.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}