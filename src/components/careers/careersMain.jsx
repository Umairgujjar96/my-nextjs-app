import React from 'react'
import CareerOpportunities from './careerOpportunities'
import CareersNumbers from './CareersNumbers'
import Method from './Method'
import OpenPosition from './OpenPosition'
import Partners from '../contact-us/partners'

const CareersMain = () => {
  return (
    <div>
        <CareerOpportunities />
        <CareersNumbers />
        <Method />
        <OpenPosition />
        <Partners />
    </div>
  )
}

export default CareersMain