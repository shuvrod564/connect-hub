'use client'
import Image from 'next/image'
import React, { useState } from 'react'


const data = [
    {
        type: "like",
        title: "What users like",
        features: [
            { name: "Cleanliness is good." },
            { name: "Location is optimal for a business visit." },
            { name: "User-friendly staff and great service." },
            { name: "Understanding manager." },
            { name: "Cleanliness is good." },
            { name: "Location is optimal for a business visit." },
            { name: "User-friendly staff and great service." },
            { name: "Understanding manager." },
        ]
    },
    {
        type: "improve",
        title: "What can be improved",
        features: [
            { name: "Receptionist is rude and has an attitude of superiority." },
            { name: "Misleading information about the discount provided over the phone" },
        ]
    },
]

const KeyInsides = () => {
    const [showAll, setShowAll] = useState(false)
    return (
        <>
            <div className="bg-[#F5F5F5] rounded-lg p-4 md:p-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                    {
                        data?.map((item, index)=> {
                            return (
                                <div key={index} className="flex">
                                    <div className="border border-dashed border-border-color rounded-lg p-4 md:p-5 bg-white w-full">
                                        <div className="flex flex-row mb-3">
                                            <figure className="w-7"> 
                                                {
                                                    item.type == 'like' && (
                                                        <Image src={"/images/icons/like-icon.svg"} width={20} height={20} alt="link" />
                                                    )
                                                }
                                                {
                                                    item.type == 'improve' && (
                                                        <Image src={"/images/icons/improve-icon.svg"} width={23} height={20} alt="link" />
                                                    )
                                                }
                                            </figure>
                                            <h3 className={`
                                                col font-medium
                                                ${ item.type=='like' ? "text-primary" : "text-[#E54032]" }
                                            `}>{item.title}</h3>
                                        </div>
                                        <ul className="mb-3 pl-3 flex flex-col gap-2 text-sm text-dark-light">
                                            {
                                                showAll ? (
                                                    item.features?.map((feature, index)=> {
                                                        return(
                                                            <li key={index} className="list-disc">{feature.name}</li>
                                                        )
                                                    })

                                                ) : ( 
                                                    item.features?.slice(0,3).map((feature, index)=> {
                                                        return(
                                                            <li key={index} className="list-disc">{feature.name}</li>
                                                        )
                                                    })
                                                )
                                            }
                                        </ul>
                                        {
                                            item.type == 'like' && (
                                                <button type="button" onClick={()=>setShowAll(!showAll)} className="text-primary font-medium hover:text-orange-light focus-within:text-orange-light active:text-orange-light">
                                                    { showAll ? "Show Less" : "More" }
                                                </button>
                                            )
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default KeyInsides