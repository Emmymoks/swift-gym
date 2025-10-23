
import { FiInstagram, FiLinkedin, FiMusic } from 'react-icons/fi'
import { GYM } from '../data'

export default function TrainerCard({ t }){
  return (
    <div className="card overflow-hidden">
      <img src={t.avatar+'?auto=format&fit=crop&w=1000&q=70'} alt={t.name} className="w-full h-56 object-cover" />
      <div className="p-5">
        <div className="font-heading text-2xl">{t.name}</div>
        <div className="opacity-80">{t.role}</div>
        <div className="text-sm mt-1">{t.certs}</div>
        <div className="flex gap-3 mt-4">
          <a href={t.socials.ig} aria-label="Instagram" className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800"><FiInstagram /></a>
          <a href={t.socials.li} aria-label="LinkedIn" className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800"><FiLinkedin /></a>
          <a href={t.socials.tk} aria-label="TikTok" className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800"><FiMusic /></a>
        </div>
  <a href={`mailto:${GYM.email}?subject=Book%20Session`} className="btn-primary inline-block mt-4">Book a Session</a>
      </div>
    </div>
  )
}
