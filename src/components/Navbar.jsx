import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function Navbar() {
  const [active, setActive] = useState("home")
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const sections = ["home", "about", "projects", "hobbies", "contact"]

    const handleScroll = () => {
      let current = "home"

      sections.forEach((id) => {
        const section = document.getElementById(id)
        if (section) {
          const scrollPosition = window.scrollY + window.innerHeight / 3
          if (scrollPosition >= section.offsetTop) {
            current = id
          }
        }
      })

      setActive(current)
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const linkStyle = (id) =>
    `relative cursor-pointer transition ${
      active === id ? "text-white" : "text-gray-400"
    }`

  const navItems = ["home", "about", "projects", "hobbies", "contact"]

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full z-50 px-6 md:px-10 py-4 backdrop-blur-md transition-all duration-300
        shadow-[0_4px_30px_rgba(168,85,247,0.15)]
        ${
          scrolled
            ? "bg-black/60 shadow-[0_4px_30px_rgba(168,85,247,0.25)]"
            : "bg-black/30"
        }`}
      >
        <div className="flex justify-between items-center">
          
          {/* LOGO */}
          <h1 className="text-white font-bold text-xl tracking-wide">
            DRN
          </h1>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-8 text-gray-400">
            {navItems.map((item) => (
              <a key={item} href={`#${item}`} className={linkStyle(item)}>
                {item.charAt(0).toUpperCase() + item.slice(1)}

                {/* underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] w-full bg-white transition-transform duration-300 ${
                    active === item ? "scale-x-100" : "scale-x-0"
                  } origin-left`}
                />
              </a>
            ))}
          </div>

          {/* MOBILE HAMBURGER */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white text-2xl"
            >
              ☰
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 flex flex-col items-center gap-6 bg-black/90 py-6 rounded-xl
            shadow-[0_4px_30px_rgba(168,85,247,0.2)]"
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-white transition"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </motion.div>
        )}
      </motion.nav>
    </>
  )
}