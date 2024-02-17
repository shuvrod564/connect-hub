import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CategoryItem = ({category}) => {
  return (
    <Link href={"/listing"} className="category__card px-3 pt-4 pb-6 md:px-4 min-h-[9.5rem] text-center rounded-lg block group hover:-translate-y-1">
      <Image src={category.icon} width={60} height={60} alt={category.title} className="rounded-full mx-auto mb-3" />
      <p className="text-dark group-hover:text-primary mb-0 transition-all duration-300 leading-[1.2]">{category.title}</p>
    </Link>
  )
}

export default CategoryItem
