import React from 'react'
import '../index.css'
import Filters from './Filters'
import DeliveryCollection from './DeliveryCollection'
import BrandCollection from './BrandCollection'
import ExploreSection from './ExploreSection'
import { restaurants } from '../Data/RestaurantData'

const Delivery = () => {

  const DeliveryFilter =[
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

  const restaurantList = restaurants
  return (
    <div>
      <div className="max-width">
      <Filters  filterlist={DeliveryFilter}/>

      </div>
      <DeliveryCollection />
      <BrandCollection />
      <ExploreSection list={restaurantList} collectionName=" Delivery Restaurants in Delhi "/>
    </div>
  )
}

export default Delivery
