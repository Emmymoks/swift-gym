
import { TESTIMONIALS } from '../data'
import { useEffect, useState } from 'react'

export default function Testimonials(){
  const [i, setI] = useState(0)
  useEffect(()=>{
    const id = setInterval(()=> setI(prev => (prev+1)%TESTIMONIALS.length), 4000)
    return ()=>clearInterval(id)
  },[])
  const t = TESTIMONIALS[i]
  return (
    <div className="card p-6 text-center">
      <img src={t.image+'?auto=format&fit=crop&w=300&q=60'} alt={t.name} className="w-24 h-24 rounded-full mx-auto object-cover" />
      <p className="mt-4 text-lg">“{t.quote}”</p>
      <div className="mt-2 font-semibold">{t.name}</div>
    </div>
  )
}
