
import React from 'react'
import Accordian from './components/accordian/indexA'
import Random_Colour from './components/Random_Colour/Index'
import Stars from './components/Star_Rating/Index'

const App = () => {
  const stars = 10;
  return (
    <div>
      {/* <Accordian/>
      <Random_Colour/> */}
      <Stars noOfStars={stars} />
    </div>
  )
}

export default App
