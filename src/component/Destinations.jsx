import React from 'react';

const destinations = [
  {
    image: '/images/img1.jpg',
    title: 'Paris, France',
    description: 'The City of Light draws millions of visitors every year',
  },
  {
    image: '/images/img2.jpg',
    title: 'Bali, Indonesia',
    description: 'Bali is a living postcard, an Indonesian paradise',
  },
  {
    image: '/images/img3.jpg',
    title: 'New York, USA',
    description: 'New York City is the largest city in the United States',
  },
  {
    image: '/images/img4.jpg',
    title: 'Tokyo, Japan',
    description: 'A bustling city that blends tradition and modernity',
  },
]

const Destinations = () => {
  return (
    <div className='py-12 bg-gray-100'>
        <div className='container mx-auto px-4'>
      <h3 className='text-3xl text-center font-bold mb-8'>Popular Destinations</h3>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {destinations.map((city, index) => (
          <div key={index} className='bg-white rounded-lg shadow-lg overflow-hidden'>
            <img src={city.image} alt={city.title} className='w-full h-48 object-cover
            transform transition duration-300 hover:scale-110' />
            <div className='p-4'>
              <h4 className='text-xl font-bold mb-2'>{city.title}</h4>
              <p className='text-gray-700'>{city.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Destinations
