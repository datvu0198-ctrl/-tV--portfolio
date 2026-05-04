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

  useEffect(() => {
    if (window.innerWidth < 768) return

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

      <Loader />
      <CyberBackground />

      {/* cursor */}
      <div className="cursor-glow hidden md:block"></div>

      {/* NAVBAR */}
      <nav
        className="
          fixed top-0 left-0 w-full z-50
          flex justify-between items-center
          px-4 md:px-10 py-4
          bg-black/40 backdrop-blur-md
        "
      >
        <h1 className="text-gradient font-bold text-sm md:text-lg">
          DatVu.dev
        </h1>

        <div className="hidden md:flex items-center gap-6">
          <a href="#hero">Home</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
        </div>
      </nav>

      {/* CONTENT */}
      <div className="pt-16 md:pt-20">

        <section id="hero"><Hero /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="experience"><Experience /></section>
        <section id="education"><Education /></section>

        {/* CONTACT */}
        <section className="px-4 sm:px-6 py-16 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-6 text-gradient">
            Let’s Build Something 🚀
          </h2>

          <p className="text-zinc-400 mb-8 text-sm sm:text-base">
            Freelance / AI / Web App — mình nhận hết 😎
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="mailto:datvu0198@gmail.com" className="btn-future w-full sm:w-auto">
              📧 Email
            </a>

            <a
              href="https://github.com/datvu0198-ctrl/DatVu"
              target="_blank"
              className="glass px-6 py-3 rounded-xl w-full sm:w-auto text-center"
            >
              GitHub
            </a>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  )
}

export default Home