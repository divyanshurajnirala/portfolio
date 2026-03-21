import { motion } from "framer-motion"

export default function About() {
  const skills = [
  {
    title: "Languages",
    items: "Java, Python, JavaScript",
  },
  {
    title: "Frameworks",
    items: "React, Spring Boot, Machine Learning",
  },
  {
    title: "Tools",
    items: "Git, GitHub, Google Cloud Platform",
  },
  {
    title: "Databases",
    items: "MongoDB (NoSQL), MySQL (Relational)",
  },
  {
    title: "Libraries",
    items: "NumPy, Pandas, Matplotlib",
  },
  {
    title: "Core Concepts",
    items:
      "Data Structures & Algorithms, OOP, Operating Systems, Software Engineering",
  },
]

  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">

      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-12 text-center"
      >
        About <span className="text-purple-400">Me</span>
      </motion.h2>

      {/* MAIN CONTENT */}
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-300 leading-relaxed mb-6">
            I’m a{" "}
            <span className="text-purple-400 font-semibold">
              Full Stack Developer
            </span>{" "}
            passionate about building{" "}
            <span className="text-blue-400 font-semibold">
              scalable web applications
            </span>{" "}
            and intelligent systems.
          </p>

          <p className="text-gray-400 leading-relaxed">
            I specialize in{" "}
            <span className="text-purple-400">React</span>,{" "}
            <span className="text-blue-400">Java</span>, and{" "}
            <span className="text-purple-400">Spring Boot</span>.  
            Alongside development, I also create motorcycle content and love exploring new technologies.
          </p>
        </motion.div>

        {/* RIGHT STATS */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-6"
        >
          {[
            { label: "Projects", value: "10+" },
            { label: "Technologies", value: "10+" },
            { label: "Experience", value: "Fresher" },
            { label: "Focus", value: "Full Stack" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl hover:scale-105 transition"
            >
              <h3 className="text-2xl font-bold text-purple-400">
                {item.value}
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* 🔥 SKILLS SECTION (ADDED BACK) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-20 grid md:grid-cols-3 gap-8"
      >
        {skills.map((skill, i) => (
          <div
            key={i}
            className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 hover:scale-105 hover:border-purple-500/40 transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-3 text-purple-400">
              {skill.title}
            </h3>
            <p className="text-gray-400 text-sm">
              {skill.items}
            </p>
          </div>
        ))}
      </motion.div>

    </section>
  )
}