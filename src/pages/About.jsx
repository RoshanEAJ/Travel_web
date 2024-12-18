import React from 'react';
import { FaMapMarkedAlt, FaEnvelope, FaPhone } from 'react-icons/fa'; 

const About = () => {
    return (
        <>
            <div className='bg-gray-100'>
                <div className='relative h-screen bg-cover bg-center'
                    style={{ backgroundImage: "url('/images/map_preview_KNOWN_WORLD.jpg')" }}>
                    <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center'>
                        <h4 className='text-1.5xl md:text-6xl font-bold text-white mb-4'>About Us</h4>
                    </div>
                </div>
            </div>
            <div className='container mx-auto px-4 py-12'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <div className='flex items-center justify-center'>
                        <img src="/images/map_preview_KNOWN_WORLD.jpg" alt="About Us" className='rounded-lg shadow-md w-full h-auto' />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h3 className='text-2xl font-bold mb-4'>Who We Are</h3>
                        <p className='text-gray-700 mb-4'>
                            We are a passionate travel agency dedicated to providing the best travel experiences. With our extensive knowledge and a love for adventure, we help travelers explore the world with confidence.
                        </p>

                        <h3 className='text-2xl font-bold mb-4'>Our Mission</h3>
                        <p className='text-gray-700 mb-4'>
                            Our mission is to create amazing experiences that inspire and enrich your life. We strive to make every trip unforgettable by offering personalized services and exceptional travel packages.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
