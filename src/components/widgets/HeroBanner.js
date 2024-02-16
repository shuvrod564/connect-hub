import React from 'react' 
import { Lexend_Deca } from 'next/font/google'
import Search from '@/components/common/Search' 

const lexend = Lexend_Deca({
  subsets: ['latin'],
  weight: ['400','600'],
  display:'swap'
})

const HomeBanner = () => {
  return (
    <header className="py-14 md:pt-28 lg:pt-36 bg-[url('/images/banners/hero-banner.jpg')] bg-no-repeat bg-center bg-cover lg:min-h-[600px] md:min-h-[520px] min-h-[400px]">
      <div className="container">
        <div className="text-center"> 
          <div className="inline-block px-3 py-2 rounded-md bg-secondary text-white">Over 1,50,000 Active Business</div>
          <h1 className={`${lexend.className} text-3xl md:text-4xl lg:text-5xl font-semibold mt-5 mb-4 text-white`}>Australia&apos;s Largest Marketplace</h1>
          <p className={`${lexend.className} text-lg md:text-xl lg:text-2xl text-white mb-8`}>Search from over 10,000 products & services</p>
          <Search />
        </div>
      </div>
    </header>
  )
}

export default HomeBanner
