import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdOutlineCalendarMonth } from 'react-icons/md'

const BlogAuthor = ({thumbnail, date}) => {
  return (
    <div className="flex items-center mb-4 lg:mb-5">
        <Link href={`/news/detail`} className="inline-flex items-center text-[13px] md:text-sm text=[#808080]">
            <Image
                src={thumbnail}
                alt="Admin"
                loading="lazy"
                width={30}
                height={30}
                className="w-8 h-8 rounded-full object-cover object-center"
            />
            <span className="text-[#808080] pl-3">By Admin</span>
        </Link>
        <div className="inline-flex items-center text-[13px] md:text-sm ml-5">
            <MdOutlineCalendarMonth className="text-xl text-primary" />
            <span className="text-[#808080] pl-1">{date}</span>
        </div>
    </div>
  )
}

export default BlogAuthor
