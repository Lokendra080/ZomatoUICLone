import React from 'react'
import '../index.css'
import NextArray from './NextArray';
import PreArray from './PreArray';
import Slider from 'react-slick';

const BrandCollection = () => {

    const BrandListArr =[
            {
                id:1,
                time:"40 min",
                cover:"https://b.zmtcdn.com/data/brand_creatives/logos/bb30587d1148b6ab628a61945f64bf88_1625164768.png?output-format=webp"
            },
            {
                id:2,
                time:"20 min",
                cover:"https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252699.png?output-format=webp"

            },
            {
                id:3,
                time:"44 min",
                cover:"https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187857.png?output-format=webp"

            },
            {
                id:4,
                time:"45 min",
                cover:"https://b.zmtcdn.com/data/brand_creatives/logos/22529ff52d41a4aa3b36ac1e7e0c0db3_1605099406.png?output-format=webp"

            },
            {
                id:5,
                time:"36 min",
                cover:"https://b.zmtcdn.com/data/brand_creatives/logos/9302c59eca94abbee01aec9acf9305f6_1676471786.png?output-format=webp"

            },
            {
                id:6,
                time:"47 min",
                cover:"https://b.zmtcdn.com/data/brand_creatives/logos/1356425eff0c9acd8ab6b0ad351759e4_1611253489.png?output-format=webp"

            },

            {
                id:7,
                time:"43 min",
                cover:"https://b.zmtcdn.com/data/brand_creatives/logos/26155927d30d8e56d537b65d6a5b9969_1617944079.png?output-format=webp"

            },
            {
                id:8,
                time:"44 min",
                cover:"https://b.zmtcdn.com/data/brand_creatives/logos/d46560ce3d7b84605cab233c5abc65f3_1625165852.png?output-format=webp"

            },
            {
                id:9,
                time:"32 min",
                cover:"https://b.zmtcdn.com/data/brand_creatives/logos/a175a6938688350fb3da3018da6293db_1625244343.png?output-format=webp"

            },
            {
                id:10,
                time:"44 min",
                cover:"https://b.zmtcdn.com/data/brand_creatives/logos/05142cf68ce04384bb185659e1bfe450_1625160307.png?output-format=webp"

            }

    ]

    const settings = {
        infinite: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: <NextArray/>,
        prevArrow: <PreArray />,
      };

  return (
    <div className='TopBrand-list max-width'>
        <div className="Collection-title">Top brands for you</div>
        <Slider {...settings}>
            {BrandListArr.map((BrandListArr) => {
                    return (
                        <div>
                        <div className="brand-cover">
                            <img src={BrandListArr.cover} className='brand-image' alt={BrandListArr.time}  />

                        </div>
                        <div className="brand-time">{BrandListArr.time}</div>
                    </div>
                    )
                    
                }
            )}
        </Slider>
      
    </div>
  )
}

export default BrandCollection
