import React from 'react' 
import { HiMiniEye } from 'react-icons/hi2'
import Link from 'next/link'
import CategoryItem from '../common/CategoryItem'

const Data = [
    { key:1, title: "Restaurants", icon: "/images/icons/category/Restaurants.svg" },
    { key:2, title: "Hotel", icon: "/images/icons/category/Hotel.svg" },
    { key:3, title: "Beauty Spa", icon: "/images/icons/category/Beauty-Spa.svg" },
    { key:4, title: "Education", icon: "/images/icons/category/Education.svg" },
    { key:5, title: "Rent & Hire", icon: "/images/icons/category/Rent-Hire.svg" },
    { key:6, title: "Hospitals", icon: "/images/icons/category/Hospitals.svg" },
    { key:7, title: "Contractors", icon: "/images/icons/category/Contractors.svg" },
    { key:8, title: "Pet Shops", icon: "/images/icons/category/Pet-Shops.svg" },
    { key:9, title: "PG/Hostels", icon: "/images/icons/category/PG-Hostels.svg" },
    { key:10, title: "Estate Agent", icon: "/images/icons/category/Estate-Agent.svg" },
    { key:11, title: "Dentists", icon: "/images/icons/category/Dentists.svg" },
    { key:12, title: "GYM", icon: "/images/icons/category/GYM.svg" },
    { key:13, title: "Consultants", icon: "/images/icons/category/Consultants.svg" },
    { key:14, title: "Event Organisers", icon: "/images/icons/category/Event-Organisers.svg" },
    { key:15, title: "Driving Schools", icon: "/images/icons/category/Driving-Schools.svg" },
]

const BusinessCategories = () => {
  return (
    <div className="py-10 md:py-12 lg:py-16">
      <div className="container">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 gap-4"> 
            {
                Data.map((category)=>{
                    return <CategoryItem key={category.key} category={category} />
                })
            }
            <Link href={"#"} className="category__card bg-[#40445A] px-3 pt-4 pb-6 md:px-4 min-h-[9.5rem] text-center rounded-lg block hover:bg-dark group">
                <figure className="w-14 h-14 rounded-full bg-[rgba(255,255,255,0.10)] text-white flex justify-center items-center mx-auto mb-3 group-hover:bg-secondary transition-all duration-300">
                    <HiMiniEye className="text-xl md:text-2xl lg:text-3xl" />
                </figure>
                <p className="text-white font-bold">View All</p>
            </Link>
        </div>
      </div>
      {/* container */}
    </div>
  )
}

export default BusinessCategories
