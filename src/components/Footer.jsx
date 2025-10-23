
import { GYM } from '../data'
import Container from './Container'

export default function Footer(){
  return (
    <footer className="mt-16 py-10 bg-secondary text-white">
      <Container className="grid md:grid-cols-4 gap-8">
        <div>
          <div className="font-heading text-2xl">{GYM.displayName}</div>
          <p className="opacity-80 mt-2">Come join the best gym in town🔥</p>
        </div>
        <div>
          <div className="font-semibold mb-2">Contact</div>
          <p>{GYM.address}</p>
          <a href="tel:7327013484" className="underline">{GYM.phone}</a><br/>
          <a href="mailto:info@swiftgym.com" className="underline">{GYM.email}</a>
        </div>
        <div>
          <div className="font-semibold mb-2">Social</div>
          <a href={GYM.socials.facebook} className="underline block">Facebook</a>
          <a href={GYM.socials.instagram} className="underline block">Instagram</a>
        </div>
        <div>
          <div className="font-semibold mb-2">Newsletter</div>
          <form onSubmit={(e)=>{e.preventDefault(); alert('Thanks for subscribing!')}} className="flex gap-2">
            <input className="rounded-xl px-3 py-2 text-zinc-900" placeholder="you@example.com" />
            <a href="/join" className="btn-primary">Join</a>
          </form>
        </div>
      </Container>
  <Container className="mt-6 opacity-80 text-sm">© <span id="y">{new Date().getFullYear()}</span> {GYM.displayName}. All rights reserved.</Container>
    </footer>
  )
}
