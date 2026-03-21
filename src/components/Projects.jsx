import { motion } from "framer-motion"

export default function Projects() {
  const projects = [
    {
      title: "Disease Prediction System",
      tech: ["Python", "Machine Learning", "Streamlit"],
      desc: "ML-based system using SVM to predict diseases with an interactive UI.",
      github: "https://github.com/divyanshurajnirala",
      live: "#",
    },
    {
      title: "Online Test App",
      tech: ["Java", "Spring Boot"],
      desc: "Platform for creating and evaluating online tests with real-time feedback.",
      github: "https://github.com/divyanshurajnirala",
      live: "#",
    },
    {
      title: "Online Book Store",
      tech: ["HTML", "CSS", "JavaScript"],
      desc: "Responsive bookstore UI with animations and interactive elements.",
      github: "https://github.com/divyanshurajnirala",
      live: "#",
    },
    {
      title: "Personal Portfolio",
      tech: ["React", "Tailwind CSS", "Framer Motion", "Email JS"],
      desc: "A modern and responsive portfolio website showcasing my projects, skills, and hobbies with smooth animations and premium UI design.",
      github: "https://github.com/divyanshurajnirala",
      live: "#",
    },
  ]

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">

      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text"
      >
        Projects
      </motion.h2>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative group bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:border-purple-500/40 hover:scale-[1.03] transition duration-300"
          >

            {/* 🔥 GLOW EFFECT */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 blur-2xl transition duration-300"></div>

            {/* CONTENT */}
            <div className="relative z-10">

              {/* TITLE */}
              <h3 className="text-xl font-semibold mb-3">
                {project.title}
              </h3>

              {/* TECH TAGS */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((item, i) => (
                  <span
                    key={i}
                    className="text-sm px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full border border-purple-500/20"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* DESCRIPTION */}
              <p className="text-gray-400 text-sm mb-6">
                {project.desc}
              </p>

              {/* BUTTONS */}
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  className="px-4 py-2 border border-gray-600 rounded-lg text-sm hover:bg-white hover:text-black transition"
                >
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  className="px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-sm hover:opacity-90 transition"
                >
                  Live Demo
                </a>
              </div>

            </div>
          </motion.div>
        ))}
      </div>
      <p className="mt-6 text-sm italic text-center text-gray-500">
        *Live Demo is not working as of now.
      </p>
    </section>
  )
}