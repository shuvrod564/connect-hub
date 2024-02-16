import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { SlLocationPin } from "react-icons/sl";
import { BsArrowRight } from "react-icons/bs";

const ServiceCard = ({item}) => {
  return (
    <div className="border border-border-color rounded-lg bd-white overflow-hidden">
        <Link href={"#"} className="block">
            <Image src={item.thumbnail} width={303} height={188} alt={item.title} 
                className="w-full h-[188px] object-contain"
            />
        </Link>
        <div className="px-5 py-4 border-b border-border-color">
            <div className="flex justify-between mb-2">
                <div className="w-[calc(100%-4rem)]">
                    <Link href={"#"} className="text-primary text-[13px] font-medium hover:text-dark hover:underline">{item.category}</Link>
                </div>
                <div className="text-primary w-[4rem] text-[13px] md:text-sm inline-flex justify-end items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={15}
                        height={14}
                        fill="none" 
                    >
                        <path
                        stroke="#1CA45C"
                        d="M7.75 7.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                        />
                        <path
                        stroke="#1CA45C"
                        d="M12.42 6.535c.096.19.145.286.145.465 0 .18-.049.274-.145.465-.47.925-1.811 2.91-4.67 2.91s-4.2-1.985-4.67-2.91c-.096-.19-.145-.286-.145-.465 0-.18.049-.274.145-.465.47-.925 1.811-2.91 4.67-2.91s4.2 1.985 4.67 2.91Z"
                        />
                        <path
                        stroke="#1CA45C"
                        strokeLinecap="round"
                        d="M11.5 1h.15c1.343 0 2.015 0 2.433.417.417.418.417 1.09.417 2.433V4m-3 9h.15c1.343 0 2.015 0 2.433-.417.417-.418.417-1.09.417-2.433V10M4 1h-.15c-1.344 0-2.015 0-2.433.417C1 1.835 1 2.507 1 3.85V4m3 9h-.15c-1.344 0-2.015 0-2.433-.417C1 12.165 1 11.493 1 10.15V10"
                        />
                    </svg>
                    <span className="pl-1">{item.view}</span>
                </div>
            </div>
            <h3 className="text-base md:text-lg font-semibold mb-3">
                <Link href={"#"} className="text-dark hover:text-primary hover:underline">{item.title}</Link>
            </h3>
            <div className="flex">
                <figure className="w-5 pt-1.5">
                    <SlLocationPin className="text-[#808080]" />
                </figure>
                <div className="w-[calc(100%-20px)] text-[13px] sm:text-base text-[#808080] pl-1">
                    {item.location}
                </div>
            </div>
        </div>
        <div className="px-5 py-4 flex items-center">
            <div className="w-[calc(100%-24px)] pr-3">
                <Link href={"#"} className="inline-flex items-center font-medium text-primary hover:text-dark">
                    <Image src={item.provider.logo} width={32} height={32} className="rounded-full object-cover" alt={'logo'} />
                    <span className="pl-2">{item.provider.name  }</span>
                </Link>
            </div>
            <div className="w-6">
                <Link href={"#"} className="text-primary text-xl lg:text-2xl">
                    <BsArrowRight />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default ServiceCard
