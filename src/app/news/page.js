import BlogItemCard from '@/components/childs/BlogItemCard' 
import PageHeader from '@/components/common/PageHeader'
import React from 'react'

export const metadata = {
    title: "News"
}

const Data = [
  {
      key: "1",
      title: "architecture discovery with modrox",
      thumbnail: "/images/global/architecture-discovery-with-modrox.png",
      category: "Fashion",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has...",
      admin: "/images/global/admin.png",
      date: "Nov 1, 2023"
  },
  {
      key: "2",
      title: "Tips for creating a great furniture",
      thumbnail: "/images/global/Tips-for-creating-a-great-furniture.png",
      category: "Top Furniture",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has...",
      admin: "/images/global/admin.png",
      date: "Nov 1, 2023"
  },
  {
      key: "3",
      title: "Best Ice Cream Shop Name Generator",
      thumbnail: "/images/global/Best-Ice-Cream-Shop-Name-Generator.png",
      category: "Restaurant",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      admin: "/images/global/admin.png",
      date: "Nov 1, 2023"
  },
  {
      key: "4",
      title: "architecture discovery with modrox",
      thumbnail: "/images/global/architecture-discovery-with-modrox.png",
      category: "Fashion",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has...",
      admin: "/images/global/admin.png",
      date: "Nov 1, 2023"
  },
  {
      key: "5",
      title: "Tips for creating a great furniture",
      thumbnail: "/images/global/Tips-for-creating-a-great-furniture.png",
      category: "Top Furniture",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has...",
      admin: "/images/global/admin.png",
      date: "Nov 1, 2023"
  },
  {
      key: "6",
      title: "Best Ice Cream Shop Name Generator",
      thumbnail: "/images/global/Best-Ice-Cream-Shop-Name-Generator.png",
      category: "Restaurant",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      admin: "/images/global/admin.png",
      date: "Nov 1, 2023"
  },
  {
      key: "7",
      title: "architecture discovery with modrox",
      thumbnail: "/images/global/architecture-discovery-with-modrox.png",
      category: "Fashion",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has...",
      admin: "/images/global/admin.png",
      date: "Nov 1, 2023"
  },
  {
      key: "8",
      title: "Tips for creating a great furniture",
      thumbnail: "/images/global/Tips-for-creating-a-great-furniture.png",
      category: "Top Furniture",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has...",
      admin: "/images/global/admin.png",
      date: "Nov 1, 2023"
  },
  {
      key: "9",
      title: "Best Ice Cream Shop Name Generator",
      thumbnail: "/images/global/Best-Ice-Cream-Shop-Name-Generator.png",
      category: "Restaurant",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      admin: "/images/global/admin.png",
      date: "Nov 1, 2023"
  },
]

const page = () => {
  return (
    <main>
        <PageHeader
            title="News"
            banner="/images/banners/news-bg.png"
        />

        {/* listing section start */}
        <section className="py-8 sm:py-10 md:py-12 ">
          <div className="container">
            <h2 className="h2">Our News</h2>
            <div className=" w-20 h-1 bg-primary my-4"></div>
            <p className="text-[#808080]">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn&apos;t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. 
            </p>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-y-7 mt-8">
              {
                  Data.map((item)=>{
                      return <BlogItemCard key={item.key} blog={item} listingPage="true" />
                  })
              }
            </div>

              
          </div>
        </section>
        {/* listing section end */}
      
    </main>
  )
}

export default page
