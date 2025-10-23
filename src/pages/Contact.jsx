
import Container from '../components/Container'
import ContactForm from '../components/ContactForm'
import { GYM } from '../data'
import { Helmet } from 'react-helmet-async'

export default function Contact(){
  return (
    <main>
      <Helmet><title>Contact / Join Us at Swift Gym</title></Helmet>
      <Container className="py-12 grid md:grid-cols-2 gap-8">
        <div>
          <h1 className="font-heading text-4xl mb-4">Join Us</h1>
          <p className="mb-4">We’re located at {GYM.address}. Please call {GYM.phone}, email {GYM.email}, or come in to inquire about specific service pricing. Contact us today!</p>
          <div className="aspect-video rounded-2xl overflow-hidden shadow-elevate">
            <iframe title="Map" width="100%" height="100%" style={{border:0}} loading="lazy" allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${encodeURIComponent(GYM.address)}&output=embed`}></iframe>
          </div>
          <div className="mt-4">
            <div className="font-semibold">Social Proof</div>
            <div className="flex gap-2 mt-2">
              <span className="px-3 py-1 rounded-full bg-accent/40 text-secondary">⭐ 4.9/5 (Members)</span>
              <span className="px-3 py-1 rounded-full bg-accent/40 text-secondary">Top Local Gym</span>
            </div>
          </div>
        </div>
        <div className="card p-6">
          <h2 className="font-heading text-2xl mb-4">Contact Form</h2>
          <ContactForm />
          <div className="mt-6">
            <a className="btn-primary" href="tel:7327013484">Call Us</a>
          </div>
        </div>
      </Container>
    </main>
  )
}
