'use client'
import React, { useEffect, useState } from 'react' 
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import { AiFillPicture } from 'react-icons/ai';
import Image from 'next/image';
import { IoMdTrain } from 'react-icons/io';
import { FaPlaneDeparture } from 'react-icons/fa';
import { IoClose, IoLocationSharp, IoWifiSharp } from 'react-icons/io5';
import { BsGridFill } from 'react-icons/bs'; 

const RightSideInfo = ()=>{
    return(
        <div className="flex flex-col p-4 md:py-7">
            <p className="text-lg font-medium mb-3">Things you&apos;ll love</p>
            <ul className="flex flex-col gap-2 text-[13px] text-black">
                <li className="flex gap-1.5">
                    <IoMdTrain className="text-xl" />
                    <span>290 meters to public transportation</span>
                </li>
                <li className="flex gap-1.5">
                    <FaPlaneDeparture className="text-lg" />
                    <span>Airport transfer</span>
                </li>
                <li className="flex gap-1.5">
                    <IoLocationSharp className="text-lg" />
                    <span>Located in heart of Kuala Lumpur</span>
                </li>
                <li className="flex gap-1.5">
                    <IoWifiSharp className="text-lg" />
                    <span>Free Wi-Fi in all rooms!</span>
                </li>
            </ul>
        </div>
    )
}

const RightSideActions = ()=>{
    return(
        <div className="flex flex-col p-4 border-t border-border-color">
            <p className="text-[13px] sm:text-sm"> 
                <span className="text-gray mr-3 line-through">₹ 2,100</span>
                <span className="text-dark text-base md:text-lg lg:text-xl font-semibold">₹ 1,020</span> <br />
                <span className="text-black pt-1 block">+ ₹199 taxes and charges</span>
            </p> 
             
        </div>
    )
}

export function GalleryModal({galleryModal, setModalGallery, images}) {
    const [galleryType, setGalleryType] = useState('gallery');
    const [galleryArray, setGalleryArray] = useState(images);
    const [activeFilterBtn, setActiveFilterBtn] = useState('');
 
    // console.log(galleryArray);
        
    const filterDummyArray = [
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

    const filterOnlyRooms =()=>{ 
        const filtered = filterDummyArray.filter(filterDummyArray => filterDummyArray.type === 'room');
        setGalleryArray(filtered);
        setActiveFilterBtn('rooms')
    }
    const filterOnlyProperty =()=>{ 
        const filtered = filterDummyArray.filter(filterDummyArray => filterDummyArray.type === 'property');
        setGalleryArray(filtered);
        setActiveFilterBtn('property')
    }
    const showAllGallery =()=> {
        const filtered = filterDummyArray;
        setGalleryArray(filtered);
        setActiveFilterBtn('all')
    }

    // useEffect(()=>{
    //     filterOnlyRooms();
    // },[])

    return (
        <>
            {
                galleryModal && (
                    <div className="fixed flex top-0 left-0 w-full h-full z-50 bg-[rgba(0,0,0,0.75)] fade items-center justify-center p-4">
                        <div className="w-full h-full max-w-[1240px] max-h-[720px] overflow-auto rounded-lg location-shadow bg-white text-left relative flex flex-col" style={{alignSelf:'center'}}>
                            <div className="w-full h-full flex flex-col">
                                <div className="flex border-b border-border-color shadow justify-between items-center py-2.5 px-4 w-full h-auto">
                                    <div className="inline-flex items-center">
                                        <div className="min-w-[126px]"> 
                                            {
                                                galleryType === 'gallery' && (
                                                    <button 
                                                        type="button" 
                                                        onClick={()=>setGalleryType('slider')}
                                                        className="px-3 py-1 text-sm border border-primary rounded-3xl inline-flex items-center gap-2 text-primary"
                                                    >
                                                        <AiFillPicture className="text-base" />
                                                        <span>Slideshow</span>
                                                    </button>
                                                )
                                            }
                                            {
                                                galleryType === 'slider' && (
                                                    <button 
                                                        type="button" 
                                                        onClick={()=>setGalleryType('gallery')}
                                                        className="px-3 py-1 text-sm border border-primary rounded-3xl inline-flex items-center gap-2 text-primary"
                                                    >
                                                        <BsGridFill className="text-base" />
                                                        <span>Gallery</span>
                                                    </button>
                                                )
                                            }
                                        </div>
                                        
                                        <button 
                                        type="button" onClick={showAllGallery}
                                        className={`text-black px-4 py-1 ${activeFilterBtn === 'all' ? 'text-primary' : null}`}
                                        >
                                        All (34)
                                        </button>
                                        <button 
                                        type="button"
                                        className={`text-black px-4 py-1 ${activeFilterBtn === 'video' ? 'text-primary' : null}`}
                                        >
                                        Video (0)
                                        </button>
                                        <button 
                                        type="button" onClick={filterOnlyRooms}
                                        className={`text-black px-4 py-1 ${activeFilterBtn === 'rooms' ? 'text-primary' : null}`}
                                        >
                                        Rooms (4)
                                        </button>
                                        <button 
                                        type="button"  onClick={filterOnlyProperty}
                                        className={`text-black px-4 py-1 ${activeFilterBtn === 'property' ? 'text-primary' : null}`}
                                        >
                                        Property views (6)
                                        </button>
                                    </div>
                                    <button className="p-0 border-0 rounded-full text-2xl text-[#707070]" onClick={()=>setModalGallery(false)}><IoClose/></button>
                                </div>
                                {/* flex */}

                                    
                                {
                                    galleryType === 'gallery' && (
                                        <div className="flex w-full h-full min-h-0 flex-row justify-between">
                                            <div className="w-full overflow-y-auto pt-2.5 px-3 border-r border-border-color"> 
                                                <div className="flex flex-row flex-wrap w-[calc(100%+4px)] max-w-[calc(100%+4px)] m-[calc(-2px)]">
                                                        {
                                                            galleryArray.map((item, index)=>{
                                                                return (
                                                                    <div key={index} className="md:w-[33.333%] basis-[33.333%] flex p-[calc(2px)]">
                                                                        <button type="button" className="block p-0" onClick={()=>setGalleryType('slider')}>
                                                                            <Image 
                                                                                src={item.original} 
                                                                                width={400} height={400}
                                                                                alt="gallery thumb" 
                                                                                className="rounded-sm h-[180px] md:h-[240px] lg:h-[198px] object-cover object-center"
                                                                            />
                                                                        </button>
                                                                    </div>
                                                                )
                                                            })
                                                        } 
                                                </div> 
                                            </div>
                                            {/* col */}
                                            <div className="max-w-[287px] w-full h-full flex flex-col">
                                                <RightSideInfo />
                                            </div>
                                        </div>
                                    )
                                }
                                {
                                    galleryType === 'slider' && ( 
                                        <div className="flex w-full h-full min-h-0 flex-row justify-between">
                                            <div className="w-[calc(100%-287px)]">
                                                <ImageGallery items={galleryArray} />
                                            </div>
                                            {/* col */}
                                            <div className="max-w-[287px] w-full flex flex-col justify-between">
                                                <RightSideInfo />
                                                <RightSideActions />
                                            </div>
                                        </div> 
                                    )
                                }

                            </div>
                            {/* w-full */}
                        </div>
                    </div> 
                )
            }
        </>
    )
}
