import Link from 'next/link'
import React from 'react'
import { BiChevronRight } from 'react-icons/bi' 
import ServiceCard from '../childs/ServiceCard'

const Data = [
    {
        key: '1',
        title: "Group Tours",
        thumbnail: "/images/global/Group-Tours.png",
        category: "Travel / Group Tours",
        view: "4531",
        location: "Ganesh Nagar, Chembur, Mumbai, 400074",
        provider: { key:"1", name: "Make my trip", logo: "/images/providers/Make-my-trip.png" } 
    },
    {
        key: '2',
        title: "Samsung Galaxy S9",
        thumbnail: "/images/global/Samsung-Galaxy-S9.png",
        category: "Mobile Phones",
        view: "1139",
        location: "58,subhadra Sadan, Gokhale Road(north), Dadar (west)",
        provider: { key:"1", name: "Flipkart", logo: "/images/providers/Flipkart.png" } 
    },
    {
        key: '3',
        title: "The Flying Carpet",
        thumbnail: "/images/global/Restaurants.png",
        category: "Restaurants",
        view: "1139",
        location: "295/2, Jor Bagh, Kotla Mubarakpur",
        provider: { key:"1", name: "Martliner", logo: "/images/providers/Martliner.png" } 
    },
    {
        key: '4',
        title: "Healthy Smiles Dental Clinic",
        thumbnail: "/images/global/Dentists.png",
        category: "Dentists",
        view: "1863",
        location: "Shree Lakshmi Towers, Mettupalayam Road, Saibabakoil",
        provider: { key:"1", name: "Dr.Anish Gayen", logo: "/images/providers/Doc.png" } 
    },
    {
        key: '5',
        title: "Group Tours",
        thumbnail: "/images/global/Group-Tours.png",
        category: "Travel / Group Tours",
        view: "4531",
        location: "Ganesh Nagar, Chembur, Mumbai, 400074",
        provider: { key:"1", name: "Make my trip", logo: "/images/providers/Make-my-trip.png" } 
    },
    {
        key: '6',
        title: "Samsung Galaxy S9",
        thumbnail: "/images/global/Samsung-Galaxy-S9.png",
        category: "Mobile Phones",
        view: "1139",
        location: "58,subhadra Sadan, Gokhale Road(north), Dadar (west)",
        provider: { key:"1", name: "Flipkart", logo: "/images/providers/Flipkart.png" } 
    },
    {
        key: '7',
        title: "The Flying Carpet",
        thumbnail: "/images/global/Restaurants.png",
        category: "Restaurants",
        view: "1139",
        location: "295/2, Jor Bagh, Kotla Mubarakpur",
        provider: { key:"1", name: "Martliner", logo: "/images/providers/Martliner.png" } 
    },
    {
        key: '8',
        title: "Healthy Smiles Dental Clinic",
        thumbnail: "/images/global/Dentists.png",
        category: "Dentists",
        view: "1863",
        location: "Shree Lakshmi Towers, Mettupalayam Road, Saibabakoil",
        provider: { key:"1", name: "Dr.Anish Gayen", logo: "/images/providers/Doc.png" } 
    },
]

const FeaturedServices = () => {
  return (
    <div className="py-10">
      <div className="container">
        <div className="flex justify-between">
            <h2 className="h2">Featured Service & Product</h2>
            <Link href={"#"} className="text-base lg:text-lg font-bold text-primary hover:text-secondary hover:underline inline-flex items-center group">
                <span>View All</span>  <BiChevronRight className="text-xl md:text-2xl transition-all duration-150 group-hover:translate-x-2" />
            </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-8">
            {
                Data.map((item)=>{
                    return <ServiceCard key={item.key} item={item} />
                })
            }
        </div>

      </div>
    </div>
  )
}

export default FeaturedServices
