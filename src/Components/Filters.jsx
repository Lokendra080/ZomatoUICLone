import React from 'react'
import '../index.css'
const Filters = ({filterlist}) => {
  return (
      <div className='filters'>
          {filterlist.icon && filterlist.icon }
     {filterlist && filterlist.map((filter) =>{
        return <div className='filterItem'>
            <div className="filtericon">
                {filter.icon} 
                
                <div className="filtertitle">
                {filter.title} 

                </div>
            </div>
            </div>
     })}
    </div>
  )
}

export default Filters
