import { motion, useMotionValue, useTransform } from "framer-motion"
import { useEffect, useState } from "react"
import { FaLaptopCode, FaBrain } from "react-icons/fa"

const colorClasses = {
  cyan: {
    glow: "bg-cyan-500/10",
    icon: "text-cyan-400",
    bar: "bg-cyan-400",
  },
  green: {
    glow: "bg-green-500/10",
    icon: "text-green-400",
    bar: "bg-green-400",
  },
  purple: {
    glow: "bg-purple-500/10",
    icon: "text-purple-400",
    bar: "bg-purple-400",
  },
}

const data = [
  {
    title: "Frontend",
    icon: <FaLaptopCode />,
    color: "cyan",
    skills: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind", level: 88 },
    ],
  },
  {
    title: "Backend",
    icon: <FaLaptopCode />,
    color: "green",
    skills: [
      { name: "NodeJS", level: 80 },
      { name: "Express", level: 78 },
      { name: "MySQL", level: 75 },
    ],
  },
  {
    title: "AI Vision",
    icon: <FaBrain />,
    color: "purple",
    skills: [
      { name: "YOLO", level: 82 },
      { name: "OpenCV", level: 80 },
      { name: "Computer Vision", level: 78 },
    ],
  },
]

function SkillCard({ item }: any) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useTransform(y, [-100, 100], [8, -8])
  const rotateY = useTransform(x, [-100, 100], [-8, 8])

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768

  const handleMouseMove = (e: any) => {
    if (isMobile) return

    const rect = e.currentTarget.getBoundingClientRect()
    x.set(e.clientX - rect.left - rect.width / 2)
    y.set(e.clientY - rect.top - rect.height / 2)
  }

  const handleLeave = () => {
    x.set(0)
    y.set(0)
  }

  const color = colorClasses[item.color as keyof typeof colorClasses]

  return (
    <motion.div
      style={isMobile ? {} : { rotateX, rotateY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
      whileHover={!isMobile ? { scale: 1.03 } : {}}
      className="
        glass 
        p-5 sm:p-6 md:p-8 
        rounded-2xl md:rounded-3xl 
        transition 
        relative 
        overflow-hidden
      "
    >
      {/* glow */}
      <div
        className={`
          absolute inset-0 
          opacity-0 hover:opacity-100 
          transition duration-500 
          blur-3xl 
          rounded-3xl 
          ${color.glow}
        `}
      />

      <div className={`relative z-10 text-3xl sm:text-4xl md:text-5xl mb-4 md:mb-6 ${color.icon}`}>
        {item.icon}
      </div>

      <h3 className="relative z-10 text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6">
        {item.title}
      </h3>

      <div className="relative z-10 space-y-3 md:space-y-4">
        {item.skills.map((s: any) => (
          <SkillBar key={s.name} skill={s} color={item.color} />
        ))}
      </div>
    </motion.div>
  )
}

function SkillBar({ skill, color }: any) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const end = skill.level
    const duration = 800
    const stepTime = 20
    const step = end / (duration / stepTime)

    const timer = setInterval(() => {
      start += step

      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [skill.level])

  const barColor = colorClasses[color as keyof typeof colorClasses]

  return (
    <div>
      <div className="flex justify-between text-xs sm:text-sm mb-1">
        <span>{skill.name}</span>
        <span className="text-zinc-400">{count}%</span>
      </div>

      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1 }}
          className={`h-full rounded-full ${barColor.bar}`}
          style={{
            boxShadow: "0 0 14px rgba(99,102,241,0.6)",
          }}
        />
      </div>
    </div>
  )
}

function Skills() {
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
        Skills & Technologies
      </h2>

      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          gap-6 md:gap-8
        "
      >
        {data.map((item) => (
          <SkillCard key={item.title} item={item} />
        ))}
      </div>
    </section>
  )
}

export default Skills