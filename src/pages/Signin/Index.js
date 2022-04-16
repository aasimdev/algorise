import React from 'react'
import About from './components/About'
import Banner from './components/Banner'
import AboutBox from './components/AboutBox'
import aboutImage1 from '../../assets/img/about1.png'
import aboutImage2 from '../../assets/img/about2.png'
import aboutImage3 from '../../assets/img/about3.png'

const SigninIndex = () => {
  return (
    <div className='signBG'>
      <Banner />
      <About />
      <AboutBox
        title={["The Artificial", <br />, <span>Splitbase Network (ASN)</span>]}
        description={[<p>The Artificial Splitbase Network (ASN) uses high quality consumer data and advanced forecasting to ensure RESULTS through your experience.</p>]}
        img={aboutImage1}
      />
      <AboutBox
        title={["Grow your ", <span>investments</span>, <br />, "with ", <span>ease.</span>]}
        description={[<p className='theme-color'>The ASN network was created with the consumer in mind. The basis of the network revolves around the concept of Invest & Pocket (I&P). Essentially, the more you invest into the platform, the more funds you receive (ie pocket).</p>]}
        img={aboutImage2}
      />
      <AboutBox
        title={["Easy & ", <span>Seamless.</span>]}
        description={[<p>Our platform was built to ensure an easy and seamless end to end experience.</p>, <br />, <p> No hidden agendas. No intensive calculations. Just a simple & straightforward system.</p>]}
        img={aboutImage3}
      />
    </div>
  )
}

export default SigninIndex