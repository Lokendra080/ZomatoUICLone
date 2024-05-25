import React from 'react'
import '../index.css'
import Slider from 'react-slick'
import NextArray from './NextArray';
import PreArray from './PreArray';

function DiningCollection({dinigList}) {
    const settings = {
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArray />,
        prevArrow: <PreArray />,
      };

  return (
    <div className='Collection-wraper'>
      <div className="max-width collection">
        <div className='Collection-title'>Collection</div>
        <div className="Collection-Subtitle-row">
            <div className='Collection-Subtitle-text'>
            Explore curated lists of top restaurants, cafes, pubs, and bars in Delhi NCR, based on trends
            </div>
            <div className="Collection-loction">
            <div>All collections in Delhi NCR</div>
            <i className="fi fi-rr-caret-right absolute-center"></i>
            </div>
        </div>
        <Slider {...settings}>
        {dinigList.map((item)=>(
           <div>
                <div className="colllection-cover">
                    <img src={item.cover} alt={item.title} className='collection-image' />
                    <div className="gradiant-bg">
                        <div className='collection-card-title'>{item.title}</div>
                        <div className="collection-card-subtitle">
                            <div>{item.place}</div>
                            <i className="fi fi-rr-caret-right absolute-center"></i>

                        </div>
                    </div>
                </div>
           </div> 
        ))}
        </Slider>
      </div>
    </div>
  )
}

export default DiningCollection