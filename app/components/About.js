"use client";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Hello, I&apos;m Subhayan Paul
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I&apos;m a Full Stack Web Developer with a strong command of the
              MERN stack and Next.js, dedicated to building fast, scalable, and
              modern web applications. I&apos;ve developed several real-world
              projects that bring together intuitive user interfaces with
              powerful backend systems. I also have a solid foundation in C++,
              with a deep understanding of Data Structures and Algorithms, which
              enhances my ability to write optimized and efficient code. Whether
              it&apos;s crafting responsive frontends or architecting robust
              APIs, I enjoy turning ideas into impactful digital solutions.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              When I&apos;m not coding, I enjoy watching anime and exploring new
              technologies—always looking to learn something new while keeping
              things fun and inspiring.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              {[
                "C++",
                "React",
                "Next.js",
                "JavaScript",
                "TypeScript",
                "Node.js",
                "MongoDB",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="w-80 h-80 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl transform rotate-6"></div>
              <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 flex items-center justify-center">
                  <img
                    src="/my_photo.png"
                    alt="Developer Avatar"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
