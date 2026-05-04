import { motion } from "framer-motion"
import { useEffect, useState } from "react"

function Loader() {
  const [hide, setHide] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setHide(true), 1500)
    return () => clearTimeout(t)
  }, [])

  if (hide) return null  // 🔥 QUAN TRỌNG

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <div className="text-3xl font-bold text-gradient">
        DatVu.dev
      </div>
    </motion.div>
  )
}

export default Loader