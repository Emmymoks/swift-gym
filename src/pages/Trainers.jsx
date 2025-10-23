
import Container from '../components/Container'
import { TRAINERS } from '../data'
import TrainerCard from '../components/TrainerCard'
import { Helmet } from 'react-helmet-async'

export default function Trainers(){
  return (
    <main>
  <Helmet><title>Meet the Trainers at Swift Gym</title></Helmet>
      <Container className="py-12">
        <h1 className="font-heading text-4xl mb-6">Certified Trainers</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRAINERS.map((t, i)=>(<TrainerCard key={i} t={t} />))}
        </div>
      </Container>
    </main>
  )
}
