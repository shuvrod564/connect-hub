import Image from 'next/image'
import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { SettingIcon } from '@/components/common/Icons'

export function HotelSearch() {
    

    return (
        <div className="py-8 md:py-12  bg-[url('/images/banners/hotel-search-bg.png')]">
            <div className="container">
                <div className="flex flex-wrap max-w-[800px] xl:max-w-full mx-auto">
                    <div className="sm:flex w-full xl:w-[40%] 2xl:w-[45%]">
                        <div className="w-full sm:w-[45%]">
                            <div className="relative"> 
                                <input 
                                    type="text" 
                                    className="w-full h-12 bg-[#F5F5F5] pr-5 pl-10 font-medium bg-[url('/images/icons/location-pin.svg')] bg-no-repeat bg-[center_left_.75rem] rounded-lg sm:rounded-tr-none sm:rounded-br-none" 
                                    placeholder='Melbourne, Victoria' 
                                />
                                <button className="absolute top-1/2 -translate-y-1/2 right-3">
                                    <Image src={"/images/icons/location-track.svg"} width={24} height={24} alt="Location" />
                                </button>
                            </div>
                        </div>
                        <div className="w-full sm:w-[55%] sm:pl-3 mt-3 sm:mt-0">
                            <div className="relative"> 
                                <input 
                                    type="text" 
                                    className="w-full h-12 bg-[#F5F5F5] pl-5 pr-16 text-dark font-medium bg-no-repeat bg-[center_left_.75rem] rounded-lg sm:rounded-tl-none sm:rounded-bl-none" 
                                    placeholder='What are you looking for?' 
                                />
                                <button className="absolute top-1/2 -translate-y-1/2 right-1 bg-primary text-white w-10 h-10 rounded-lg inline-flex justify-center items-center transition-all duration-200 hover:bg-dark ">
                                    <BiSearch className="text-xl md:text-2xl" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[60%] 2xl:w-[55%] xl:pl-3 mt-3 xl:mt-0">
                        <div className="flex flex-wrap bg-white rounded-lg">
                            <div className="w-1/2 sm:w-[15%]">
                                <select name="" id="" className="w-full h-12 bg-white rounded-tl-lg sm:rounded-bl-lg border-r border-border-color px-4 bg-[url('/images/icons/caret-down.svg')] bg-no-repeat bg-[center_right_0.625rem] border-b sm:border-b-0">
                                    <option value="Sort By" selected>Sort By</option>
                                    <option value="Name">Name</option>
                                </select>
                            </div>
                            <div className="w-1/2 sm:w-[17%]">
                                <select name="" id="" className="w-full h-12 bg-white rounded-tr-lg sm:rounded-tr-none sm:border-r border-border-color pr-4 pl-7 bg-[url('/images/icons/star.svg')] bg-no-repeat bg-[center_left_0.5rem] border-b sm:border-b-0">
                                    <option value="Top Rated" selected>Top Rated</option>
                                    <option value="Low Rated">Low Rated</option>
                                </select>
                            </div>
                            <div className="w-1/2 sm:w-[17%]">
                                <select name="" id="" className="w-full h-12 bg-white border-r border-border-color pr-4 pl-9 bg-[url('/images/icons/sheild.svg')] bg-no-repeat bg-[center_left_0.75rem] border-b sm:border-b-0">
                                    <option value="Verified" selected>Verified</option>
                                    <option value="Unverified">Unverified</option>
                                </select>
                            </div>
                            <div className="w-1/2 sm:w-[15%]">
                                <select name="" id="" className="w-full h-12 bg-white sm:border-r border-border-color px-4 bg-[url('/images/icons/caret-down.svg')] bg-no-repeat bg-[center_right_0.625rem] border-b sm:border-b-0">
                                    <option value="Rating" selected>Rating</option>
                                    <option value="1 star">1 star</option>
                                    <option value="2 star">2 star</option>
                                    <option value="3 star">3 star</option>
                                    <option value="4 star">4 star</option>
                                    <option value="5 star">5 star</option>
                                </select>
                            </div>
                            <div className="w-1/2 sm:w-[15%]">
                                <select name="" id="" className="w-full h-12 bg-white rounded-tl-lg rounded-bl-lg border-r border-border-color pr-4 pl-9 bg-[url('/images/icons/sheild.svg')] bg-no-repeat bg-[center_left_0.75rem]">
                                    <option value="Trust" selected>Trust</option>
                                    <option value="Unverified">Unverified</option>
                                </select>
                            </div>
                            <div className="w-1/2 sm:w-[20%] flex">
                                <button className="px-4 py-2 flex justify-center items-center gap-3 w-full">
                                    <SettingIcon />
                                    <span>All Filters</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* flex */}
            </div>
            {/* container */}
        </div>
    )
}
