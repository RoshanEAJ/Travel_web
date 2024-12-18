import React from 'react';
import { FaConciergeBell, FaHotel, FaPlane, FaUmbrellaBeach } from 'react-icons/fa';

const services = [
  {
    icon: <FaPlane className='text-4xl text-blue-500'/>,
    title: 'Flight booking',
    description: 'We provide easy and quick flight booking services to make your travel',
  },
  {
    icon: <FaHotel className='text-4xl text-blue-500'/>,
    title: 'Hotel booking',
    description: 'Book hotels at the best prices with our exclusives deals and discounts',
  },
  {
    icon: <FaUmbrellaBeach className='text-4xl text-blue-500'/>,
    title: 'Beach Tours',
    description: 'Enjoy relaxing beach prices with our exlusive deals and discounts.',
  },
  {
    icon: <FaConciergeBell className='text-4xl text-blue-500'/>,
    title: 'Concierge Services',
    description: 'Get personalized concierge services for a seamless travel experience.',
  },
]

const Services = () => {
  return (
    <div className='py-12 bg-gray-100'>
        <div className='container mx-auto px-4'>
      <h3 className='text-3xl text-center font-bold mb-8'>Our Services</h3>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {services.map((service, index) => (
          <div key={index} className='bg-white rounded-lg shadow-md flex flex-col p-8 items-center cursor-pointer transform transition duration-300 hover:scale-110'>
            <div className='mb-4'>{service.icon}</div>
          
              <h4 className='text-xl font-bold mb-2'>{service.title}</h4>
              <p className='text-gray-700'>{service.description}</p>
        
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Services
