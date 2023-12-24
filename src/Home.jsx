
import './Home.css'
import { ImgWithBlurredCaption } from './small-components/ImageCaption';
import { Imagecrousal } from './small-components/crousal'
import ThreeAssetCard from './3Dcontent/render';


function Home() {

    const assetURL = 'src/3Dcontent/Chair.glb';

    
    const backgroundStyle = {
        background: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, .85)), url("src/Assets/hero-1.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };
    return (
        <> 
            <div className="h-screen flex flex-wrap" style={backgroundStyle}>
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
            <div className='h-screen w-full'>
                <div className='flex flex-col flex-wrap gap-20 p-20 justify-center'>
                    <div className="w-full text-white">
                        <h1 className=" text-center text-5xl font-bold underline underline-offset-8">Best Picks</h1>
                    </div>
                    <div className="flex justify-center gap-20 flex-wrap">



                        {/* <div className="hover:scale-110 hover:transition-all">
                            <div>
                                <ImgWithBlurredCaption imgSRC="src/ExtraImages/papers.co-vu67-art-line-purple-red-pattern-29-wallpaper.jpg" capHead="FirstProduct" capDetail="This is my first product" capPrice="120/-" />
                            </div>
                            <div className="h-10"> 
                                
                            </div>
                        </div>
                        <div>
                            <div>

                            </div>
                            <div>
                                <ImgWithBlurredCaption imgSRC="src/ExtraImages/papers.co-vu67-art-line-purple-red-pattern-29-wallpaper.jpg" capHead="FirstProduct" capDetail="This is my first product" capPrice="120/-" /></div>

                        </div> */}

                        {/* <ThreeAssetCard asset={assetURL}/> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
