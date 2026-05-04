import { motion } from "framer-motion"
import { FaGithub } from "react-icons/fa"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 }
  }
}

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative z-10">
      
      {/* background glow */}
      <div className="hero-bg"></div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="text-center max-w-4xl"
      >
        <p className="uppercase tracking-[8px] text-cyan-400 mb-4 text-sm">
          Fullstack Developer
        </p>

        <h1 className="text-7xl md:text-8xl font-black leading-[1.2] pb-2 text-gradient">
          Vũ Thành Đạt
        </h1>

        <p className="text-zinc-400 text-lg md:text-xl leading-9 max-w-3xl mx-auto">
          Xây dựng ứng dụng web hiện đại với React, NodeJS và AI.
          Tập trung vào trải nghiệm người dùng, hiệu suất và hệ thống thực tế.
        </p>

        <div className="flex justify-center gap-5 mt-10 flex-wrap">

          <a
            href="https://github.com/datvu0198-ctrl/DatVu"
            target="_blank"
            rel="noreferrer"
            className="btn-future flex items-center gap-3"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href="mailto:datvu0198@gmail.com"
            className="glass px-8 py-4 rounded-2xl hover:scale-105 transition"
          >
            📧 Gmail
          </a>

          <a
            href="https://zalo.me/0979811524"
            target="_blank"
            rel="noreferrer"
            className="glass px-8 py-4 rounded-2xl hover:scale-105 transition text-cyan-400"
          >
            📱 Zalo: 0979 811 524
          </a>

        </div>
      </motion.div>
    </section>
  )
}

export default Hero