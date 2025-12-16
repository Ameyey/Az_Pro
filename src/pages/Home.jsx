import React from 'react'
import CarouseL from '../component/CarouseL'
import MideBaner from '../component/MideBaner'
import Features_Card from '../component/Features_Card'

function Home() {
  return (
    <div className='overflow-x-hidden'>
      <CarouseL />
      <MideBaner />
      <Features_Card/>
    </div>
  )
}

export default Home
