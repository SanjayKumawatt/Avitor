import React from 'react'
import Hero from '../Components/Hero'
import WhatWeBuilding from '../Components/WhatWeBuild'
import ProductApproach from '../Components/ProductApproach'
import CoreProducts from '../Components/CoreProducts'
import Industries from '../Components/Industries'
import AboutSection from '../Components/AboutSection'
import ProductsAndSolutions from '../Components/ProductAndSolutions'
import CTASection from '../Components/CTA'

const Home = () => {
  return (
    <div>
        <Hero/>
        <WhatWeBuilding/>
        <AboutSection/>
        <ProductApproach/>
        <CoreProducts/>
        <Industries/>
        <ProductsAndSolutions/>
        <CTASection/>
    </div>
  )
}

export default Home