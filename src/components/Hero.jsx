import { motion } from "framer-motion"
import profile from "../assets/profile.jpg"

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6"
    >

      {/* HEADING */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold leading-tight"
      >
        Hi, I’m{" "}
        <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
          Divyanshu Raj Nirala
        </span>
      </motion.h1>

      {/* IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-8 relative flex justify-center"
      >
        <img
          src={profile}
          alt="profile"
          className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover border-4 border-gray-800"
        />

        {/* glow below */}
        <div className="absolute w-60 h-60 bg-purple-500/20 blur-3xl rounded-full -z-10"></div>
      </motion.div>

      {/* ROLE */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-6 text-gray-300 text-lg"
      >
        Full Stack Developer | Java | Python | React
      </motion.h2>

      {/* DESCRIPTION */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-4 text-gray-400 max-w-xl leading-relaxed"
      >
        I build scalable web applications and intelligent systems using modern
        technologies like React, Spring Boot, and Machine Learning.
      </motion.p>

      {/* BUTTONS */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-8 flex flex-wrap justify-center gap-4"
      >

        {/* View Projects */}
        <a
          href="#projects"
          className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-white font-medium hover:opacity-90 hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition"
        >
          View Projects
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/divyanshurajnirala/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg text-white font-medium hover:opacity-90 hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition"
        >
          LinkedIn
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/divyanshurajnirala"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 border border-gray-600 rounded-lg text-white hover:bg-white hover:text-black transition"
        >
          GitHub
        </a>

        {/* Resume */}
        <a
          href="/resume.pdf"
          target="_blank"
          className="px-6 py-3 border border-purple-500 text-purple-400 rounded-lg hover:bg-purple-500 hover:text-white transition"
        >
          View Resume
        </a>

      </motion.div>

      {/* SMALL LINE */}
      <p className="mt-6 text-sm italic text-gray-500">
        This portfolio itself is made on React and Tailwind CSS
      </p>

    </section>
  )
}