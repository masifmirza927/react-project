import React from 'react'
import bgImg from "../images/background.jpg";

function Home() {
  return (
    <div className='header' style={{ backgroundImage: `url(${bgImg})` }}>
        <h1 className='topHeading'>Pakistan's Largest Platform for Foodies!</h1>
    </div>
  )
}

export default Home