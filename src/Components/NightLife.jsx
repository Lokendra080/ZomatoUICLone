import React from 'react'
import { NightOut } from '../Data/NightlifeData'
import Filters from './Filters'
import NightlifeCollection from './NightlifeCollection'
import ExploreSection from './ExploreSection'

const NightLife = () => {
  
  const nightFilter =[
    {
      id:1,
      icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
      title:"Filters"
    },
    {
      id:2,
      title:"Rating: 4.0+"
    },
    {
      id:3,
      title:"Safe & Hygienic"
    },
    {
      id:4,
      title:"Pure Veg"
    },
    {
      id:5,
      icon: <i className="fi fi-rr-apps-sort absolute-center"></i>,
      title:"Delivery Time"
    },
    {
      id:6,
      title:"Great Offers"
    },
  ]
  const nightLifeCollectionList=[
    {
      id:"1",
      title:"Microbreweries",
      cover:"https://b.zmtcdn.com/data/collections/e15d090b71c5f3d7b135c88798604070_1618898707.jpg",
      place:"29 place"
    },
    {
      id:"2",
      title:"Best Bars & Pubs",
      cover:"https://b.zmtcdn.com/data/collections/684397cd092de6a98862220e8cc40aca_1709810183.png?output-format=webp",
      place:"22 place"
    },
    
    {
      id:"3",
      title:"Artisan Cocktails",
      cover:"https://b.zmtcdn.com/data/collections/908aad87392ba1f9526e7b483b94d124_1711107868.jpg?output-format=webp",
      place:"20 place"
  
      
    },
    {
      id:"4",
      title:"Happy Hours",
      cover:"https://b.zmtcdn.com/data/collections/fbd237478a5d3b6ea08de83c30230cdd_1705558245.png?output-format=webp",
      place:"12 place"
  
      
  
          
    },
    {
      id:"5",
      title:"Bear in a Bar",
      cover:"https://b.zmtcdn.com/data/collections/7771cf3a18e1da2916794d3998260c69_1705557723.png?output-format=webp",
      place:"5 place"
    },
    {
      id:"6",
      title:"Bar-gain",
      cover:"https://b.zmtcdn.com/data/collections/2b9361aa328a43b08986f77bbec280bd_1709810570.png?output-format=webp",
      place:"9 place"
  
      
    },
  ]

  const nightList= NightOut;
  return (
    <div>
        <NightlifeCollection nightListcollection={nightLifeCollectionList} />
        <div className="max-width">
        <Filters filterlist={nightFilter} />
        <ExploreSection list={nightList} collectionName="Explore curated lists of top restaurants, cafes, pubs, and bars in Delhi NCR, based on trends" />
      </div>
    </div>
  )
}

export default NightLife
