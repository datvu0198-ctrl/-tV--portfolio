import './App.css'
import { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import PhoneShop from "./pages/PhoneShop"
import AIMoney from "./pages/AIMoney"
import Home from "./pages/Home"

function App() {
  const [theme] = useState("dark")

  useEffect(() => {
    document.body.className = theme === "light" ? "light" : ""
  }, [theme])

    return (
  <div className="relative min-h-screen">

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project/phoneshop" element={<PhoneShop />} />
      <Route path="/project/ai-money" element={<AIMoney />} />
    </Routes>

  </div>
)
}

export default App