import { useEffect } from "react"
import Hero from "../components/Hero"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Experience from "../components/Experience"
import Education from "../components/Education"
import Footer from "../components/Footer"
import CyberBackground from "../components/CyberBackground"
import Loader from "../components/Loader"

function Home() {

  // cursor glow
  useEffect(() => {
    const glow = document.querySelector(".cursor-glow") as HTMLElement

    const move = (e: MouseEvent) => {
      if (glow) {
        glow.style.left = e.clientX + "px"
        glow.style.top = e.clientY + "px"
      }
    }

    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [])

  return (
    <div className="min-h-screen text-white relative overflow-hidden bg-[#050507]">

      {/* LOADER */}
      <Loader />

      {/* CYBER BACKGROUND */}
      <CyberBackground />

      {/* CURSOR GLOW */}
      <div className="cursor-glow"></div>

      {/* NAVBAR */}
      <nav className="navbar">
        <h1 className="text-gradient font-bold text-lg">
          DatVu.dev
        </h1>

        <div className="flex items-center gap-6">
          <a href="#hero">Home</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
        </div>
      </nav>

      {/* SECTIONS */}
      <section id="hero"><Hero /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="experience"><Experience /></section>
      <section id="education"><Education /></section>

      {/* CONTACT */}
      <section className="section text-center">
        <h2 className="text-4xl font-black mb-6 text-gradient">
          Let’s Build Something 🚀
        </h2>

        <p className="text-zinc-400 mb-8">
          Freelance / AI / Web App — mình nhận hết 😎
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a href="mailto:datvu0198@gmail.com" className="btn-future">
            📧 Email
          </a>

          <a
            href="https://github.com/datvu0198-ctrl/DatVu"
            target="_blank"
            className="glass px-6 py-3 rounded-xl"
          >
            GitHub
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Home