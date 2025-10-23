
import Container from '../components/Container'
import { GYM, IMAGES } from '../data'
import { Helmet } from 'react-helmet-async'

export default function About(){
  return (
    <main>
      <Helmet>
        <title>About  Swift Gym</title>
      </Helmet>
      <Container className="py-12 grid md:grid-cols-2 gap-8">
        <div>
          <h1 className="font-heading text-4xl mb-4">Our Mission</h1>
          <p className="mb-4">At {GYM.displayName}, our philosophy is simple: meet you where you are and help you go further; one rep, one class, one win at a time.</p>
          <ul className="list-disc ml-5 space-y-2">
            <li>Weekly classes, full weight room, cardio equipment, and more.</li>
            <li>Certified one-on-one stretch sessions, classes, and beyond.</li>
            <li>Insurance accepted. Stop in for details!</li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {IMAGES.slice(0,4).map((src,i)=>(
            <img key={i} src={src+'?auto=format&fit=crop&w=800&q=70'} alt="Facility" className="rounded-2xl object-cover h-40 w-full" />
          ))}
        </div>
      </Container>
    </main>
  )
}
