
import React from 'react'
import Accordian from './components/accordian/indexA'
import Random_Colour from './components/Random_Colour/Index'
import Stars from './components/Star_Rating/Index'
import Image_Slider from './components/Image_slider'

const App = () => {
  const stars = 10;

  return (
    <div>
      {/* <Accordian/>
      <Random_Colour/> */}
      {/* <Stars noOfStars={stars} /> */}
      <Image_Slider url={'https://picsum.photos/v2/list'} limit={'10'} page={'1'} />
    </div>
  )
}

export default App
