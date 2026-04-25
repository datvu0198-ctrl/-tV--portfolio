import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import {
  FaGithub,
  FaLaptopCode,
  FaBrain,
  FaShoppingCart
} from "react-icons/fa"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 }
  }
}

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white overflow-hidden relative">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6 relative z-10">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-center max-w-4xl"
        >

          <p className="uppercase tracking-[8px] text-blue-400 mb-4 text-sm">
            Fullstack Developer
          </p>

          <h1 className="text-6xl md:text-8xl font-black leading-tight mb-6">
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
              className="bg-white text-black px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 hover:scale-105 transition"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href="mailto:datvu0198@gmail.com"
              className="border border-zinc-700 px-8 py-4 rounded-2xl hover:bg-white hover:text-black transition"
            >
              📧 Gmail
            </a>

            <a
              href="https://zalo.me/0979811524"
              target="_blank"
              className="bg-blue-500 px-8 py-4 rounded-2xl hover:scale-105 transition"
            >
              📱 Zalo: 0979 811 524
            </a>

          </div>
        </motion.div>

      </section>

      {/* SKILLS */}
      <section className="py-24 px-6 max-w-7xl mx-auto relative z-10">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-black mb-16 text-center"
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* FRONTEND */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8"
          >

            <FaLaptopCode className="text-5xl mb-6 text-blue-400" />

            <h3 className="text-3xl font-bold mb-6">
              Frontend
            </h3>

            <div className="flex flex-wrap gap-3">

              <span className="bg-blue-500/20 px-4 py-2 rounded-full">
                React
              </span>

              <span className="bg-blue-500/20 px-4 py-2 rounded-full">
                TypeScript
              </span>

              <span className="bg-blue-500/20 px-4 py-2 rounded-full">
                Tailwind
              </span>

              <span className="bg-blue-500/20 px-4 py-2 rounded-full">
                Responsive UI
              </span>

            </div>

          </motion.div>

          {/* BACKEND */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8"
          >

            <FaLaptopCode className="text-5xl mb-6 text-green-400" />

            <h3 className="text-3xl font-bold mb-6">
              Backend
            </h3>

            <div className="flex flex-wrap gap-3">

              <span className="bg-green-500/20 px-4 py-2 rounded-full">
                NodeJS
              </span>

              <span className="bg-green-500/20 px-4 py-2 rounded-full">
                Express
              </span>

              <span className="bg-green-500/20 px-4 py-2 rounded-full">
                REST API
              </span>

              <span className="bg-green-500/20 px-4 py-2 rounded-full">
                MySQL
              </span>

            </div>

          </motion.div>

          {/* AI */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8"
          >

            <FaBrain className="text-5xl mb-6 text-purple-400" />

            <h3 className="text-3xl font-bold mb-6">
              AI Vision
            </h3>

            <div className="flex flex-wrap gap-3">

              <span className="bg-purple-500/20 px-4 py-2 rounded-full">
                YOLO
              </span>

              <span className="bg-purple-500/20 px-4 py-2 rounded-full">
                OpenCV
              </span>

              <span className="bg-purple-500/20 px-4 py-2 rounded-full">
                Computer Vision
              </span>

            </div>

          </motion.div>

        </div>

      </section>

      {/* PROJECTS */}
      <section className="py-24 px-6 max-w-7xl mx-auto relative z-10">

        <h2 className="text-5xl font-black mb-16 text-center">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* PHONE SHOP */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden"
          >

            <img
              src="/phoneshop.png"
              className="w-full h-72 object-cover"
              alt="Phone Shop"
            />

            <div className="p-8">

              <div className="flex items-center gap-3 mb-4">
                <FaShoppingCart className="text-3xl text-blue-400" />

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
                className="bg-blue-500 px-6 py-3 rounded-2xl inline-block hover:scale-105 transition"
              >
                View Project
              </Link>

            </div>

          </motion.div>

          {/* AI MONEY */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden"
          >

            <div className="h-72 flex items-center justify-center text-8xl bg-gradient-to-br from-green-500/20 to-purple-500/20">
              💰
            </div>

            <div className="p-8">

              <h3 className="text-3xl font-bold mb-4">
                AI Money Detection
              </h3>

              <p className="text-zinc-400 leading-8 mb-6">
                AI nhận diện tiền realtime sử dụng YOLO và OpenCV.
              </p>

              <Link
                to="/project/ai-money"
                className="bg-green-500 px-6 py-3 rounded-2xl inline-block hover:scale-105 transition"
              >
                View Project
              </Link>

            </div>

          </motion.div>

        </div>

      </section>

      {/* EXPERIENCE */}
      <section className="py-24 px-6 max-w-5xl mx-auto relative z-10">

        <h2 className="text-5xl font-black mb-16 text-center">
          Experience
        </h2>

        <div className="space-y-8 border-l border-zinc-700 pl-10">

          {/* YAKULT */}
          <div className="relative bg-white/5 border border-white/10 p-8 rounded-3xl">

            <div className="absolute -left-14 top-10 w-6 h-6 bg-blue-500 rounded-full"></div>

            <h3 className="text-3xl font-bold">
              Yakult Việt Nam
            </h3>

            <p className="text-blue-400 mt-2">
              Staff 2 • 2023 - 2025
            </p>

            <ul className="list-disc ml-5 mt-6 text-zinc-300 space-y-3 leading-8">
              <li>Chăm sóc và tư vấn khách hàng</li>
              <li>Phát triển thị trường và doanh số</li>
              <li>Hỗ trợ quản lý hoạt động bán hàng</li>
            </ul>

          </div>

          {/* BHX */}
          <div className="relative bg-white/5 border border-white/10 p-8 rounded-3xl">

            <div className="absolute -left-14 top-10 w-6 h-6 bg-green-500 rounded-full"></div>

            <h3 className="text-3xl font-bold">
              Bách Hóa Xanh
            </h3>

            <p className="text-green-400 mt-2">
              Trợ lý • 2020 - 2022
            </p>

            <ul className="list-disc ml-5 mt-6 text-zinc-300 space-y-3 leading-8">
              <li>Quản lý tồn kho và kiểm kê sản phẩm</li>
              <li>Hỗ trợ bán hàng trực tiếp</li>
              <li>Điều phối vận hành cửa hàng</li>
            </ul>

          </div>

        </div>

      </section>

      {/* EDUCATION */}
<section className="py-24 px-6 max-w-6xl mx-auto relative z-10">

  <h2 className="text-5xl font-black mb-16 text-center">
    Education
  </h2>

  <div className="space-y-10">

    {/* QUANG TRUNG */}
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-10"
    >

      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8">

        <div>
          <p className="text-blue-400 uppercase tracking-[4px] mb-3">
            Network Administration
          </p>

          <h3 className="text-4xl font-black">
            Trung Cấp Nghề Quang Trung
          </h3>
        </div>

        <div className="text-zinc-400 text-xl mt-4 md:mt-0">
          09/2013 - 10/2016
        </div>

      </div>

      <div className="grid md:grid-cols-2 gap-6 text-zinc-300 leading-8">

        <div className="bg-white/5 rounded-2xl p-6">
          🌐 Quản lý hệ thống mạng LAN/WAN/Wireless
        </div>

        <div className="bg-white/5 rounded-2xl p-6">
          🔐 Cấu hình Router, Switch, Firewall
        </div>

        <div className="bg-white/5 rounded-2xl p-6">
          🖥️ Quản lý Windows Server & Linux
        </div>

        <div className="bg-white/5 rounded-2xl p-6">
          💾 Backup & Restore hệ thống
        </div>

        <div className="bg-white/5 rounded-2xl p-6">
          🛡️ Bảo mật và phân quyền truy cập
        </div>

        <div className="bg-white/5 rounded-2xl p-6">
          ⚡ Xử lý sự cố kỹ thuật 24/7
        </div>

      </div>

    </motion.div>


    {/* SAI GON COLLEGE */}
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-10"
    >

      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8">

        <div>
          <p className="text-green-400 uppercase tracking-[4px] mb-3">
            Software Engineering
          </p>

          <h3 className="text-4xl font-black">
            Cao Đẳng Sài Gòn
          </h3>
        </div>

        <div className="text-zinc-400 text-xl mt-4 md:mt-0">
          09/2025 - 03/2027
        </div>

      </div>

      <div className="grid md:grid-cols-2 gap-6 text-zinc-300 leading-8">

        <div className="bg-white/5 rounded-2xl p-6">
          🧠 Data Structures & Algorithms
        </div>

        <div className="bg-white/5 rounded-2xl p-6">
          ⚛️ Frontend Development với React
        </div>

        <div className="bg-white/5 rounded-2xl p-6">
          🏗️ Object Oriented Programming (OOP)
        </div>

        <div className="bg-white/5 rounded-2xl p-6">
          🤖 AI & Computer Vision cơ bản
        </div>

        <div className="bg-white/5 rounded-2xl p-6">
          🇬🇧 English for IT Communication
        </div>

        <div className="bg-white/5 rounded-2xl p-6">
          💡 UX/UI Optimization
        </div>

      </div>

    </motion.div>

  </div>

</section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 text-center text-zinc-500 relative z-10">
        © 2026 Vũ Thành Đạt • Fullstack Developer
      </footer>

    </div>
  )
}

export default Home