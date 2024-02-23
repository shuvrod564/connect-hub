import Image from 'next/image';
import React from 'react'
import { PiPlayCircleLight } from 'react-icons/pi';

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
      type: "video",
    },
    {
      original: "/images/gallery/05.jpg",
      thumbnail: "/images/gallery/05.jpg",
      type: "video",
    },
    {
      original: "/images/gallery/06.jpg",
      thumbnail: "/images/gallery/06.jpg",
      type: "video",
    },
    {
      original: "/images/gallery/07.jpg",
      thumbnail: "/images/gallery/07.jpg",
      type: "video",
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

const Photos = () => {
    return(
        <>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 xl:gap-5">
                {
                    images?.map((item, index)=> {
                        return (
                            <div key={index} className="rounded-lg bg-bg-gray relative">
                                <Image
                                    src={item.thumbnail}
                                    width={250} height={200}
                                    alt='Gallery Thumbnail'
                                    className="w-full h-28 sm:h-36 lg:h-28 xl:h-40 rounded-lg object-cover object-center"
                                />
                                {
                                    item.type == 'video' && (
                                        <div className="absolute top-0 left-0 z-10 w-full h-full rounded-lg bg-[rgba(0,0,0,0.25)] flex justify-center items-center"> 
                                            <button className="inline-block rounded-full text-white text-3xl md:text-4xl hover:bg-white hover:text-primary">
                                                <PiPlayCircleLight />
                                            </button>
                                        </div>
                                    )
                                }
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Photos