import Image from "next/image";
import Link from "next/link"; 
import React from "react"; 
import { BsArrowRight } from "react-icons/bs";

const BlogItemCard = ({ blog }) => {    
  return (
    <div className="blog__card p-2 sm:p-3 md:p-4 lg:p-5 rounded-lg">
        <Link href={`#`} className="block rounded-lg">
            <Image
                src={blog.thumbnail}
                alt="Tour Image"
                loading="lazy"
                width={318}
                height={188}
                className="rounded-lg w-full 2xl:h-[210px] xl:h-[185px] lg:h-[160px] md:h-[170px] sm:h-[134px] h-[140px] object-cover object-center"
            />
        </Link>
        <div className="pt-3 sm:pt-4">
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-black hover:text-primary mb-2">
                <Link href={`#`}>{blog?.title || blog?.title}</Link>
            </h3>
            <div className="mb-5">
                <Link href={"#"} className="inline-block px-3 py-1 leading-[1] bg-secondary text-white text-[12px] font-medium rounded-sm hover:bg-primary">
                    {blog.category}
                </Link>
            </div>
            <p className="text-[13px] sm:text-sm text-[#808080]">
                {blog.desc}
            </p>
            <Link href={"#"} className="text-primary font-medium inline-flex items-center group hover:text-dark hover:underline"> 
                <span className='mr-2'>Read story</span>
                <BsArrowRight className="text-xl transition-all duration-200 group-hover:translate-x-2" />
            </Link>
        </div>
    </div>
    // <div className="tour__card p-2 sm:p-3 rounded-lg">
    //     <Link href={`/blog/${blog?.page_slug}`} className="block rounded-lg">
    //         <Image
    //             src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${blog?.blog_image}`}
    //             alt="Tour Image"
    //             loading="lazy"
    //             width={blog_grid_image_width}
    //             height={blog_grid_image_height}
    //             className="rounded-lg w-full 2xl:h-[210px] xl:h-[185px] lg:h-[160px] md:h-[170px] sm:h-[134px] h-[140px] object-cover object-center"
    //         />
    //     </Link>
    //     <div className="pt-3 sm:pt-4">
    //         <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-black hover:text-primary">
    //             <Link href={`/blog/${blog?.page_slug}`}>{blog?.title || blog?.title}</Link>
    //         </h2>
    //         <div className="text-black inline-flex items-center mt-2 md:mt-3"> 
    //             <CalendarIcon />
    //             <span className='ms-2 text-[11px] sm:text-[12px] md:text-sm lg:text-base'>{new Date(blog?.created_date).toLocaleDateString('en-us',blog_date_format_options)}</span>
    //         </div>
    //     </div>
    // </div>
  );
};

export default BlogItemCard;
