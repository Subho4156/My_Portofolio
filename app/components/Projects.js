"use client";

export default function Projects() {
  const projects = [
    {
      title: "Athleo - AI Fitness Trainer Web App",
      description:
        "Athleo is an AI-powered fitness trainer web app that offers personalized workout and diet plans through an interactive voice assistant, helping users achieve their fitness goals with smart, real-time guidance.",
      image: "/project_1.png", // ✅ replace with your image path
      tags: ["Next.js", "Convex", "Clerk", "Gemini LLM", "Vapi"],
      Link: "https://athleo-your-own-ai-fitness-trainer.onrender.com/",
    },
    {
      title: "ChatLab - Smart Real-time Chat App",
      description:
        "ChatLab is a full-featured real-time chat app where users can message friends, create group chats, share media, start video calls, and interact with an AI assistant. It supports light/dark themes and is built with Next.js, Convex, Clerk, ZegoCloud, and CohereAI.",
      image: "/project_2.png",
      tags: ["Next.js", "Convex", "Clerk", "CohereAI", "ZegoCloud"],
      Link: "https://chatlab-smart-real-time-chat-application.onrender.com/",
    },
    {
      title: "MovieMania - Streaming Web App",
      description:
        "MovieMania — A full-stack Netflix clone with OTP authentication, trailer previews, and a responsive modern UI. It features a comprehensive movie database, user profiles, and a seamless streaming experience.",
      image: "/project_3.png",
      tags: ["React Vite", "Express", "MongoDB", "TMDB API", "Nodemailer"],
      Link: "https://moviemania-jhw9.onrender.com/",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.Link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200">
                    View Project →
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
