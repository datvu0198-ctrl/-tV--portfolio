import { motion } from "framer-motion"

function Education() {
  return (
    <section
      className="
        py-16 md:py-28 
        px-4 sm:px-6 
        max-w-5xl mx-auto 
        relative
      "
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-10 md:mb-20 text-center">
        Education
      </h2>

      {/* TIMELINE LINE */}
      <div className="absolute left-1/2 top-0 w-[2px] h-full bg-white/10 -translate-x-1/2 hidden md:block"></div>

      <div className="space-y-12 md:space-y-20">

        {/* ITEM 1 */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative flex flex-col md:flex-row items-center"
        >
          {/* LEFT */}
          <div className="w-full md:w-1/2 md:pr-12 text-left md:text-right">
            <p className="text-blue-400 uppercase tracking-[2px] md:tracking-[3px] mb-2 md:mb-3 text-sm">
              Network Administration
            </p>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-3 md:mb-4">
              Trung Cấp Nghề Quang Trung
            </h3>

            <div className="space-y-2 md:space-y-3 text-sm md:text-base text-zinc-300">
              <p>🌐 Quản lý hệ thống mạng LAN/WAN/Wireless</p>
              <p>🔐 Router, Switch, Firewall</p>
              <p>🖥️ Windows Server & Linux</p>
              <p>💾 Backup & Restore</p>
              <p>🛡️ Security & Permission</p>
            </div>
          </div>

          {/* DOT */}
          <div className="w-4 h-4 md:w-6 md:h-6 bg-blue-400 rounded-full border-4 border-black z-10 my-6 md:my-0"></div>

          {/* RIGHT */}
          <div className="hidden md:block md:w-1/2 md:pl-12"></div>
        </motion.div>

        {/* ITEM 2 */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative flex flex-col md:flex-row items-center"
        >
          {/* LEFT EMPTY */}
          <div className="hidden md:block md:w-1/2 md:pr-12"></div>

          {/* DOT */}
          <div className="w-4 h-4 md:w-6 md:h-6 bg-green-400 rounded-full border-4 border-black z-10 my-6 md:my-0"></div>

          {/* RIGHT */}
          <div className="w-full md:w-1/2 md:pl-12 text-left">
            <p className="text-green-400 uppercase tracking-[2px] md:tracking-[3px] mb-2 md:mb-3 text-sm">
              Software Engineering
            </p>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-3 md:mb-4">
              Cao Đẳng Sài Gòn
            </h3>

            <div className="space-y-2 md:space-y-3 text-sm md:text-base text-zinc-300">
              <p>🧠 Data Structures & Algorithms</p>
              <p>⚛️ React Development</p>
              <p>🏗️ OOP</p>
              <p>🤖 AI & Computer Vision</p>
              <p>💡 UX/UI Optimization</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Education