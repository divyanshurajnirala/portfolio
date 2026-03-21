import { motion } from "framer-motion"
import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import toast from "react-hot-toast"

// ✅ INIT EMAILJS (VERY IMPORTANT)
// emailjs.init("IjGozQ-3qDp5bh6iF")

export default function Contact() {
  const form = useRef()
  const [loading, setLoading] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .sendForm(
        "keyframestudios",     // ✅ your service ID
        "template_unbgwul",    // ✅ your template ID
        form.current,
        "_GQZWbgSblFdMrm2X"
      )
      .then(() => {
        toast.success("Message sent successfully 🚀")
        form.current.reset()
      })
      .catch((error) => {
        console.log("ERROR:", error)
        toast.error("Failed to send message ❌")
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <section
      id="contact"
      className="py-24 px-6 max-w-3xl mx-auto text-center"
    >
      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text"
      >
        Contact Me
      </motion.h2>

      {/* DESCRIPTION */}
      <p className="text-gray-400 mb-10 max-w-xl mx-auto">
        I’m open to internships, collaborations, and freelance work.
        Feel free to connect with me or send a message below.
      </p>

      {/* SOCIAL LINKS */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <a
          href="mailto:keyframestudios.work@gmail.com"
          className="px-5 py-2 border border-green-500 text-green-400 rounded-lg hover:bg-green-500 hover:text-white transition"
        >
          Email
        </a>

        <a
          href="https://www.linkedin.com/in/divyanshurajnirala/"
          target="_blank"
          className="px-5 py-2 border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500 hover:text-white transition"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/divyanshurajnirala"
          target="_blank"
          className="px-5 py-2 border border-gray-400 text-gray-300 rounded-lg hover:bg-white hover:text-black transition"
        >
          GitHub
        </a>

        <a
          href="https://www.instagram.com/drn.wtff/"
          target="_blank"
          className="px-5 py-2 border border-pink-500 text-pink-400 rounded-lg hover:bg-pink-500 hover:text-white transition"
        >
          Instagram
        </a>

        <a
          href="https://www.youtube.com/@drnwtff"
          target="_blank"
          className="px-5 py-2 border border-red-500 text-red-400 rounded-lg hover:bg-red-500 hover:text-white transition"
        >
          YouTube
        </a>

        <a
          href="https://discord.gg/MBvYDhS6qZ"
          target="_blank"
          className="px-5 py-2 border border-indigo-500 text-indigo-400 rounded-lg hover:bg-indigo-500 hover:text-white transition"
        >
          Discord
        </a>
      </div>

      {/* CONTACT FORM */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 space-y-6 text-left"
      >
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="w-full p-3 rounded-lg bg-black/50 border border-gray-700 focus:border-purple-500 outline-none"
        />

        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          className="w-full p-3 rounded-lg bg-black/50 border border-gray-700 focus:border-purple-500 outline-none"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          className="w-full p-3 rounded-lg bg-black/50 border border-gray-700 focus:border-purple-500 outline-none"
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-lg font-semibold transition ${
            loading
              ? "bg-gray-700 cursor-not-allowed"
              : "bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90"
          }`}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  )
}