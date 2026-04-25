import { motion } from "framer-motion"
import { FaGithub, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa"
import { SiTypescript, SiMysql, SiExpress } from "react-icons/si"

function PhoneShop() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white overflow-hidden">

      {/* Glow Background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >

          <p className="uppercase tracking-[6px] text-blue-400 mb-4">
            Fullstack Project
          </p>

          <h1 className="text-5xl md:text-7xl font-black mb-8">
            Phone Shop E-commerce
          </h1>

        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl"
        >
          <img
            src="/phoneshop.png"
            className="w-full object-cover"
            alt="Phone Shop"
          />
        </motion.div>

        {/* DESCRIPTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-14"
        >

          <h2 className="text-3xl font-bold mb-6">
            Project Overview
          </h2>

          <p className="text-zinc-400 leading-9 text-lg max-w-4xl">
            Đây là dự án website thương mại điện tử bán điện thoại được xây dựng
            theo mô hình fullstack với React, NodeJS và MySQL.

            Hệ thống cho phép người dùng đăng ký tài khoản, đăng nhập,
            duyệt sản phẩm, thêm sản phẩm vào giỏ hàng và quản lý đơn hàng.

            Ngoài ra còn có admin dashboard giúp quản lý sản phẩm,
            chỉnh sửa dữ liệu và theo dõi hoạt động hệ thống.
          </p>

        </motion.div>

        {/* FEATURES */}
        <div className="mt-20">

          <h2 className="text-3xl font-bold mb-10">
            Main Features
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                User Features
              </h3>

              <ul className="space-y-3 text-zinc-300 leading-8">
                <li>✅ Authentication Login/Register</li>
                <li>✅ Product browsing</li>
                <li>✅ Shopping cart system</li>
                <li>✅ Order management</li>
                <li>✅ Responsive UI</li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                Admin Features
              </h3>

              <ul className="space-y-3 text-zinc-300 leading-8">
                <li>✅ Add/Edit/Delete products</li>
                <li>✅ Manage orders</li>
                <li>✅ Upload product images</li>
                <li>✅ Dashboard management</li>
                <li>✅ Database integration</li>
              </ul>
            </div>

          </div>

        </div>

        {/* TECH STACK */}
        <div className="mt-20">

          <h2 className="text-3xl font-bold mb-10">
            Technologies
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <FaReact className="text-5xl text-cyan-400 mb-6" />

              <h3 className="text-2xl font-bold mb-4">
                Frontend
              </h3>

              <div className="flex flex-wrap gap-3">
                <span className="bg-cyan-500/20 px-4 py-2 rounded-full">
                  React
                </span>

                <span className="bg-cyan-500/20 px-4 py-2 rounded-full">
                  TypeScript
                </span>

                <span className="bg-cyan-500/20 px-4 py-2 rounded-full">
                  Tailwind CSS
                </span>
              </div>
            </div>


            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <FaNodeJs className="text-5xl text-green-400 mb-6" />

              <h3 className="text-2xl font-bold mb-4">
                Backend
              </h3>

              <div className="flex flex-wrap gap-3">

                <span className="bg-green-500/20 px-4 py-2 rounded-full">
                  NodeJS
                </span>

                <span className="bg-green-500/20 px-4 py-2 rounded-full">
                  ExpressJS
                </span>

                <span className="bg-green-500/20 px-4 py-2 rounded-full">
                  REST API
                </span>

                <span className="bg-green-500/20 px-4 py-2 rounded-full">
                  JWT Auth
                </span>

              </div>
            </div>


            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <FaDatabase className="text-5xl text-yellow-400 mb-6" />

              <h3 className="text-2xl font-bold mb-4">
                Database
              </h3>

              <div className="flex flex-wrap gap-3">

                <span className="bg-yellow-500/20 px-4 py-2 rounded-full">
                  MySQL
                </span>

                <span className="bg-yellow-500/20 px-4 py-2 rounded-full">
                  Database Design
                </span>

              </div>
            </div>

          </div>

        </div>

        {/* ACHIEVEMENTS */}
        <div className="mt-20">

          <h2 className="text-3xl font-bold mb-10">
            Achievements
          </h2>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-10">

            <ul className="space-y-5 text-zinc-300 text-lg leading-8">

              <li>
                🚀 Xây dựng fullstack system hoàn chỉnh từ frontend đến backend
              </li>

              <li>
                🚀 Thiết kế REST API và tích hợp database MySQL
              </li>

              <li>
                🚀 Xây dựng admin dashboard quản lý sản phẩm
              </li>

              <li>
                🚀 Tối ưu responsive cho mobile và desktop
              </li>

            </ul>

          </div>

        </div>

        {/* BUTTONS */}
        <div className="mt-20 flex gap-5 flex-wrap">

          <a
            href="https://github.com/datvu0198-ctrl/phoneshop"
            target="_blank"
            className="bg-white text-black px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 hover:scale-105 transition"
          >
            <FaGithub />
            View GitHub
          </a>

          <a
            href="/"
            className="border border-white/20 px-8 py-4 rounded-2xl hover:bg-white hover:text-black transition"
          >
            Back Home
          </a>

        </div>

      </div>

    </div>
  )
}

export default PhoneShop