import React from 'react';

const testimonials = [
  {
    name: 'John Doe',
    image: '/images/per.jpg',
    text: 'This travel agency provided excellent services and helped us plan the perfect vacation.',
    location: 'New York, USA'

  },
  {
    name: 'Jane Smith',
    image: '/images/per1.jpg',
    text: 'Amazing experience! The tour guidence were knowledgeable and destinations were.',
    location: 'London, UK'
  },
  {
    name: 'Alice Johnson',
    image: '/images/per2.jpg',
    text: 'Greate customer services and fantastic travel packeges. will definitely book with them ',
    location: 'Sydney, Australia'
  },
   
]

const Clients = () => {
  return (
    <div className='py-12 bg-gray-100'>
        <div className='container mx-auto px-4'>
      <h2 className='text-3xl text-center font-bold mb-8'>What our client say</h2>
      <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {testimonials.map((testimonials, index) => (
          <div key={index} className='bg-white rounded-lg shadow-md text-center p-6 cursor-pointer transform transition duration-300 hover:scale-110'>
            <img src={testimonials.image} alt="" className='w-24 h-24 rounded-full mx-auto mb-4'/>
          
              <h4 className='text-xl font-bold mb-2'>{testimonials.name}</h4>
              <p className='text-gray-600'>{testimonials.location}</p>
              <p className='text-gray-600 italic'>{testimonials.text}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Clients
