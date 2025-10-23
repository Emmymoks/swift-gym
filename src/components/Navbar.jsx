
import { Link, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { GYM } from '../data'
import { FiSun, FiMoon, FiMenu } from 'react-icons/fi'

export default function Navbar({ dark, setDark }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navClass = scrolled ? 'bg-white/90 dark:bg-zinc-900/90 shadow-elevate' : 'bg-transparent'

  const linkClass = ({ isActive }) => `px-3 py-2 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 ${isActive ? 'text-primary' : ''}`

  return (
    <header className={`sticky top-0 z-50 transition-colors ${navClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-heading text-2xl font-bold tracking-wide">{GYM.displayName}</Link>
          <nav className="hidden md:flex items-center gap-2">
            <NavLink to="/" className={linkClass}>Home</NavLink>
            <NavLink to="/about" className={linkClass}>About</NavLink>
            <NavLink to="/programs" className={linkClass}>Programs</NavLink>
            <NavLink to="/trainers" className={linkClass}>Trainers</NavLink>
            <NavLink to="/pricing" className={linkClass}>Membership</NavLink>
            <NavLink to="/blog" className={linkClass}>Blog</NavLink>
            <NavLink to="/contact" className={linkClass}>Contact</NavLink>
            <a href="/join" className="btn-primary text-sm">Join Now</a>
            {/* Desktop theme toggle */}
            <button type="button" aria-label="Toggle theme" onClick={() => setDark(!dark)} className="p-2 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800">
              {dark ? <FiSun /> : <FiMoon />}
            </button>
          </nav>
          <div className="flex md:hidden items-center gap-3">
            <button type="button" aria-label="Toggle theme" onClick={() => setDark(!dark)} className="p-2 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800">
              {dark ? <FiSun /> : <FiMoon />}
            </button>
            <button type="button" aria-label="Menu" onClick={() => setOpen(!open)} className="p-2 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800"><FiMenu /></button>
          </div>
        </div>
        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              {['/','/about','/programs','/trainers','/pricing','/blog','/contact'].map((p,i)=>(
                <NavLink key={i} to={p} onClick={()=>setOpen(false)} className={({isActive})=>`px-3 py-2 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 ${isActive?'text-primary':''}`}>
                  {p==='/'?'Home':p.replace('/','').replace(/\b\w/g, c=>c.toUpperCase())}
                </NavLink>
              ))}
              <a href="/join" className="btn-primary text-center">Join Now</a>
              <button type="button" onClick={() => setDark(!dark)} className="px-3 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-800">
                {dark ? 'Light Mode' : 'Dark Mode'}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
