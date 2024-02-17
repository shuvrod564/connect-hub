 
import TestimonialItem from '@/components/childs/TestimonialItem'
import PageHeader from '@/components/common/PageHeader' 
import React from 'react'

export const metadata = {
    title: "Testimonials"
}



const Data = [
  {
      key: "1",
      author: "Eduarda Salome",
      thumbnail: "/images/global/Eduarda-Salome.png",
      designation: "Tourist",
      desc: "Duis et tellus imperdiet, lacinia risus id, tincidunt ipsum. Intege euismod elit vel nibh commodo, at consequat nisl rhoncus. On OonAliquam tempor lorem odio, non aliquam nunc egestas in. Proin rutrum justo ac lorem pellentesque pretium. ut aliquid ex ea commodi consequatur.",
      rating: "4", 
  },
  {
      key: "2",
      author: "Leland Osinski",
      thumbnail: "/images/global/Leland-Osinski.png",
      designation: "Marketing Director",
      desc: "Duis et tellus imperdiet, lacinia risus id, tincidunt ipsum. Intege euismod elit vel nibh commodo, at consequat nisl rhoncus. On OonAliquam tempor lorem odio, non aliquam nunc egestas in. Proin rutrum justo ac lorem pellentesque pretium. ut aliquid ex ea commodi consequatur.",
      rating: "3", 
  }, 
  {
      key: "3",
      author: "Elena Orn",
      thumbnail: "/images/global/Elena-Orn.png",
      designation: "Founder of LMN Startups",
      desc: "Duis et tellus imperdiet, lacinia risus id, tincidunt ipsum. Intege euismod elit vel nibh commodo, at consequat nisl rhoncus. On OonAliquam tempor lorem odio, non aliquam nunc egestas in. Proin rutrum justo ac lorem pellentesque pretium. ut aliquid ex ea commodi consequatur.",
      rating: "5", 
  }, 
  {
      key: "4",
      author: "Melinda Bradtke",
      thumbnail: "/images/global/Melinda-Bradtke.png",
      designation: "Owner of QRS Solutions",
      desc: "Duis et tellus imperdiet, lacinia risus id, tincidunt ipsum. Intege euismod elit vel nibh commodo, at consequat nisl rhoncus. On OonAliquam tempor lorem odio, non aliquam nunc egestas in. Proin rutrum justo ac lorem pellentesque pretium. ut aliquid ex ea commodi consequatur.",
      rating: "4", 
  }, 
  {
      key: "5",
      author: "Gilberto Tremblay",
      thumbnail: "/images/global/Gilberto-Tremblay.png",
      designation: "Founder of Innovate Labs ",
      desc: "Duis et tellus imperdiet, lacinia risus id, tincidunt ipsum. Intege euismod elit vel nibh commodo, at consequat nisl rhoncus. On OonAliquam tempor lorem odio, non aliquam nunc egestas in. Proin rutrum justo ac lorem pellentesque pretium. ut aliquid ex ea commodi consequatur.",
      rating: "3", 
  }, 
  {
      key: "6",
      author: "Conrad Lubowitz",
      thumbnail: "/images/global/Conrad-Lubowitz.png",
      designation: "HR Manager at Visionary",
      desc: "Duis et tellus imperdiet, lacinia risus id, tincidunt ipsum. Intege euismod elit vel nibh commodo, at consequat nisl rhoncus. On OonAliquam tempor lorem odio, non aliquam nunc egestas in. Proin rutrum justo ac lorem pellentesque pretium. ut aliquid ex ea commodi consequatur.",
      rating: "2", 
  }, 
  {
      key: "7",
      author: "kelly Mulvihill",
      thumbnail: "/images/global/kelly-Mulvihill.png",
      designation: "Executive Director of Harmony",
      desc: "Duis et tellus imperdiet, lacinia risus id, tincidunt ipsum. Intege euismod elit vel nibh commodo, at consequat nisl rhoncus. On OonAliquam tempor lorem odio, non aliquam nunc egestas in. Proin rutrum justo ac lorem pellentesque pretium. ut aliquid ex ea commodi consequatur.",
      rating: "5", 
  }, 
  {
      key: "8",
      author: "Tina Wilkinson",
      thumbnail: "/images/global/Tina-Wilkinson.png",
      designation: "Executive Director of Harmony",
      desc: "Duis et tellus imperdiet, lacinia risus id, tincidunt ipsum. Intege euismod elit vel nibh commodo, at consequat nisl rhoncus. On OonAliquam tempor lorem odio, non aliquam nunc egestas in. Proin rutrum justo ac lorem pellentesque pretium. ut aliquid ex ea commodi consequatur.",
      rating: "5", 
  }, 
]

const page = () => {
  return (
    <main>
        <PageHeader
            title={"Testimonials "}
            banner={"/images/banners/testimonial-bg.png"}
        />


        {/* listing section start */}
        <section className="py-8 sm:py-10 md:py-12 mb-10 md:mb-14">
          <div className="container">
            <p className="text-center text-primary">Reviews</p>
            <h2 className="h2 text-center">What They’re Talking About Our Company?</h2>
             


            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-8 mt-8 lg:mt-12">
              {
                  Data.map((item)=>{
                      return <TestimonialItem key={item.key} item={item} /> 
                  })
              }
            </div>

 

           
          </div>
        </section>
        {/* listing section end */}

        {/* review submit start */}
        {/* <ReviewSubmitForm /> */}
        {/* review submit end */}

    </main>
  )
}

export default page
