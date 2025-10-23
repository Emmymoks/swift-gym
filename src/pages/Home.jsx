
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Testimonials from '../components/Testimonials'
import Container from '../components/Container'
import { Helmet } from 'react-helmet-async'

export default function Home(){
  return (
    <main>
      <Helmet>
        <title>Swift Gym. Point Pleasant’s 24/7 Gym</title>
        <meta name="description" content="Small town gym big time results. Join our fitness fam today." />
      </Helmet>
      <Hero />
      <Stats />
      <section className="py-12">
        <Container>
          <h2 className="font-heading text-3xl mb-4">What Members Say</h2>
          <Testimonials />
        </Container>
      </section>
    </main>
  )
}
