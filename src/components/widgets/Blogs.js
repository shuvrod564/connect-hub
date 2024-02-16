import Link from 'next/link'
import React from 'react'
import { BiChevronRight } from 'react-icons/bi' 
import BlogItemCard from '@/components/childs/BlogItemCard'

const Data = [
    {
        key: "1",
        title: "Cities Finest Spa",
        thumbnail: "/images/global/Cities-Finest-Spa.png",
        category: "Fashion",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
    },
    {
        key: "2",
        title: "Tips for creating a great furniture",
        thumbnail: "/images/global/Tips-for-creating-a-great-furniture.png",
        category: "Top Furniture",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
    },
    {
        key: "3",
        title: "Best Ice Cream Shop Name Generator",
        thumbnail: "/images/global/Best-Ice-Cream-Shop-Name-Generator.png",
        category: "Restaurant",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
    },
]

const Blogs = () => {
  return (
    <div className="py-10 md:py-14">
      <div className="container">
        <div className="flex justify-between">
            <h2 className="h2">Latest News</h2>
            <Link href={"#"} className="text-base lg:text-lg font-bold text-primary hover:text-secondary hover:underline inline-flex items-center group">
                <span>View All</span>  <BiChevronRight className="text-xl md:text-2xl transition-all duration-150 group-hover:translate-x-2" />
            </Link>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
            {
                Data.map((item)=>{
                    return <BlogItemCard key={item.key} blog={item} />
                })
            }
        </div>

      </div>
      {/* container */}
    </div>
  )
}

export default Blogs
