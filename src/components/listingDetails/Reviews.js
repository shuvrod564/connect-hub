import React from 'react'
import { GiveRating } from './GiveRating'

const Reviews =() => {
    return (
        <>
        
            <div className="flex flex-wrap flex-row">
                <div className="col lg:pr-10">
                <div className="flex items-start gap-2">
                    <span className="inline-flex items-center text-white bg-primary rounded-md px-2 text-[13px] min-w-[30px] min-h-[30px]">4.3</span>
                    <div className="col">
                        <p className="text-dark mb-0 text-[13px] font-medium !leading-[1]">256 Ratings</p>
                        <p className=" text-gray-light text-xs md:text-sm mb-0 !leading-[1.3]">Cam Market Hub rating index based on 296 ratings across the web</p>

                    </div>
                </div>
                </div>
                <div className="lg:pl-10 lg:w-[250px] lg:border-l border-border-color">
                    <p className="text-dark-light font-medium mb-2.5">Start Your Review</p>
                    <GiveRating />
                </div>
            </div>
        </>
    )
}

export default Reviews