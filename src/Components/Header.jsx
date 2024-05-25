import React from 'react'
import '../index.css'

const Header = () => {
  return (
    <div className='max-width Header'>
      <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="Zomato-logo" className='header-logo' />

      <div className="right-header">
        <div className="header-loaction-container">
          <div className="loacation-wrapper">
            <div className="location-icon-name">
              <i className="fi fi-rr-marker icons location-icon" ></i>
              <div>Banglore</div>
            </div>
            <i className="fi fi-rr-caret-down icons caret-icon"></i>
          </div>
          <div className="saperator"></div>
          <div className="header-searchvar">
            <i class="fi fi-rr-search icons Search-icon"></i>
            <input type="text" placeholder='Search for restaurant, cuisine or a dish' className='search-input' />

          </div>
        </div>
        <div className="profile">
          <img src="https://b.zmtcdn.com/data/user_profile_pictures/33d/676ca60dd0375d68801517488783533d.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A" alt="Profile" className='Header-profile-image' />
          <span className='user-name'>Lokendra</span>
          <i className="fi fi-rr-angle-small-down  icons arrow-down"></i>

        </div>

      </div>
    </div>
  )
}

export default Header
