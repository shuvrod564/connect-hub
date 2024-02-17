import Link from 'next/link'
import React from 'react'
import { BiMessageSquareDots } from 'react-icons/bi'
import { FaFacebookF, FaGooglePlusG, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { PiEnvelopeSimpleLight, PiPhoneCall } from 'react-icons/pi'
import { SlLocationPin } from 'react-icons/sl'
import { TfiYoutube } from "react-icons/tfi";

const QuickContact = () => {
  return (
    <div className="py-8 sm:py-10 md:py-12 md:mb-16">
      <div className="container">
        <h2 className="h2 !text-primary text-center mb-4">Quick Contact </h2>
        <p className="text-gray text-[13px] md:text-sm text-center lg:max-w-[684px] mx-auto">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-8 mt-5 md:mt-8">
            <div className="shadow-box p-5 md:p-7 rounded-lg text-center">
                <figure className="w-10 h-[42px] rounded-full flex justify-center items-center bg-primary text-white mx-auto mb-4">
                <SlLocationPin className="md:text-lg lg:text-xl" />
                </figure>
                <h3 className="text-base md:text-lg font-bold text-dark mb-3">Visit Us</h3>
                <p className=" text-gray text-[13px] md:text-sm">811 Princes Hwy, Springvale VIC 3171, Australia</p>
            </div>
        
            <div className="shadow-box p-5 md:p-7 rounded-lg text-center">
                <figure className="w-10 h-[42px] rounded-full flex justify-center items-center bg-primary text-white mx-auto mb-4">
                <PiPhoneCall className="md:text-lg lg:text-xl" />
                </figure>
                <h3 className="text-base md:text-lg font-bold text-dark mb-3">Call us</h3>
                <Link href={"tel:+61430406255"} className=" text-gray text-[13px] md:text-sm">+61 430 406 255</Link>
            </div>
        
            <div className="shadow-box p-5 md:p-7 rounded-lg text-center">
                <figure className="w-10 h-[42px] rounded-full flex justify-center items-center bg-primary text-white mx-auto mb-4">
                <PiEnvelopeSimpleLight className="md:text-lg lg:text-xl" />
                </figure>
                <h3 className="text-base md:text-lg font-bold text-dark mb-3">Email us</h3>
                <Link href={"mailto:cammarkethub@gmail.com"} className=" text-gray text-[13px] md:text-sm">cammarkethub@gmail.com</Link>
            </div>
        
            <div className="shadow-box p-5 md:p-7 rounded-lg text-center">
                <figure className="w-10 h-[42px] rounded-full flex justify-center items-center bg-primary text-white mx-auto mb-4">
                <BiMessageSquareDots className="md:text-lg lg:text-xl" />
                </figure>
                <h3 className="text-base md:text-lg font-bold text-dark mb-3">Our channel</h3>
                <div className="flex justify-center gap-2">
                    <Link href={"#"} className="w-[22px] h-[22px] rounded-md inline-flex items-center justify-center bg-[#40445A] text-white text-sm hover:bg-primary focus:bg-primary">
                        <FaFacebookF />
                    </Link>
                    <Link href={"#"} className="w-[22px] h-[22px] rounded-md inline-flex items-center justify-center bg-[#40445A] text-white text-sm hover:bg-primary focus:bg-primary">
                        <FaXTwitter />
                    </Link>
                    <Link href={"#"} className="w-[22px] h-[22px] rounded-md inline-flex items-center justify-center bg-[#40445A] text-white text-sm hover:bg-primary focus:bg-primary">
                        <FaGooglePlusG />
                    </Link>
                    <Link href={"#"} className="w-[22px] h-[22px] rounded-md inline-flex items-center justify-center bg-[#40445A] text-white text-sm hover:bg-primary focus:bg-primary">
                        <FaInstagram />
                    </Link>
                    <Link href={"#"} className="w-[22px] h-[22px] rounded-md inline-flex items-center justify-center bg-[#40445A] text-white text-sm hover:bg-primary focus:bg-primary">
                        <TfiYoutube />
                    </Link>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default QuickContact
