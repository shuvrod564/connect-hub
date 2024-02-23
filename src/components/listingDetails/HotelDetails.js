import React from 'react'
import { AmenitiesFacilities } from './AmenitiesFacilities'
import Photos from './Photos'
import KeyInsides from './KeyInsides' 
import Reviews from './Reviews'

const HotelDetails = () => {
    

    return (
        <>
            <div className="pb-12">
                <div className="container">
                    <div className="flex flex-wrap flex-row">
                        <div className="col lg:pr-10">
                            <div className="border border-border-color rounded-lg">
                                <div className=" px-4 md:px-5 pt-6 md:pt-8 pb-5 md:pb-7 lg:pb-9 border-b border-bc"> 
                                    <h2 className="text-lg md:text-xl font-bold text-dark mb-4 md:mb-5">Quick Information</h2>
                                    <div className="flex flex-row flex-wrap gap-2.5">
                                        <div className="col">
                                            <p className="mb-2.5 text-dark-light">Mode of Payment</p>
                                            <p className="text-dark font-medium mb-0">Cash, Master Card, Visa Card, Debit Cards, Credit Card</p>
                                        </div>
                                        <div className="lg:w-[40%] w-full">
                                            <p className="mb-2.5 text-dark-light">Year of Establishment</p>
                                            <p className="text-dark font-medium mb-0">2023</p>
                                        </div>
                                    </div>
                                    <p className="mb-2.5 text-dark-light mt-5">About Us</p>
                                    <p className="text-dark">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </div>
                                {/* item */}
                                
                                <div className="p-4 md:p-5 border-b border-bc"> 
                                    <AmenitiesFacilities />
                                </div>
                                {/* item */}
                                
                                <div className="p-4 md:p-5 md:pt-8 border-b border-bc"> 
                                    <h2 className="text-lg md:text-xl font-bold text-dark mb-4 md:mb-5">Photos & Videos</h2>
                                    <Photos />
                                </div>
                                {/* item */}
                                
                                <div className="p-4 md:p-5 md:pt-7 border-b border-bc"> 
                                    <h2 className="text-lg md:text-xl font-bold text-dark mb-4 md:mb-5">Key Insight</h2>
                                    <KeyInsides />
                                </div>
                                {/* item */}
                                
                                <div className="p-4 md:p-5 md:pt-7 border-b border-bc"> 
                                    <h2 className="text-lg md:text-xl font-bold text-dark mb-4 md:mb-5 lg:mb-6">Reviews & Ratings</h2>
                                    {/* <Reviews /> */}
                                </div>
                                {/* item */}
                            </div>
                            {/* border */}



                        </div>
                        {/* col */}
                        <div className="w-full lg:w-[300px] xl:w-[390px]">

                        </div>
                        {/* col */}
                    </div>
                    {/* row */}
                </div>  
                {/* container */}
            </div>
        </>
    )
}

export default HotelDetails