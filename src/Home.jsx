
import './Home.css'
import { Imagecrousal } from './small-components/crousal'

function Home() {
    const backgroundStyle = {
        background: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, .85)), url("src/Assets/hero-1.jpg")', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };
  return (
    <>
        {/*  */}
        <div className="h-screen flex flex-row" style={backgroundStyle}> 
            <div className="h-full flex flex-col justify-center px-20">
                <h1 className="text-6xl text-white">Meta<span className='text-[#A7F432] font-bold '>GigS</span>tore</h1>
                <h2 className="text-3xl text-white">The best place to buy 3D models and HDRI&apos;s</h2>
                <div className="flex flex-row py-5">
                    <button className="bg-white text-black px-5 py-2 rounded-lg hover:bg-[#A7F432]">Shop Now</button>
            </div>
            </div>
            <div className="h-4/5 w-1/2 my-20 py-20 px-10">
                <Imagecrousal />
            </div>
        </div>
        <div className='h-screen'>
            <div className='flex flex-column'>
                
            </div>
        </div>
    </>
  )
}

export default Home
