
import { PLANS } from '../data'

export default function PricingPlans(){
  const paymentLink = import.meta.env.VITE_STRIPE_PAYMENT_LINK || ''
  return (
    <div id="pricing" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {PLANS.map(plan => (
        <div key={plan.name} className={`card p-6 ${plan.popular?'ring-2 ring-primary':''}`}>
          {plan.popular && <div className="inline-block mb-3 px-3 py-1 rounded-full bg-primary text-white text-xs">Most Popular</div>}
          <div className="font-heading text-2xl">{plan.name}</div>
          <div className="font-numbers text-5xl mt-2">${plan.price}<span className="text-base">/mo</span></div>
          <p className="mt-2 text-sm opacity-80">{plan.desc}</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>{plan.features.classes ? '✔' : '❌'} Group classes</li>
            <li>{plan.features.pt ? '✔' : '❌'} Personal training</li>
            <li>{plan.features.sauna ? '✔' : '❌'} Sauna access</li>
          </ul>
          <button
            onClick={() => {
              if (paymentLink) {
                window.open(paymentLink, '_blank', 'noopener')
              } else {
                // Send to join page with plan preselected
                const url = `/join?plan=${encodeURIComponent(plan.name)}`
                window.location.href = url
              }
            }}
            className="btn-primary w-full mt-6"
            aria-label={`Choose ${plan.name}`}
          >
            Choose Plan
          </button>
        </div>
      ))}
    </div>
  )
}
