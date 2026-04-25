import { motion } from "framer-motion"
import {
  FaPython,
  FaGithub,
  FaBrain,
  FaCamera
} from "react-icons/fa"

function AIMoney() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white overflow-hidden relative">

      {/* BACKGROUND EFFECT */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >

          <p className="uppercase tracking-[6px] text-green-400 mb-4">
            AI Project
          </p>

          <h1 className="text-5xl md:text-7xl font-black mb-8">
            AI Money Detection
          </h1>

          <p className="text-zinc-400 text-lg leading-9 max-w-4xl">
            Dự án sử dụng YOLO và OpenCV để nhận diện tiền mặt
            realtime thông qua camera.

            Hệ thống có thể phát hiện và phân loại mệnh giá tiền
            với tốc độ xử lý nhanh và độ chính xác cao.
          </p>

        </motion.div>

        {/* DEMO VIDEO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-16"
        >

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

            <h2 className="text-3xl font-bold mb-6">
              Demo Video
            </h2>

            <div className="aspect-video rounded-2xl overflow-hidden">

              <iframe
                className="w-full h-full"
                src="https://drive.google.com/file/d/1h7QIV0mffV_zMI1iYcGtCrJPQHRaQlBj/preview"
                allow="autoplay"
              ></iframe>

            </div>

          </div>

        </motion.div>

        {/* PROJECT OVERVIEW */}
        <div className="mt-20">

          <h2 className="text-3xl font-bold mb-10">
            Project Overview
          </h2>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-10">

            <p className="text-zinc-300 leading-9 text-lg">

              Dự án được huấn luyện bằng mô hình YOLO để nhận diện
              các loại tiền Việt Nam thông qua webcam realtime.

              Hệ thống sử dụng OpenCV để xử lý hình ảnh và hiển thị
              bounding box trực tiếp trên video stream.

            </p>

          </div>

        </div>

        {/* FEATURES */}
        <div className="mt-20">

          <h2 className="text-3xl font-bold mb-10">
            Features
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

              <FaCamera className="text-5xl text-green-400 mb-6" />

              <h3 className="text-2xl font-bold mb-5">
                Realtime Detection
              </h3>

              <ul className="space-y-3 text-zinc-300 leading-8">
                <li>✅ Camera realtime detection</li>
                <li>✅ Fast object recognition</li>
                <li>✅ Bounding box tracking</li>
              </ul>

            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

              <FaBrain className="text-5xl text-purple-400 mb-6" />

              <h3 className="text-2xl font-bold mb-5">
                AI Processing
              </h3>

              <ul className="space-y-3 text-zinc-300 leading-8">
                <li>✅ YOLO training model</li>
                <li>✅ Image processing with OpenCV</li>
                <li>✅ Money classification</li>
              </ul>

            </div>

          </div>

        </div>

        {/* TECHNOLOGIES */}
        <div className="mt-20">

          <h2 className="text-3xl font-bold mb-10">
            Technologies
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

              <FaPython className="text-5xl text-yellow-400 mb-6" />

              <h3 className="text-2xl font-bold mb-4">
                Python
              </h3>

              <p className="text-zinc-400 leading-8">
                Main programming language for AI processing.
              </p>

            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

              <FaBrain className="text-5xl text-green-400 mb-6" />

              <h3 className="text-2xl font-bold mb-4">
                YOLO
              </h3>

              <p className="text-zinc-400 leading-8">
                Object detection model for money recognition.
              </p>

            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

              <FaCamera className="text-5xl text-blue-400 mb-6" />

              <h3 className="text-2xl font-bold mb-4">
                OpenCV
              </h3>

              <p className="text-zinc-400 leading-8">
                Image processing and realtime camera handling.
              </p>

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
                🚀 Train custom YOLO model for Vietnamese money detection
              </li>

              <li>
                🚀 Realtime recognition using webcam
              </li>

              <li>
                🚀 Integrated OpenCV image processing
              </li>

              <li>
                🚀 Built full AI detection pipeline
              </li>

            </ul>

          </div>

        </div>

        {/* BUTTONS */}
        <div className="mt-20 flex gap-5 flex-wrap">

          <a
            href="https://drive.google.com/file/d/1h7QIV0mffV_zMI1iYcGtCrJPQHRaQlBj/view"
            target="_blank"
            className="bg-green-500 px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition"
          >
            Watch Demo
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

export default AIMoney