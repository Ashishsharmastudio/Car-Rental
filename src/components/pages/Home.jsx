import React from 'react'
import FourthSection from '../reuseableComponents/FourthSection'
import HeroSection from '../reuseableComponents/heroSection'
import SecondSection from '../reuseableComponents/secondSection'
import ThirdSection from '../reuseableComponents/thirdSection'
import FifthSection from '../reuseableComponents/fifthSection'
const Home = () => {
  return (
    <div>
      <HeroSection/>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection />
      <FifthSection/>
    </div>
  )
}

export default Home
