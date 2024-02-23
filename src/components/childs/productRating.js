import React from 'react'
import { BiSolidStar, BiSolidStarHalf } from 'react-icons/bi'

export function ProductRating({rating, count}) {
    

    return (
        <div className="inline-flex items-center gap-2">
            <span className="inline-block text-white bg-primary rounded-md px-2 text-[12px]">{rating}</span>
            <span className="inline-flex"> 
                <BiSolidStar className="text-lg text-primary" />
                <BiSolidStar className="text-lg text-primary" />
                <BiSolidStar className="text-lg text-primary" />
                <BiSolidStar className="text-lg text-primary" />
                <BiSolidStarHalf className="text-lg text-primary" />
            </span>
            <span className="text-dark-light ml-1">{count} Ratings</span>
        </div>
    )
}
