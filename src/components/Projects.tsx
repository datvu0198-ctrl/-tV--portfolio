import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { FaShoppingCart } from "react-icons/fa"

function Projects() {
  return (
    <section
      className="
        py-16 md:py-24 
        px-4 sm:px-6 
        max-w-7xl mx-auto 
        relative z-10
      "
    >
      <h2
        className="
          text-3xl 
          sm:text-4xl 
          md:text-5xl 
          font-black 
          mb-10 md:mb-16 
          text-center 
          text-gradient
        "
      >
        Featured Projects
      </h2>

      <div
        className="
          grid 
          grid-cols-1 
          md:grid-cols-2 
          gap-6 sm:gap-8 md:gap-10 
          items-stretch
        "
      >
        {/* PHONE SHOP */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="
            glass 
            rounded-2xl md:rounded-3xl 
            overflow-hidden 
            h-full 
            flex flex-col
          "
        >
          <img
            src="/phoneshop.png"
            className="
              w-full 
              h-48 sm:h-60 md:h-72 
              object-cover
            "
            alt="Phone Shop"
          />

          <div className="p-5 sm:p-6 md:p-8 flex-1 flex flex-col">
            <div className="flex items-center gap-3 mb-3 md:mb-4">
              <FaShoppingCart className="text-2xl md:text-3xl text-cyan-400" />
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
                Phone Shop System
              </h3>
            </div>

            <p
              className="
                text-zinc-400 
                text-sm sm:text-base 
                leading-6 md:leading-8 
                mb-5 md:mb-6
              "
            >
              Website bán điện thoại fullstack gồm authentication,
              cart system và admin dashboard.
            </p>

            <Link
              to="/project/phoneshop"
              className="
                btn-future 
                inline-block 
                mt-auto 
                text-center
                w-full sm:w-auto
              "
            >
              View Project
            </Link>
          </div>
        </motion.div>

        {/* AI MONEY */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="
            glass 
            rounded-2xl md:rounded-3xl 
            overflow-hidden 
            h-full 
            flex flex-col
          "
        >
          <div
            className="
              h-48 sm:h-60 md:h-72 
              flex items-center justify-center 
              text-5xl sm:text-6xl md:text-7xl 
              bg-gradient-to-br 
              from-cyan-500/20 
              to-purple-500/20
            "
          >
            💰
          </div>

          <div className="p-5 sm:p-6 md:p-8 flex-1 flex flex-col">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4">
              AI Money Detection
            </h3>

            <p
              className="
                text-zinc-400 
                text-sm sm:text-base 
                leading-6 md:leading-8 
                mb-5 md:mb-6
              "
            >
              AI nhận diện tiền realtime sử dụng YOLO và OpenCV.
            </p>

            <Link
              to="/project/ai-money"
              className="
                btn-future 
                inline-block 
                mt-auto 
                text-center
                w-full sm:w-auto
              "
            >
              View Project
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects