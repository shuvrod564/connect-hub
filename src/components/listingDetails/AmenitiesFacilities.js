"use client"
import React, { useState } from 'react' 
import { FaCircleCheck } from 'react-icons/fa6' 

const data = [
    {
        key: '1',
        facility: "Timing",
        facilities: [
            { key: "1", name: "Check In- 11:00 Am" },
            { key: "2", name: "Check Out- 10:00 Am" },
        ]
    }, 
    {
        key: '2',
        facility: "Facilities",
        facilities: [  
            { name: "Wi-fi Available" },
            { name: "Air Conditioned" },
            { name: "Housekeeping" },
            { name: "Luggage Storage" },
        ]
    },
    {
        key: '3',
        facility: "Services",
        facilities: [
            { name: "Wake-Up Calls" },
            { name: "24 Hour Concierge/Help Desk" },
            { name: "Bellboy Service" },
            { name: "Room Service" },
        ]
    },
    {
        key: '4',
        facility: "Getting around",
        facilities: [
            { key: "1", name: "Airport transfer" },
            { key: "2", name: "Car park [free of charge]" },
            { key: "3", name: "Car park [nearby]" },
            { key: "4", name: "Rental car" }, 
            { key: "5", name: "Shuttle service" }, 
            { key: "6", name: "Taxi service" }, 
        ]
    },
    {
        key: '5',
        facility: "Conveniences",
        facilities: [
            { key: "1", name: "Air conditioning in public area" },
            { key: "2", name: "Cash withdrawal" },
            { key: "3", name: "Concierge" },
            { key: "4", name: "Contactless check-in/out" }, 
            { key: "5", name: "Convenience store" }, 
            { key: "6", name: "Currency exchange" }, 
            { key: "7", name: "Daily housekeeping" }, 
            { key: "8", name: "Doorman" }, 
            { key: "9", name: "Dry cleaning" }, 
            { key: "10", name: "Elevator" }, 
            { key: "11", name: "Facilities for disabled guests" }, 
            { key: "12", name: "Fireplace" }, 
            { key: "13", name: "Food delivery" }, 
            { key: "14", name: "Gift/souvenir shop" },  
        ]
    },
    {
        key: '6',
        facility: "Cleanliness and safety",
        facilities: [
            { key: "1", name: "Anti-viral cleaning products" },
            { key: "2", name: "Body thermometer" },
            { key: "3", name: "Breakfast in room" },
            { key: "4", name: "Breakfast takeaway service" }, 
            { key: "5", name: "Cashless payment service" }, 
            { key: "6", name: "Covid-19 testing service" }, 
            { key: "7", name: "Daily disinfection in all rooms" }, 
            { key: "8", name: "Daily disinfection in common areas" }, 
            { key: "9", name: "Doctor/nurse on call" },    
        ]
    },
    {
        key: '7',
        facility: "Dining, drinking, and snacking",
        facilities: [
            { key: "1", name: "A la carte breakfast" },
            { key: "2", name: "Alternative meal arrangement" },
            { key: "3", name: "BBQ facilities" },
            { key: "4", name: "Bottle of water" }, 
            { key: "5", name: "Breakfast [continental]" }, 
            { key: "6", name: "Coffee shop" }, 
            { key: "7", name: "Fruits/snacks" }, 
            { key: "8", name: "Grocery delivery" },  
        ]
    },
    {
        key: '8',
        facility: "Available in all rooms",
        facilities: [
            { key: "1", name: "Accessible by stairs" },
            { key: "2", name: "Accessible toilet" },
            { key: "3", name: "Adapted bath" },
            { key: "4", name: "Adapter" }, 
            { key: "5", name: "Additional bathroom" }, 
            { key: "6", name: "Additional toilet" }, 
            { key: "7", name: "Alarm clock" }, 
            { key: "8", name: "Baby safety gates" }, 
            { key: "9", name: "Balcony/terrace" }, 
            { key: "10", name: "Blackout curtains" }, 
            { key: "11", name: "Carpeting" },  
        ]
    } 
]

export function AmenitiesFacilities() {
    const [ showAll, setShowAll ] = useState(false)
     
    return (
        <>
            
            <div className="h-full max-h-[320px] overflow-y-auto md:max-h-full">
                <div className="block md:columns-3 sm:columns-2 columns-1 gap-4">  
                    {
                        showAll ? (
                            data?.map((item)=>{
                                return(
                                    <div key={item.key} className="block break-inside-avoid mb-5 md:mb-8">
                                        <p className="text-dark-light font-bold mb-4 md:mb-5 text-base sm:text-lg lg:text-xl">{item.facility}</p>
                                        <ul className="flex flex-col gap-3 text-dark-light text-sm md:text-base">
                                            {
                                                item.facilities?.map((facility, index)=>{
                                                    return(
                                                        <li key={index} className="flex items-center gap-2">
                                                            <FaCircleCheck className=" text-secondary text-base sm:text-lg"  />
                                                            <span>{facility.name}</span>
                                                        </li> 
                                                    )
                                                })
                                            }
                                            
                                        </ul>
                                    </div>
                                )
                            })

                        ) : (

                            data?.slice(0, 3).map((item)=>{
                                return(
                                    <div key={item.key} className="block break-inside-avoid mb-5 md:mb-8">
                                        <p className="text-dark-light font-bold mb-4 md:mb-5 text-base sm:text-lg lg:text-xl">{item.facility}</p>
                                        <ul className="flex flex-col gap-3 text-dark-light text-sm md:text-base">
                                            {
                                                item.facilities?.map((facility, index)=>{
                                                    return(
                                                        <li key={index} className="flex items-center gap-1">
                                                            <span className="w-5 md:w-6 inline-block"> 
                                                                <FaCircleCheck className=" text-secondary text-base sm:text-lg"  />
                                                            </span>
                                                            <span className="col">{facility.name}</span>
                                                        </li> 
                                                    )
                                                })
                                            }
                                            
                                        </ul>
                                    </div>
                                )
                            })
                        )
                    }
                    
                        
                </div> 
            </div>
            <button 
                type="button"
                onClick={()=>setShowAll(!showAll)}
                className="border border-border-color rounded-lg px-5 flex items-center h-8 md:h-10 text-dark hover:bg-bg-gray"
            >
                { showAll ? "Show Less" : "View All" }
            </button>
        </>
    )
}
