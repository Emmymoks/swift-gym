import { useState } from 'react'
import Container from '../components/Container'
import ProgramsGrid from '../components/ProgramsGrid'
import { SCHEDULE } from '../data'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { Helmet } from 'react-helmet-async'

export default function Programs(){
  const [selectedProgram, setSelectedProgram] = useState(null)

  return (
    <main>
      <Helmet><title>Programs & Schedule at Swift Gym</title></Helmet>
      <Container className="py-12">
        <h1 className="font-heading text-4xl mb-4">Programs</h1>
        <ProgramsGrid onProgramSelect={setSelectedProgram} />
        
        {/* Program Details Modal */}
        {selectedProgram && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-zinc-800 rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <img 
                  src={`${selectedProgram.image}?auto=format&fit=crop&w=1000&q=70`} 
                  alt={selectedProgram.name}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
                <button 
                  onClick={() => setSelectedProgram(null)}
                  className="absolute top-3 right-3 bg-black/50 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-black/70"
                >
                  ×
                </button>
              </div>
              <div className="p-6">
                <h2 className="font-heading text-2xl mb-2">{selectedProgram.name}</h2>
                <div className="text-sm text-primary mb-4">{selectedProgram.category}</div>
                <p className="text-zinc-600 dark:text-zinc-300 mb-4">
                  {selectedProgram.description || `Our ${selectedProgram.name} program is designed to help you achieve your ${selectedProgram.goal} goals through expert-led sessions and comprehensive training.`}
                </p>
                <div className="space-y-2 text-sm">
                  <div><strong>Goal:</strong> {selectedProgram.goal}</div>
                  <div><strong>Duration:</strong> 60 minutes per session</div>
                  <div><strong>Level:</strong> All levels welcome</div>
                </div>
                <button 
                  onClick={() => setSelectedProgram(null)}
                  className="mt-6 w-full btn-primary"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="card p-6">
            <h2 className="font-heading text-2xl mb-3">Weekly Schedule</h2>
            <ul className="space-y-2">
              {SCHEDULE.map((c,i)=>(<li key={i} className="flex justify-between"><span>{c.day} {c.title}</span><span>{c.time}</span></li>))}
            </ul>
          </div>
          <div className="card p-6">
            <h2 className="font-heading text-2xl mb-3">Calendar</h2>
            <Calendar />
          </div>
        </div>
      </Container>
    </main>
  )
}