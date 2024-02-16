import Link from 'next/link'
import React from 'react'

const data = [
    {
        key: '1',
        name: "Hotel",
        category: [
            { key: '1', name: "1 Star Hotel" },
            { key: '2', name: "2 Star Hotel" },
            { key: '3', name: "3 Star Hotel" },
            { key: '4', name: "4 Star Hotel" },
            { key: '5', name: "5 Star Hotel" },
            { key: '6', name: "Hotel ₹501 to ₹1000" },
            { key: '7', name: "Hotel ₹1001 to ₹2000" },
            { key: '8', name: "Hotel ₹2001 to ₹3000" },
            { key: '91', name: "Hotel ₹3001 to ₹4000" },
            { key: '10', name: "Hotel ₹4001 to ₹5000" },  
        ]
    },
    {
        key: '2',
        name: "Related categories in Kolkata",
        category: [
            { key: '1', name: "Hotel With Swimming Pool" }, 
            { key: '2', name: "Beach Hotel" }, 
            { key: '3', name: "Village Hotel" }, 
            { key: '4', name: "Pet Friendly Hotel" }, 
            { key: '5', name: "Eco Friendly Hotel" }, 
            { key: '6', name: "Spa Hotel" }, 
            { key: '7', name: "Hotel In Kolkata" }, 
            { key: '8', name: "Hotel In Burrabazar" }, 
            { key: '9', name: "Hotel In Behala" }, 
            { key: '10', name: "Hotel In Barasat" },  
        ]
    },
    {
        key: '3',
        name: "Popular B2B Categories Across India",
        category: [ 
            { key: '1', name: "Global Desi Navy Blue Kurti" }, 
            { key: '2', name: "Global Desi Pink Dotted Kurti" }, 
            { key: '3', name: "Global Desi S Red Kurta" }, 
            { key: '4', name: "Global Desi Solid XS Kurti" }, 
            { key: '5', name: "Global Desi XXL Off White Kurti" }, 
            { key: '6', name: "GLOBAL PACKAGING Hanging Hook" }, 
            { key: '7', name: "Global Positioning System Devices" }, 
            { key: '8', name: "Global Rang Collar Shirt" }, 
            { key: '9', name: "Global Vision Pouch Glasses" }, 
            { key: '10', name: "Global Water Solutions Short Body Tap" }, 
        ] 
    },
]

export function Filter() {
    

    return (
        <div className="flex flex-col gap-4 md:gap-5">
            {
                data.map((item, index)=>{
                    return ( 
                        <div key={index} className="rounded-lg border border-border-color">
                            <div className="px-5 py-3 border-b border-border-color">
                                <h3 className="text-sm sm:text-base font-bold text-[#40445A]">{item.name}</h3>
                            </div>
                            <div className="px-4 md:px-5 pb-5 pt-3">
                                <ul className="leading-[225%]">
                                    {
                                        item.category.map((cate, index)=> {
                                            return (
                                                <li key={index}>
                                                    <Link href={"#"} className="text-[#40445A] hover:text-primary hover:underline">{cate.name}</Link>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                                <button className="text-primary font-bold">See More..</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
