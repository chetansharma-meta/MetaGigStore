import React from 'react'
import './Home.css'

function Home() {
    const backgroundStyle = {
        backgroundImage: 'url("src/Assets/hero-1.jpg")', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: '0.5',
      };
  return (
    <>
        <div className="h-screen" style={backgroundStyle}>

        hii
        </div>
    </>
  )
}

export default Home
