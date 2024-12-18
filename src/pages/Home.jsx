import React from 'react'
import Destinations from '../component/Destinations';
import Services from '../component/Services';
import Clients from '../component/Clients';


const Home = () => {
  return (
    <>
    <div
      className='relative h-screen bg-cover bg-center'
      style={{ backgroundImage: "url('/images/map_preview_KNOWN_WORLD.jpg')" }}
    >
      <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center'>
        <h1 className='text-1.5xl md:text-6xl font-bold text-white mb-4'>Explore the Known World with Us</h1>
        <p className='text-lg md:text-2xl text-white mb-8'>Discover amazing places at exclusive deals</p>
        <button className='mt-6 px-4 py-2 bg-blue-500 text-white rounded text-lg md:text-xl hover:bg-blue-500
        transform transition duration-300 hover:scale-105 font-bold'>
            Learn More</button>
      </div> 
    </div>
    <Destinations />
    <Services />
    <Clients />
    </>
  )
}

export default Home
