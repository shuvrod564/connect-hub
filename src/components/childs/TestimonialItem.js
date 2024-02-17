import Image from 'next/image'
import React from 'react'  
import Ratings from './Ratings'

const TestimonialItem = ({item}) => {
  return (
    <div className="shadow-box p-4 md:p-5 lg:p-6 rounded-lg">
        <div className="sm:flex items-center justify-between mb-4 md:mb-5 lg:mb-6">
            <div className="inline-flex items-center w-full sm:w-[calc(100%-116px)] pr-2">
                <Image
                    src={item.thumbnail}
                    width={70} height={70}
                    alt={item.author} 
                    className="rounded-full w-16 h-16 object-cover"
                />
                <div className="w-[calc(100%-64px)] pl-3">
                    <h3 className="text-base md:text-lg font-bold text-[#000000] mb-2 sm:mb-0 leading-[1.1]">{item.author}</h3>
                    <p className="mb-0 text-sm md:text-base text-gray leading-[1.1]">{item.designation}</p>
                </div>
            </div>
            <div className="w-[116px] ml-[75px] sm:ml-0">
                <Ratings rating={item.rating} />
            </div>
        </div>
        <p className="text-sm md:text-base text-gray tracking-wider pl-3 relative">
            <span className="absolute top-1 left-0"> 
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={9} height={7} fill="none" 
                >
                    <path fill="#1CA45C" d="M3.375 0C1.519 0 0 1.575 0 3.5V7h3.375V3.5h-2.25c0-1.295 1.001-2.333 2.25-2.333V0ZM9 0C7.144 0 5.625 1.575 5.625 3.5V7H9V3.5H6.75c0-1.295 1.001-2.333 2.25-2.333V0Z" />
                </svg>
            </span>
            {item.desc}
            <span className="inline-block"> 
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={10} height={7} fill="none" 
                >
                    <path fill="#1CA45C" d="M6.25 7C8.313 7 10 5.425 10 3.5V0H6.25v3.5h2.5c0 1.295-1.112 2.333-2.5 2.333V7ZM0 7c2.063 0 3.75-1.575 3.75-3.5V0H0v3.5h2.5c0 1.295-1.113 2.333-2.5 2.333V7Z" />
                </svg>
            </span>
        </p>
    </div>
  )
}

export default TestimonialItem
