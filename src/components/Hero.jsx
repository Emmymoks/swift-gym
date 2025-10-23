
import { motion } from 'framer-motion'
import { GYM, IMAGES } from '../data'
import Container from './Container'

export default function Hero() {
  const bg = 'https://i.pinimg.com/1200x/63/c8/73/63c873c2a8229725993e00092aa7daf6.jpg'
  return (
    <section
      className="relative min-h-[80vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 z-10" />

      <Container className="py-24 text-center text-white relative z-20">
        <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-heading text-5xl md:text-7xl mb-4">
          {GYM.tagline1}
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-xl md:text-2xl mb-6">{GYM.tagline2}</motion.p>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="max-w-2xl mx-auto mb-8">{GYM.description}</motion.p>
        <div className="flex items-center justify-center gap-4">
          <a href="/join" className="btn-primary">Join Now</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
          {GYM.bullets.map((b, i) => (
            <div key={i} className="card p-4 text-left bg-white/10">
              {b}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
