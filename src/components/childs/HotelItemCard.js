import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { PhoneCallWhiteIcon, StarIcon, TrustedIcon, VerifiedIcon, WhatsappColoredIcon } from '@/components/common/Icons'
import { TfiLocationPin } from 'react-icons/tfi'
import { IoHeart } from 'react-icons/io5'

export function HotelItemCard({item}) {
    

    return (
        <li className="shadow rounded-lg p-3 lg:p-4 sm:flex relative">
            <button className="absolute text-[#CCCCCC] text-2xl top-5 right-5 hover:text-primary transition-all duration-300">
                <IoHeart />
            </button>
            <Link href={"#"} className="w-full sm:w-[280px] block rounded-lg overflow-hidden">
                <Image 
                    src={item.thumbnail} 
                    alt={item.name} width={280} height={320} 
                    className="w-full object-cover h-[200px] sm:h-[234px]" 
                />
            </Link>
            <div className="col sm:pl-5 mt-4 sm:mt-0">
                <p className="mb-1 small font-medium text-primary">{item.type}</p>
                <h2>
                    <Link href={"#"} className="text-dark text-lg font-bold hover:text-primary focus:text-primary hover:underline">{item.name}</Link>
                </h2>
                <div className="flex flex-wrap items-center gap-2 mt-1.5">
                    <span className="px-2 py-1 rounded-lg bg-primary text-white text-[12px] font-medium">{item.rating}</span>
                    <span className="text-[#40445A] text-[13px] font-medium">{item.ratings} Ratings</span>
                </div>
                <div className="flex flex-wrap gap-3 text-[#40445A] text-sm font-medium mt-3 sm:mt-4">
                    <div className="inline-flex item-center gap-2">
                        <TrustedIcon />
                        <span>Trust</span>
                    </div>
                    <div className="inline-flex item-center gap-2">
                        <VerifiedIcon />
                        <span>Verified</span>
                    </div>
                    <div className="inline-flex item-center gap-2">
                        <StarIcon />
                        <span>Top Rated</span>
                    </div>
                </div>
                <div className="text-sm text-[#808080] pl-5 relative mt-3">
                    <TfiLocationPin className="text-lg absolute top-0 left-0" />
                    <span>{item.location}</span>
                </div>
                <div className="flex gap-3 sm:gap-4 mt-3">
                    <button className="btn-primary gap-2 items-center font-bold !py-2 sm:!py-2.5">
                        <PhoneCallWhiteIcon />
                        <span>Show Number</span>
                    </button>
                    <button className="btn-primary gap-2 items-center font-bold !py-2 sm:!py-2.5 !bg-white border border-[#D3D3D3] !text-[#40445A] hover:!bg-light-gray">
                        <WhatsappColoredIcon />
                        <span>Chat</span>
                    </button>
                </div>
            </div>
        </li>
    )
}
