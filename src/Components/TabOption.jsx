import React from 'react'

const TabOption = ({ activeScreen, setActiveScreen }) => {
  const tabs = [
    {
      id: 1,
      name: "Dining",
      active_img: "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png?output-format=webp",
      backdrop: "#FCEEC0",
      inactive_img: "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png"
    },
    {
      id: 2,
      name: "Delivery",
      active_img: "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png",
      backdrop: "#FCEEC0",
      inactive_img: "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png"
    },
    {
      id: 3,
      name: "NightLife",
      active_img: "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
      backdrop: "#FCEEC0",
      inactive_img: "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png"
    }

  ]

  return (
    <div className='tab-options'>
      <div className="max-width option-wrapper">
        {tabs.map((tab) => {
          return (
            <div onClick={() => setActiveScreen(tab.name)}
              className={`tab-item absolute-center cur-po ${activeScreen === tab.name && "active-tab"}`}  >
              <div className="tab-image-conatiner absolute-center"
                style={{
                  backgroundColor: `${activeScreen === tab.name ? tabs.backdrop : ""}`
                }}>
                <img className='tab-image'
                alt={tab.name}
                  src={activeScreen === tab.name ? tab.active_img : tab.inactive_img}  />

              </div>
                <div className="name">{tab.name}</div>  
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default TabOption
