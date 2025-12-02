
import React from 'react'
import Accordian from './components/1.accordian/indexA'
import Random_Colour from './components/2.Random_Colour/Index'
import Stars from './components/3.Star_Rating/Index'
import Image_Slider from './components/4.Image_slider'
import LoadMoreData from './components/5.Load_more_data'
import TreeView from './components/6.tree-view'
import menus from './components/6.tree-view/data'
import QrCode from './components/7.qr-code-generator'
import LightDarkTheme from './components/8.lightDarkTheme'
import Scroll from './components/9.scroll-animation'
import TabsTest from './components/10.tab-view/tabs-test'


const App = () => {
  const stars = 10;
  // const link = 'https://dummyjson.products?limit=100';
  return (
    <div>
      {/* <Accordian />
      <Random_Colour/>
      <Stars noOfStars={stars} />
      <Image_Slider url={'https://picsum.photos/v2/list'} limit={'20'} page={'1'} />
      <LoadMoreData url={'https://dummyjson.com/products?limit=10&skip=10&select=title,price'} />
      <TreeView menus={menus} />
      <QrCode/>
      <LightDarkTheme /> */}
      {/* <Scroll url={'https://dummyjson.com/products'} /> */}
      <TabsTest/>
    </div>
  )
}

export default App;
