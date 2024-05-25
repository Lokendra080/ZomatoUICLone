import React from 'react'
import '../index.css'
function DeliveryItme({arrayCollection}) {
  return (
    <div>
      <div className="delivery-item-cover">
        <img src={arrayCollection.covor} className='itme-image' alt={arrayCollection.title} />
      </div>
      <div className='delivery-item-title'>{arrayCollection.title}</div>
      
    </div>
  )
}

export default DeliveryItme
