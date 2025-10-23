
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Programs from './pages/Programs'
import Trainers from './pages/Trainers'
import Pricing from './pages/Pricing'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Join from './pages/Join'
import { useEffect, useState } from 'react'

export default function App() {
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark')
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [dark])

  return (
    <div className={dark ? 'dark bg-zinc-900 text-white' : ''}>
      <Navbar dark={dark} setDark={setDark} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/pricing" element={<Pricing />} />
  <Route path="/join" element={<Join />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}
