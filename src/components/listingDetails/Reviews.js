import React from 'react'
import { GiveRating } from './GiveRating'
import { GrSearch } from "react-icons/gr";
import Image from 'next/image'; 
import { PiShareFatLight, PiThumbsUp } from "react-icons/pi";
import { BiChevronRight, BiMessageAlt } from "react-icons/bi";

const reviews = [
    {
        name: "Gregory M. Eicher",
        thumb: "/images/global/young-man-wearing-winter-clothes-street.png",
        count: "3",
        date: "16 Nov 2023  |  12:45",
    },
    {
        name: "Herbert M. Porter",
        thumb: "/images/global/handsome-young-man-park.png",
        count: "8",
        date: "22 Nov 2023  |  12:45",
    },
    {
        name: "Emma K. Jordan",
        thumb: "/images/global/pretty-girl-with-long-hair-posing-studio.png",
        count: "12",
        date: "16 Nov 2023  |  12:45",
    },
]

const Reviews =() => {
    return (
        <>
         
            <div className="flex flex-wrap items-center"> 
                <div className="col lg:pr-10">
                    <div className="flex items-start gap-2">
                        <span className="inline-flex items-center text-white bg-primary rounded-md px-2 text-[13px] min-w-[30px] min-h-[30px]">4.3</span>
                        <div className="col">
                            <p className="text-dark mb-1 text-[13px] font-medium !leading-[1]">256 Ratings</p>
                            <p className=" text-gray text-xs mb-0 !leading-[1.3]">Conntect Hub rating index based on 296 ratings across the web</p>

                        </div>
                    </div>
                </div>
                <div className="md:pl-10 w-full md:w-[250px] lg:border-l border-border-color mt-5 md:mt-0">
                    <p className="text-dark-light text-sm font-medium mb-2.5">Start Your Review</p>
                    <GiveRating />
                </div>
            </div>


            <ul className="flex flex-col gap-4 md:gap-5 mt-7 sm:mt-12">
                {
                    reviews.map((review, index)=> {
                        return(
                            <li key={index} className="border-b border-border-color pb-4 md:pb-5">
                                <div className="sm:flex justify-between">
                                    <div className="inline-flex gap-2">
                                        <figure>
                                            <Image
                                                src={review.thumb}
                                                width={44} height={44} 
                                                alt={review.name}
                                                className="w-11 h-11 object-cover object-center rounded-full"
                                            />
                                        </figure>
                                        <div className="col">
                                            <p className="mb-0 font-medium text-dark">{review.name}</p>
                                            <p className="mb-0 text-sm text-gray leading-[1]">{review.count} Reviews</p>
                                        </div>
                                    </div>
                                    <div className="text-gray text-sm">
                                        <span>16 Nov 2023  |  12:45</span>
                                    </div>
                                </div>
                                <Image src={"/images/icons/stars.svg"} width={89} height={16} alt='Stars' className="mt-2" />
                                <p className="text-dark-light text-sm mt-1 mb-4">
                                    Good Services
                                </p>
                                <div className="flex flex-row flex-wrap gap-3 gap-x-5">
                                    <button className="inline-flex items-center text-dark-light text-sm gap-2 hover:text-primary focus:text-primary">
                                        <PiThumbsUp className="text-lg" />
                                        <span>Helpful</span>
                                    </button>
                                    <button className="inline-flex items-center text-dark-light text-sm gap-2 hover:text-primary focus:text-primary">
                                        <BiMessageAlt className="text-lg" />
                                        <span>Comment</span>
                                    </button>
                                    <button className="inline-flex items-center text-dark-light text-sm gap-2 hover:text-primary focus:text-primary">
                                        <PiShareFatLight className="text-lg" />
                                        <span>Share</span>
                                    </button>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>

            <div className=" mt-5"> 
                <button 
                    type="button" 
                    className=" text-primary font-medium hover:text-dark focus:text-dark active:text-dark inline-flex items-center"
                >
                    Read all reviews  
                    <BiChevronRight className="text-2xl" />
                </button>
            </div>

            
        </>
    )
}

export default Reviews