import React from 'react'   
import { TbShare3 } from 'react-icons/tb'
import { PiHeartStraightBold } from 'react-icons/pi'
import Link from 'next/link'
import { ProductRating } from '../childs/productRating'
import { CheckDarktIcon, PhoneCallWhiteIcon, StarIcon, VerifiedIcon, WhatsappColoredIcon } from '../common/Icons'

const HotelShortInfo = () => {
    

    return (
        <>
            <div className="pb-8 md:pb-12 pt-5 sm:py-6">
                <div className="container"> 
                    <div className="flex flex-row flex-wrap gap-2.5 items-center mb-3">
                        <h1 className="text-xl md:text-2xl font-semibold text-dark col">Antonio Home cortes Hotel</h1>
                        <div className="inline-flex flex-wrap sm:justify-end gap-2.5 sm:w-[258px] w-full">
                            <span className="inline-block px-2.5 py-1 bg-[#D1FFBD] text-primary text-xs sm:text-sm rounded-md">9 Years in Business</span>
                            <span className="inline-block px-2.5 py-1 bg-[#D1FFBD] text-primary text-xs sm:text-sm rounded-md">4 Star Hotel</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-6 items-center xl:gap-x-10">
                        <ProductRating rating={'4.3'} count="4445" />
                        <div className="flex flex-wrap gap-3 text-[#40445A] text-sm font-medium"> 
                            <div className="inline-flex item-center gap-2 text-primary">
                                <VerifiedIcon />
                                <span>Verified</span>
                            </div>
                            <div className="inline-flex item-center gap-2 text-dark-light">
                                <CheckDarktIcon />
                                <span>Claimed</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap gap-5 items-center mt-4 sm:mt-5">
                        <div className="col">
                            <div className="flex flex-wrap gap-2.5">
                                <button className="btn-primary gap-2 items-center font-bold !py-2 sm:!py-2.5 !px-3 sm:!px-4 md:!px-5 sm:h-10 h-8">
                                    <PhoneCallWhiteIcon />
                                    <span>Show Number</span>
                                </button>
                                <button className="btn-primary gap-2 items-center font-bold !py-2 sm:!py-2.5 !px-3 sm:!px-4 md:!px-5 sm:h-10 h-8 !bg-white border border-[#D3D3D3] !text-[#40445A] hover:!bg-light-gray">
                                    <WhatsappColoredIcon />
                                    <span>Chat</span>
                                </button>
                                <button className="btn-primary gap-2 items-center font-bold !py-2 sm:!py-2.5 !px-3 sm:!px-4 md:!px-5 sm:h-10 h-8 !bg-white border border-[#D3D3D3] !text-[#40445A] hover:!bg-light-gray">
                                    <StarIcon />
                                    <span>Tap to Rate</span>
                                </button>
                                <button className="btn-primary gap-2 items-center font-bold !py-2 sm:!py-2.5 !px-3 sm:!px-4 md:!px-5 sm:h-10 h-8 !bg-white border border-[#D3D3D3] !text-[#40445A] hover:!bg-light-gray">
                                    <TbShare3 className="text-lg md:text-xl text-primary" />
                                    <span>Share</span>
                                </button>
                                <button className="btn-primary gap-2 items-center font-bold !py-2 sm:!py-2.5 sm:h-10 h-8 !px-2.5 !bg-white border border-[#D3D3D3] !text-[#40445A] hover:!bg-light-gray">
                                    <PiHeartStraightBold className="text-lg md:text-xl text-primary" /> 
                                </button>
                            </div> 
                        </div>
                        <div className="inline-flex flex-wrap md:justify-end gap-2.5 md:w-[258px] w-full"> 
                            <Link href={"#"} className="bg-primary p-4 px-4 sm:px-5 py-2 rounded-lg text-white text-center hover:bg-secondary focus:bg-secondary active:bg-secondary">
                                <span className="text-base sm:text-lg font-bold block">Enquire Now</span>
                                <span className="text-sm block">get free details instantly via sms</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HotelShortInfo