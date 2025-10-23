import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { PLANS, GYM } from '../data'
import Container from '../components/Container'

export default function Join(){
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const initialPlan = params.get('plan') || PLANS[0].name
  const [form, setForm] = useState({name:'',email:'',phone:'',plan: initialPlan})
  const onChange = (e)=> setForm({...form, [e.target.name]: e.target.value})
  const onSubmit = (e)=>{
    e.preventDefault()
    // placeholder submit - in real app you'd POST to your API
    alert(`Thanks ${form.name}! We'll contact you at ${form.email} about the ${form.plan} plan.`)
  }

  const handlePlanSelect = (planName) => {
    setForm({...form, plan: planName})
  }

  return (
    <section className="py-20">
      <Container className="max-w-3xl mx-auto">
        <h1 className="font-heading text-4xl mb-4">Join {GYM.displayName}</h1>
        <p className="mb-6">Choose a plan below and complete the form to start your membership.</p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {PLANS.map((p,i)=> (
            <div 
              key={i} 
              onClick={() => handlePlanSelect(p.name)}
              className={`p-4 rounded-xl border cursor-pointer transition-all duration-200 ${
                form.plan === p.name 
                  ? 'border-primary bg-primary/10 ring-2 ring-primary/20' 
                  : 'border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800/50'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold">{p.name}</div>
                  <div className="text-2xl font-heading">${p.price}<span className="text-sm font-normal">/mo</span></div>
                </div>
                {p.popular && <div className="text-sm bg-primary text-white px-2 py-1 rounded">Popular</div>}
              </div>
              <p className="mt-2 text-sm opacity-80">{p.desc}</p>
              <ul className="mt-3 text-sm">
                <li>{p.features.classes ? '✅ Classes included' : '❌ Classes'}</li>
                <li>{p.features.pt ? '✅ Personal Training' : '❌ Personal Training'}</li>
                <li>{p.features.sauna ? '✅ Sauna access' : '❌ Sauna'}</li>
              </ul>
            </div>
          ))}
        </div>

        <form onSubmit={onSubmit} className="space-y-4 bg-white/5 p-6 rounded-xl">
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="name" value={form.name} onChange={onChange} required placeholder="Full name" className="input" />
            <input name="email" type="email" value={form.email} onChange={onChange} required placeholder="Email" className="input" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="phone" value={form.phone} onChange={onChange} placeholder="Phone (optional)" className="input" />
            <select name="plan" value={form.plan} onChange={onChange} className="input">
              {PLANS.map((p)=> <option key={p.name} value={p.name}>{p.name} - ${p.price}/mo</option>)}
            </select>
          </div>
          <div className="flex items-center gap-4">
            <button type="submit" className="btn-primary">Start Membership</button>
            <a href={`mailto:${GYM.email}?subject=Join%20${encodeURIComponent(GYM.displayName)}&body=Interested%20in%20the%20${encodeURIComponent(form.plan)}%20plan.`} className="underline">Or email us</a>
          </div>
        </form>
      </Container>
    </section>
  )
}