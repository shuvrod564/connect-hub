import { Lexend_Deca } from 'next/font/google'
import Image from 'next/image'
import React from 'react'

const lexend = Lexend_Deca({
    subsets: ['latin'],
    weight: ['400','600'],
    display:'swap'
  })

const PageHeader = ({ title, banner }) => {
  return (
    <header className={`py-6 sm:py-8 md:py-10 relative lg:min-h-[320px] md:min-h-[260px] sm:min-h-[220px] min-h-[140px] flex items-center`}>
        <div className="absolute top-0 left-0 w-full h-full bg-[#00000066] z-10"></div>
        <Image src={banner} width={1920} height={400} alt="banner image" className="absolute top-0 left-0 w-full h-full z-0 object-cover" />
      <div className="container relative z-20">
        <h1 className={`${lexend.className} text-3xl md:text-4xl lg:text-5xl font-semibold text-center mt-5 mb-4 text-white`}>{title}</h1>
      </div>
    </header>
  )
}

export default PageHeader
