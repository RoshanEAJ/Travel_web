import React from 'react';
import { FaMapMarkedAlt, FaEnvelope, FaPhone } from 'react-icons/fa'; // Correct icon names

const Contact = () => {
    return (
        <div className='bg-gray-100'>
            <div className='relative h-screen bg-cover bg-center h-96'
                style={{ backgroundImage: "url('/images/map_preview_KNOWN_WORLD.jpg')" }}>
                <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center'>
                    <h4 className='text-1.5xl md:text-6xl font-bold text-white mb-4'>Contact</h4>
                </div>
            </div>
            <div className='container mx-auto px-4 py-12'>
                <div className='grid gap-8 sm:grid-cols-1 md:grid-cols-2'>
                    <div className='bg-white rounded-lg shadow-md p-6'>
                        <h3 className='text-xl font-bold mb-4'>Contact Details</h3>
                        <div className='flex items-center mb-4'>
                            <FaEnvelope className='text-blue-500 mr-2' />
                            <p>info@travelagency.com</p>
                        </div>
                        <div className='flex items-center mb-4'>
                            <FaPhone className='text-blue-500 mr-2' />
                            <p>+076 877 8577</p>
                        </div>
                        <div className='flex items-center'>
                            <FaMapMarkedAlt className='text-blue-500 mr-2' />
                            <p>123 Travel st, city, country</p>
                        </div>
                    </div>
                    <div className='bg-white rounded-lg shadow-md p-6'>
                        <h3 className='text-xl font-bold mb-4'>Get in touch</h3>
                        <form>
                            <div className='mb-4'>
                                <label htmlFor="name" className='block text-gray-700 mb-2'>Name</label>
                                <input type="text" id="name" className='w-full p-2 border border-gray-300 rounded' placeholder='Enter Name' />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor="email" className='block text-gray-700 mb-2'>Email</label>
                                <input type="email" id="email" className='w-full p-2 border border-gray-300 rounded' placeholder='Enter Email' />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor="message" className='block text-gray-700 mb-2'>Message</label>
                                <textarea id="message" className='w-full p-2 border border-gray-300 rounded' placeholder='Write here...'></textarea>
                            </div>
                            <button type='submit' className='py-2 px-4 bg-blue-500 text-white rounded'>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
