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
    <section
      className="
        min-h-[80vh] md:min-h-screen
        flex items-center justify-center
        px-4 sm:px-6
        relative z-10
      "
    >
      {/* background glow */}
      <div className="hero-bg pointer-events-none"></div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="text-center max-w-4xl w-full"
      >
        {/* role */}
        <p className="uppercase tracking-[4px] sm:tracking-[6px] md:tracking-[8px] text-cyan-400 mb-4 text-xs sm:text-sm">
          Fullstack Developer
        </p>

        {/* name */}
        <h1
          className="
            text-4xl 
            sm:text-5xl 
            md:text-7xl 
            lg:text-8xl 
            font-black 
            leading-tight 
            pb-2 
            text-gradient
          "
        >
          Vũ Thành Đạt
        </h1>

        {/* description */}
        <p
          className="
            text-sm 
            sm:text-base 
            md:text-lg 
            text-zinc-400
            leading-7 
            md:leading-9 
            max-w-3xl 
            mx-auto
            px-2 sm:px-0
          "
        >
          Xây dựng ứng dụng web hiện đại với React, NodeJS và AI.
          Tập trung vào trải nghiệm người dùng, hiệu suất và hệ thống thực tế.
        </p>

        {/* buttons */}
        <div
          className="
            flex 
            flex-col 
            sm:flex-row 
            justify-center 
            items-center
            gap-4 
            mt-10
          "
        >
          <a
            href="https://github.com/datvu0198-ctrl/DatVu"
            target="_blank"
            rel="noreferrer"
            className="
              btn-future 
              flex items-center justify-center gap-3
              w-full sm:w-auto
            "
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href="mailto:datvu0198@gmail.com"
            className="
              glass 
              px-6 sm:px-8 py-3 sm:py-4
              rounded-2xl 
              hover:scale-105 transition
              w-full sm:w-auto text-center
            "
          >
            📧 Gmail
          </a>

          <a
            href="https://zalo.me/0979811524"
            target="_blank"
            rel="noreferrer"
            className="
              glass 
              px-6 sm:px-8 py-3 sm:py-4
              rounded-2xl 
              hover:scale-105 transition 
              text-cyan-400
              w-full sm:w-auto text-center
            "
          >
            📱 Zalo
          </a>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero