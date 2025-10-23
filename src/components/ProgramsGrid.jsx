import { useState } from 'react'
import { PROGRAMS } from '../data'
import Container from './Container'

export default function ProgramsGrid({ onProgramSelect }) {
  const [goal, setGoal] = useState('all')

  const filtered = goal === 'all' ? PROGRAMS : PROGRAMS.filter(p => p.goal === goal)

  return (
    <Container className="py-12">
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <button 
          type="button" 
          onClick={() => setGoal('all')} 
          className={`px-4 py-2 rounded-xl ${goal === 'all' ? 'bg-primary text-white' : 'bg-zinc-100 dark:bg-zinc-800'}`}
        >
          All
        </button>
        <button 
          type="button" 
          onClick={() => setGoal('weight-loss')} 
          className={`px-4 py-2 rounded-xl ${goal === 'weight-loss' ? 'bg-primary text-white' : 'bg-zinc-100 dark:bg-zinc-800'}`}
        >
          Weight Loss
        </button>
        <button 
          type="button" 
          onClick={() => setGoal('strength')} 
          className={`px-4 py-2 rounded-xl ${goal === 'strength' ? 'bg-primary text-white' : 'bg-zinc-100 dark:bg-zinc-800'}`}
        >
          Strength
        </button>
        <button 
          type="button" 
          onClick={() => setGoal('flexibility')} 
          className={`px-4 py-2 rounded-xl ${goal === 'flexibility' ? 'bg-primary text-white' : 'bg-zinc-100 dark:bg-zinc-800'}`}
        >
          Flexibility
        </button>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(p => (
          <div key={p.id} className="card overflow-hidden">
            <img 
              src={`${p.image}?auto=format&fit=crop&w=1000&q=70`} 
              alt={p.name} 
              className="w-full h-48 object-cover" 
            />
            <div className="p-5">
              <div className="font-heading text-2xl">{p.name}</div>
              <div className="text-sm mt-1 opacity-80">{p.category}</div>
              <button 
                type="button" 
                onClick={() => onProgramSelect(p)}
                className="mt-4 btn-primary"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}