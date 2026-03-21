import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Hobbies from "./components/Hobbies"
import Contact from "./components/Contact"
import { Toaster } from "react-hot-toast"
import Footer from "./components/Footer"

import { useEffect, useState } from "react"

function App() {
  const [pos, setPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [])

  return (
    <>
      {/* 🔥 CURSOR GLOW */}
      <div
        className="fixed top-0 left-0 w-72 h-72 bg-purple-500/30 blur-3xl rounded-full pointer-events-none z-0"
        style={{
          transform: `translate(${pos.x - 150}px, ${pos.y - 150}px)`
        }}
      />
      <Toaster position="top-right" />

      {/* 🔥 MAIN CONTENT */}
      <div className="relative z-10 bg-black text-white min-h-screen bg-gradient-to-br from-black via-black to-purple-950">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Hobbies />
        <Contact />
        <Footer />
        
      </div>
    </>
  )
}

export default App