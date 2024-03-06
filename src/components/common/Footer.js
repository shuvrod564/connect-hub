 
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { TbBrandInstagram } from "react-icons/tb";

const Locations = [
  { key:'1', name: "Sydney" },
  { key:'2', name: "Albury" },
  { key:'3', name: "Armidale" },
  { key:'4', name: "Bathurst" },
  { key:'5', name: "Blue Mountains" },
  { key:'6', name: "Broken Hill" },
  { key:'7', name: "Campbelltown" },
  { key:'8', name: "Cessnock" },
  { key:'9', name: "Dubbo" },
  { key:'10', name: "Goulburn" },
  { key:'11', name: "Grafton" },
  { key:'12', name: "Lithgow" },
  { key:'13', name: "Lismore" },
  { key:'14', name: "Liverpool" },
  { key:'15', name: "Newcastle" },
  { key:'16', name: "Orange" },
  { key:'17', name: "Parramatta" },
  { key:'18', name: "Penrith" },
  { key:'19', name: "Quean beyan" },
  { key:'20', name: "Tamworth" },
  { key:'21', name: "Wagga Wagga" },
  { key:'22', name: "Wollongong" }, 
]

const Categories = [
  { key:'1', name: "B2B" },
  { key:'2', name: "All India" },
  { key:'3', name: "Restaurants" },
  { key:'4', name: "Doctors" },
  { key:'5', name: "Hospitals" },
  { key:'6', name: "Schools" },
  { key:'7', name: "Colleges" },
  { key:'8', name: "AC Repair" },
  { key:'9', name: "Car Services" },
  { key:'10', name: "Hotels" },
  { key:'11', name: "Real Estate" } 
]

const Footer = async({}) => {
  
  return (
    <footer className='pt-10 bg-[#F5F5F5]'>
      <div className="container">
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-dark font-bold">Popular Locations</p>

        <div className="flex flex-row flex-wrap border-b border-border-color pb-8 sm:pb-10 md:pb-12 lg:pb-14 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          {
            Locations.map((item)=>{
              return <div key={item.key} className="inline-flex items-center">
                <Link href={"#"} className="text-[#808080] font-medium hover:text-primary leading-[175%]">{item.name}</Link>
                <span className="text-[#808080] mx-3 leading-[175%]">|</span>
              </div>
            })
          }
        </div>
 
        <div className="flex flex-wrap md:justify-center mt-7">
          <div className="w-full lg:w-[30%] lg:pr-8">
            <Link href={'/'} className='inline-block'>
              <Image 
                  src={"/images/connect-logo.png"}
                  alt='logo'
                  width={104}
                  height={56}
                  className="h-14 sm:h-auto w-auto"
              />
            </Link>
            <p className='text-[#40445A ] mt-5'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex mt-5"> 
            <Link href={"#"} target="_blank" className='text-primary border-2 border-primary rounded-md inline-block p-1 mr-2'><FaFacebookF className="sm:text-lg" /></Link>
            <Link href={"#"} target="_blank" className='text-primary border-2 border-primary rounded-md inline-block p-1 mr-2'><FaTwitter className="sm:text-lg" /></Link>
            <Link href={"#"} target="_blank" className='text-primary border-2 border-primary rounded-md inline-block p-1 mr-2'><FaLinkedinIn className="sm:text-lg" /></Link>
            <Link href={"#"} target="_blank" className='text-primary border-2 border-primary rounded-md inline-block p-1 mr-2'><TbBrandInstagram className="sm:text-lg" /></Link>
          </div>

          </div>
          <div className="w-full lg:w-[40%] mt-5 lg:mt-0">
            <p className="text-[#40445A] font-bold text-base sm:text-base md:text-lg lg:text-xl">Quik Links</p>
            <div className="grid grid-cols-2">
              <div>
                <ul className="flex flex-col gap-2">
                  <li><Link href={'/'} className="text-[13px] sm:text-sm md:text-base text-[#40445A] hover:text-primary hover:underline transition-all duration-150">Home</Link></li>
                  <li><Link href={'/'} className="text-[13px] sm:text-sm md:text-base text-[#40445A] hover:text-primary hover:underline transition-all duration-150">About Us</Link></li>
                  <li><Link href={'/listing'} className="text-[13px] sm:text-sm md:text-base text-[#40445A] hover:text-primary hover:underline transition-all duration-150">All Business List</Link></li>
                  <li><Link href={'/news'} className="text-[13px] sm:text-sm md:text-base text-[#40445A] hover:text-primary hover:underline transition-all duration-150">News</Link></li>
                  <li><Link href={'/'} className="text-[13px] sm:text-sm md:text-base text-[#40445A] hover:text-primary hover:underline transition-all duration-150">Promote Your Business</Link></li> 
                </ul>
              </div>
              <div>
                <ul className="flex flex-col gap-2">
                  <li><Link href={'/testimonials'} className="text-[13px] sm:text-sm md:text-base text-[#40445A] hover:text-primary hover:underline transition-all duration-150">Testimonials</Link></li>
                  <li><Link href={'/contact'} className="text-[13px] sm:text-sm md:text-base text-[#40445A] hover:text-primary hover:underline transition-all duration-150">Contact Us</Link></li>
                  <li><Link href={'/'} className="text-[13px] sm:text-sm md:text-base text-[#40445A] hover:text-primary hover:underline transition-all duration-150">Help & Support</Link></li>
                  <li><Link href={'/'} className="text-[13px] sm:text-sm md:text-base text-[#40445A] hover:text-primary hover:underline transition-all duration-150">Terms & Conditions</Link></li>
                  <li><Link href={'/'} className="text-[13px] sm:text-sm md:text-base text-[#40445A] hover:text-primary hover:underline transition-all duration-150">Privacy Policy</Link></li> 
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[30%] mt-5 lg:mt-0">
            <p className="text-[#40445A] font-bold text-base sm:text-base md:text-lg lg:text-xl">Popular Locations</p>

            <div className="flex flex-row flex-wrap">
              {
                Categories.map((item)=>{
                  return <div key={item.key} className="inline-flex items-center">
                    <Link href={"/listing"} className="text-[#40445A] hover:text-primary leading-[175%]">{item.name}</Link>
                    <span className="text-[#40445A] mx-3 leading-[175%]">|</span>
                  </div>
                })
              }
            </div>
          </div>
            
           
        </div>

        
      </div>
      <div className=" py-3 sm:py-4 mt-8 border-t border-border-color">
        <div className="container"> 
          <p className="text-[#808080] text-center text-[11px] sm:text-[12px] md:text-[13px] lg:text-sm mb-0">
            <span>Copyright &copy; yoursite 2023. All Rights Reserved</span> 
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
