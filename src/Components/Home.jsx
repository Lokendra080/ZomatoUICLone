import React, { useState } from 'react'
import Header from './Header'
import TabOption from './TabOption'
import Delivery from './Delivery'
import Dining from './Dining'
import NightLife from './NightLife'

const Home = () => {

  const [activeScreen, setActiveScreen]= useState('Delivery')


  const getScreen=(activeScreen)=>{
    switch(activeScreen){
      case "Delivery":
        return <Delivery/>;
        
        case "Dining":
          return <Dining/>;
          
          case "NightLife":
            return <NightLife />;
            default:
              return <Delivery/>;
              

    }
  }
  return (
    <div>
     
      <Header />
      <TabOption  activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
    <div className="componets-container">
        {getScreen(activeScreen)}
      
      </div>      

    </div>
  )
}

export default Home
