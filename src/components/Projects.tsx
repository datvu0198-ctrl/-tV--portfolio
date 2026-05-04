import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { FaShoppingCart } from "react-icons/fa"

function Projects() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto relative z-10">
      
      <h2 className="text-5xl font-black mb-16 text-center text-gradient">
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-10 items-stretch">

        {/* PHONE SHOP */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="glass rounded-3xl overflow-hidden h-full flex flex-col"
        >
          <img
            src="/phoneshop.png"
            className="w-full h-72 object-cover"
            alt="Phone Shop"
          />

          <div className="p-8 flex-1 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <FaShoppingCart className="text-3xl text-cyan-400" />
              <h3 className="text-3xl font-bold">
                Phone Shop System
              </h3>
            </div>

            <p className="text-zinc-400 leading-8 mb-6">
              Website bán điện thoại fullstack gồm authentication,
              cart system và admin dashboard.
            </p>

            <Link
              to="/project/phoneshop"
              className="btn-future inline-block mt-auto"
            >
              View Project
            </Link>
          </div>
        </motion.div>

        {/* AI MONEY */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="glass rounded-3xl overflow-hidden h-full flex flex-col"
        >
          <div className="h-72 flex items-center justify-center text-7xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20">
            💰
          </div>

          <div className="p-8 flex-1 flex flex-col">
            <h3 className="text-3xl font-bold mb-4">
              AI Money Detection
            </h3>

            <p className="text-zinc-400 leading-8 mb-6">
              AI nhận diện tiền realtime sử dụng YOLO và OpenCV.
            </p>

            <Link
              to="/project/ai-money"
              className="btn-future inline-block mt-auto"
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