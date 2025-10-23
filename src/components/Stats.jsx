
import CountUp from 'react-countup'
import Container from './Container'
import { useEffect, useRef, useState } from 'react'

export default function Stats() {
  const stats = [
    { label: 'Members Trained', value: 10000 },
    { label: 'Classes Offered', value: 45 },
    { label: 'Certified Trainers', value: 12 },
  ]

  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  const [tick, setTick] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setInView(true)
          setTick(t => t + 1)
        } else {
          setInView(false)
        }
      })
    }, { threshold: 0.4 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <Container className="py-12 grid grid-cols-1 sm:grid-cols-3 gap-4" ref={ref}>
      {stats.map((s, i) => (
        <div key={i} className="card p-6 text-center">
          <div className="font-numbers text-5xl font-black">
            {inView ? <CountUp key={`${tick}-${i}`} end={s.value} duration={2} separator="," /> : '0'}+
          </div>
          <div className="mt-2 text-sm uppercase tracking-wide text-zinc-600 dark:text-zinc-300">{s.label}</div>
        </div>
      ))}
    </Container>
  )
}
