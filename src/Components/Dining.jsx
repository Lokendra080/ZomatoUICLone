import React from 'react'
import DiningCollection from './DiningCollection'
import { diningOut } from '../Data/Diningdata'
import Filters from './Filters'
import ExploreSection from './ExploreSection'

const Dining = () => {
  const DiningCollectionList=[
    {
      id:"1",
      title:"Live Sprots Screeings",
      cover:"https://b.zmtcdn.com/data/collections/e15d090b71c5f3d7b135c88798604070_1618898707.jpg",
      place:"12 place"
    },
    {
      id:"2",
      title:"Newly Opened",
      cover:"https://b.zmtcdn.com/data/collections/684397cd092de6a98862220e8cc40aca_1709810183.png?output-format=webp",
      place:"12 place"
    },
    
    {
      id:"3",
      title:"Veggie Friendly",
      cover:"https://b.zmtcdn.com/data/collections/908aad87392ba1f9526e7b483b94d124_1711107868.jpg?output-format=webp",
      place:"23 place"
  
      
    },
    {
      id:"4",
      title:"Trending thi week",
      cover:"https://b.zmtcdn.com/data/collections/fbd237478a5d3b6ea08de83c30230cdd_1705558245.png?output-format=webp",
      place:"30 place"
  
      
  
          
    },
    {
      id:"5",
      title:"Best of Delhi",
      cover:"https://b.zmtcdn.com/data/collections/7771cf3a18e1da2916794d3998260c69_1705557723.png?output-format=webp",
      place:"116 place"
    },
    {
      id:"6",
      title:"Outdoor seating",
      cover:"https://b.zmtcdn.com/data/collections/2b9361aa328a43b08986f77bbec280bd_1709810570.png?output-format=webp",
      place:"12 place"
  
      
    },
  ]

  const DinigFilter =[
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
  
  
const diningList=diningOut;
  return (
    <div>
      <DiningCollection  dinigList={DiningCollectionList}/>
      <div className="max-width">
        <Filters filterlist={DinigFilter} />
      </div>
        <ExploreSection list={diningList} collectionName="Trending dining out restaurants in Delhi NCR" />
    </div>
  )
}

export default Dining
