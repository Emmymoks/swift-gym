
import Container from '../components/Container'
import { Helmet } from 'react-helmet-async'

const articles = [
  { title: 'Fuel Up Right: Simple Nutrition Wins', slug: 'nutrition-wins', excerpt: 'Five easy tweaks that boost performance and recovery.' },
  { title: 'HIIT vs. Steady State Cardio', slug: 'hiit-vs-ss', excerpt: 'Which should you pick for fat loss? We break it down.' },
  { title: 'Mobility Myths Busted', slug: 'mobility-myths', excerpt: 'Get bendy without the BS. Here’s what actually works.' },
]

export default function Blog(){
  return (
    <main>
      <Helmet>
        <title>Blog & Fitness Tips  Swift Gym</title>
        <meta name="description" content="Articles about nutrition, workouts, and recovery from Swift Gym." />
      </Helmet>
      <Container className="py-12">
        <h1 className="font-heading text-4xl mb-6">Blog & Fitness Tips</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((a,i)=>(
            <article key={i} className="card p-6">
              <h2 className="font-heading text-2xl">{a.title}</h2>
              <p className="mt-2 opacity-80">{a.excerpt}</p>
              <a href="#" className="btn-primary inline-block mt-4">Read More</a>
            </article>
          ))}
        </div>
      </Container>
    </main>
  )
}
