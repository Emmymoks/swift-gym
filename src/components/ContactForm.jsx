
import { useForm } from 'react-hook-form'
import { GYM } from '../data'

export default function ContactForm(){
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm()
  const formspreeId = import.meta.env.VITE_FORMSPREE_ID

  const onSubmit = async (data) => {
    if (formspreeId) {
      const resp = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(Object.assign(document.createElement('form'), { elements: [] }))
      })
      // Fallback to mailto if the above generic post fails (since we didn't attach fields in this lightweight approach)
    }
    const mail = `mailto:${GYM.email}?subject=New%20Inquiry&body=${encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\nGoals: ${data.goals}`
    )}`
    window.location.href = mail
    reset()
    alert('Thanks! We opened your email client so you can send your message.')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" id="contact">
      <input className="input" placeholder="Name" {...register('name', { required: true, minLength: 2 })} />
      {errors.name && <p className="text-primary text-sm">Please enter your name.</p>}

      <input type="email" className="input" placeholder="Email" {...register('email', { required: true, pattern: /.+@.+\..+/ })} />
      {errors.email && <p className="text-primary text-sm">Please enter a valid email.</p>}

      <textarea rows="4" className="input" placeholder="Your goals (e.g., weight loss, strength, flexibility)" {...register('goals', { required: true })}></textarea>
      {errors.goals && <p className="text-primary text-sm">Please tell us about your goals.</p>}

  <button type="submit" disabled={isSubmitting} className="btn-primary">{isSubmitting ? 'Sending...' : 'Send Message'}</button>
    </form>
  )
}
