import Hero from '../sections/Hero'
import About from '../sections/About'
import Services from '../sections/Services'
import Work from '../sections/Work'
import Marquee from '../sections/Marquee'
import CTA from '../components/CTA'
import TechnicalExpertise from '../sections/TechnicalExpertise'

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Work />
      <TechnicalExpertise/>
      <Marquee />
      <CTA />
    </>
  )
}

export default Home