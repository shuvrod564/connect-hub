
import Image from 'next/image'
import React from 'react'
import { BiSearch } from "react-icons/bi";

const Search = () => {

  return (
    <div className="border-2 border-[rgba(255,255,255,0.50)] bg-[rgba(255,255,255,0.20)] p-3 rounded-lg sm:flex max-w-[850px] mx-auto">
        <div className="w-full sm:w-[40%]">
            <div className="relative"> 
                <input 
                    type="text" 
                    className="w-full h-14 bg-[#F5F5F5] pr-5 pl-10 font-medium bg-[url('/images/icons/location-pin.svg')] bg-no-repeat bg-[center_left_.75rem] rounded-lg sm:rounded-tr-none sm:rounded-br-none" 
                    placeholder='Melbourne, Victoria' 
                />
                <button className="absolute top-1/2 -translate-y-1/2 right-3">
                    <Image src={"/images/icons/location-track.svg"} width={24} height={24} alt="Location" />
                </button>
            </div>
        </div>
        <div className="w-full sm:w-[60%] sm:pl-3 mt-3 sm:mt-0">
            <div className="relative"> 
                <input 
                    type="text" 
                    className="w-full h-14 bg-[#F5F5F5] pl-5 pr-16 text-dark font-medium bg-no-repeat bg-[center_left_.75rem] rounded-lg sm:rounded-tl-none sm:rounded-bl-none" 
                    placeholder='What are you looking for?' 
                />
                <button className="absolute top-1/2 -translate-y-1/2 right-3 bg-primary text-white w-10 h-10 rounded-lg inline-flex justify-center items-center transition-all duration-200 hover:bg-dark ">
                    <BiSearch className="text-xl md:text-2xl" />
                </button>
            </div>
        </div>
    </div>
  )
}

export default Search
