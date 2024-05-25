import React from 'react'
import '../index.css'
import ExploreCrad from './ExploreCrad'
const ExploreSection = ({list, collectionName}) => {
  return <div className='max-width explore-section'>
    <div className="Collection-title">{collectionName}</div>
    <div className="explore-grid">

        {list.map((restaurantData)=>{
            return <ExploreCrad  restaurant={restaurantData}/>
        })}
    </div>

  </div>
}

export default ExploreSection
