import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const GetQuote = () => {
  return (
    <div className="pb-10 md:pt-3">
      <div className="container">
        <div className="bg-secondary rounded-xl pt-4 sm:pt-5 md:pt-16 px-5 sm:px-10 md:px-14 lg:px-20 bg-[url('/images/banners/quote-dot-layer.svg')] bg-no-repeat bg-center bg-cover"> 
            <div className="flex flex-row flex-wrap justify-between items-start">
                <div className="w-full md:w-[60%]">
                    <h2 className="h2 !text-white mb-4 lg:mb-6">Get Free Quotes</h2>
                    <p className="text-white font-medium mb-4 lg:mb-7">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.   
                    </p>
                    <Link href={"#"} className="text-sm sm:text-base lg:text-lg font-medium text-primary bg-white px-4 md:px-5 lg:px-8 py-2 rounded-lg inline-block">Get Quotes</Link>
                </div>
                <div className="w-full md:w-[30%]">
                    <Image src={"/images/global/expert.png"} width={240} height={351} className="mx-auto md:ml-auto md:mr-0" alt="Support Team" />
                </div>
            </div>
        </div>
      </div>
      {/* container */}
    </div>
  )
}

export default GetQuote
