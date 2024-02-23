'use client'
import React, { useEffect, useState } from 'react'  

import { TiCamera } from 'react-icons/ti'; 
import { GalleryModal } from './GalleryModal';



const images = [
  {
    original: "/images/gallery/01.jpg",
    thumbnail: "/images/gallery/01.jpg",
    type: "property",
  },
  {
    original: "/images/gallery/02.jpg",
    thumbnail: "/images/gallery/02.jpg",
    type: "property",
  },
  {
    original: "/images/gallery/03.jpg",
    thumbnail: "/images/gallery/03.jpg",
    type: "property",
  },
  {
    original: "/images/gallery/04.jpg",
    thumbnail: "/images/gallery/04.jpg",
    type: "room",
  },
  {
    original: "/images/gallery/05.jpg",
    thumbnail: "/images/gallery/05.jpg",
    type: "room",
  },
  {
    original: "/images/gallery/06.jpg",
    thumbnail: "/images/gallery/06.jpg",
    type: "room",
  },
  {
    original: "/images/gallery/07.jpg",
    thumbnail: "/images/gallery/07.jpg",
    type: "room",
  },
  {
    original: "/images/gallery/08.jpg",
    thumbnail: "/images/gallery/08.jpg",
    type: "facilities",
  },
  {
    original: "/images/gallery/09.jpg",
    thumbnail: "/images/gallery/09.jpg",
    type: "facilities",
  },
  {
    original: "/images/gallery/10.jpg",
    thumbnail: "/images/gallery/10.jpg",
    type: "room",
  },
];

const HotelGallery = ( ) => { 
  const [galleryModal, setModalGallery] = useState(false);

   
 
    return (
      <div className="relative">
        <div className="flex flex-wrap gap-2 lg:gap-3">
          <div className="sm:w-[calc(50%-8px)] w-full">
            <img
              src={"/images/gallery/01.jpg"}
              alt="Package Image"
              width={400}
              height={300}
              className="object-cover object-center w-full cursor-pointer xl:h-[476px] lg:h-[372px] md:h-[288px]"
              onClick={()=>setModalGallery(true)}
            />
          </div>
          <div className="sm:w-[calc(50%-8px)] w-full">
            <div className="flex gap-2 lg:gap-3">
              <div className="w-1/2 flex flex-col gap-2 lg:gap-3">
                <img
                  src={"/images/gallery/02.jpg"}
                  alt="Package Image"
                  width={400}
                  height={300}
                  className="object-cover object-center w-full cursor-pointer xl:h-[232px] lg:h-[180px] md:h-[140px]"
                  onClick={()=>setModalGallery(true)}
                /> 
                <img
                  src={"/images/gallery/03.jpg"}
                  alt="Package Image"
                  width={400}
                  height={300}
                  className="object-cover object-center w-full cursor-pointer xl:h-[232px] lg:h-[180px] md:h-[140px]"
                  onClick={()=>setModalGallery(true)}
                /> 
              </div>
              <div className="w-1/2 flex flex-col gap-2 lg:gap-3">
                <img
                  src={"/images/gallery/04.jpg"}
                  alt="Package Image"
                  width={400}
                  height={300}
                  className="object-cover object-center w-full cursor-pointer xl:h-[232px] lg:h-[180px] md:h-[140px]"
                  onClick={()=>setModalGallery(true)}
                /> 
                <img
                  src={"/images/gallery/05.jpg"}
                  alt="Package Image"
                  width={400}
                  height={300}
                  className="object-cover object-center w-full cursor-pointer xl:h-[232px] lg:h-[180px] md:h-[140px]"
                  onClick={()=>setModalGallery(true)}
                /> 
              </div>
            </div>
          </div>
        </div>
        <button onClick={()=>setModalGallery(true)} className="px-2 py-1 rounded-md bg-[#00000085] text-white text-sm inline-flex items-center absolute bottom-5 right-5 gap-2 font-medium transition-all duration-300 hover:bg-[#000000b6]">
          <TiCamera className="text-lg" />
          <span>View all Photos</span>
        </button>
        <GalleryModal 
          galleryModal={galleryModal} 
          setModalGallery={setModalGallery}
          images={images}
        />
      </div>
    )
 
   
  
}

export default HotelGallery
