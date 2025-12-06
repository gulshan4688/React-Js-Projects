import React, { useContext } from 'react'
import TicTacToe from '../14.Tic-tac-toe'
import LightDarkTheme from '../8.lightDarkTheme'
import Random_Colour from '../2.Random_Colour/Index'
import Accordian from '../1.accordian/indexA'
import { FeatureFlagsContext } from './Context/contextMaker'

const FeatureFlag = () => {

  // destrucute the context
  const { loading, enabledFlags } = useContext(FeatureFlagsContext);

  const componentsToRender = [
    {
      key: 'show_tictactoe',
      component: <TicTacToe />
    },
    {
      key: 'show_lightandDark',
      component: <LightDarkTheme />
    },
    {
      key: 'show_RandomColourGenerator',
      component: <Random_Colour />
    },
    {
      key: 'show_Accordian',
      component: <Accordian />
    }
  ]
  function checkEnabledFlags(getCurrentKey) {
    return enabledFlags[getCurrentKey]
  }

  if (loading) <h1>Loading !!! please wait </h1>
  
  return (
    <div>
      { 
        componentsToRender.map(item => (
          checkEnabledFlags(item.key) ?
            <div key={item.key} >{item.component} </div>
            : null
        ))
      }
    </div>
  )
}

export default FeatureFlag
