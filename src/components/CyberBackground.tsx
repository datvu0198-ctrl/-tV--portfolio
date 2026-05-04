

function CyberBackground() {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden">

      {/* gradient */}
      <div className="absolute inset-0 bg-[#050507]" />

      {/* glow blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-500/20 blur-[150px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-400/20 blur-[150px] rounded-full animate-pulse"></div>

      {/* grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid-lines"></div>
      </div>

    </div>
  )
}

export default CyberBackground