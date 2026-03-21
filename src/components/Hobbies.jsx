import { motion } from "framer-motion"

export default function Hobbies() {
  const hobbies = [
  {
    title: "🏍️ Motorcycling",
    desc: "Long rides and Insane Love for Bikes.",
    link: "https://www.instagram.com/drn.wtff/",
    label: "View Instagram",
    color: "pink"
  },
  {
    title: "📸 Content Creation",
    desc: "Creating engaging motorcycle videos.",
    link: "https://www.youtube.com/@drnwtff",
    label: "Watch YouTube",
    color: "red"
  },
  {
    title: "🎮 Gaming",
    desc: "Competitive gaming & community.",
    link: "https://discord.gg/MBvYDhS6qZ",
    label: "Join Discord",
    color: "indigo"
  },
  {
    title: "💻 Tech Exploration",
    desc: "Exploring new tech & development.",
    link: "https://github.com/divyanshurajnirala",
    label: "View GitHub",
    color: "purple"
  },
]

  return (
    <section id="hobbies" className="py-24 px-6 max-w-6xl mx-auto text-center ">
      
      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text"
      >
        Hobbies
      </motion.h2>

      {/* GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {hobbies.map((hobby, i) => (
          <motion.div
  key={i}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: i * 0.1 }}
  className="relative p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md hover:scale-105 hover:border-purple-500/40 transition duration-300"
>
  <h3 className="text-lg font-semibold mb-2">
    {hobby.title}
  </h3>

  <p className="text-gray-400 text-sm mb-4">
    {hobby.desc}
  </p>

  {/* 🔥 CLICKABLE LINK */}
  <a
    href={hobby.link}
    target="_blank"
    className={`text-sm font-medium ${
      hobby.color === "pink" && "text-pink-400 hover:text-pink-300"
    } ${
      hobby.color === "red" && "text-red-400 hover:text-red-300"
    } ${
      hobby.color === "indigo" && "text-indigo-400 hover:text-indigo-300"
    } ${
      hobby.color === "purple" && "text-purple-400 hover:text-purple-300"
    } transition`}
  >
    {hobby.label} →
  </a>
</motion.div>
        ))}
      </div>

    </section>
  )
}