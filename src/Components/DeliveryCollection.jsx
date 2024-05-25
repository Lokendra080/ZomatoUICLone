import React from 'react'
import '../index.css'
import NextArray from './NextArray';
import PreArray from './PreArray';
import Slider from "react-slick"
import DeliveryItme from './DeliveryItem';

const DeliveryCollection = () => {

  const arrayCollection=[
    {
      id:1,
      title:"Biryani",
      covor:"https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png"
    },
    {
      id:2,
      title:"Thali",
      covor:"https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png"
    },
    {
      id:3,
      title:"Pizza",
      covor:"https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"
    },
    {
      id:4,
      title:"Burger",
      covor:"https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png"
    },
    {
      id:5,
      title:"Chicken",
      covor:"https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png"
    },
    {
      id:6,
      title:"Cake",
      covor:"https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png"
    },
    {
      id:7,
      title:"Chole-Bhature",
      covor:"https://b.zmtcdn.com/data/dish_images/c953e5ca07150e9a51f8b21102e20f7e1634805157.png"
    },
    {
      id:8,
      title:"North-Indain",
      covor:"https://b.zmtcdn.com/data/o2_assets/019409fe8f838312214d9211be010ef31678798444.jpeg"
    },
    {
      id:9,
      title:"Rolls",
      covor:"https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png"
    },
    {
      id:10,
      title:"Dosa",
      covor:"https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png"
    },
    {
      id:11,
      title:"Paratha",
      covor:"https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png"
    },
    {
      id:12,
      title:"Noodles",
      covor:"https://b.zmtcdn.com/data/dish_images/91c554bcbbab049353a8808fc970e3b31615960315.png"
    },
    

  ]

  
    const settings = {
      infinite: false,
      slidesToShow: 6,
      slidesToScroll: 1,
      nextArrow: <NextArray />,
      prevArrow: <PreArray />,
    };

  return (
    <div className='delivery-collecton'>
        <div className='max-width'>
            <div className='Collection-title'>Eat what makes you happy</div>
            <Slider {...settings}>
              {arrayCollection.map(
                (arrayCollection)=>{
                  return <DeliveryItme arrayCollection={arrayCollection} />
                }
              )}
            </Slider>
        </div>
      
    </div>
  )
}

export default DeliveryCollection
