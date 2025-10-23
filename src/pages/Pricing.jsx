
import Container from '../components/Container'
import PricingPlans from '../components/PricingPlans'
import { Helmet } from 'react-helmet-async'

export default function Pricing(){
  return (
    <main>
      <Helmet><title>Membership Plans at Swift Gym</title></Helmet>
      <Container className="py-12">
        <h1 className="font-heading text-4xl mb-6">Membership Plans</h1>
        <PricingPlans />
      </Container>
    </main>
  )
}
