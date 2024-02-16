 
import React from 'react'
import { Filter } from './Filter';   
import { HotelItemCard } from '@/components/childs/HotelItemCard';
import { HotelSearch } from '@/components/common/HotelSearch';

export const metadata = {
    title: "Hotel Listing"
}

const data = [
    {
        key: '1',
        type: "Hotel",
        name: "Antonio Home cortes Hotel",
        rating: "4.3",
        ratings: "4,786",
        location: "Bahadur Shastri Marf, Kurla West, Mumbai",
        thumbnail: "/images/global/hotels/Antonio-Home-cortes-Hotel.png"
    },
    {
        key: '2',
        type: "Restaurant",
        name: "Thai Restaurant Los Angeles",
        rating: "4.5",
        ratings: "5,786",
        location: "Pokhran Road 2, Thane West",
        thumbnail: "/images/global/hotels/Thai-Restaurant-Los-Angeles.png"
    },
    {
        key: '3',
        type: "Travel Tour",
        name: "Travel Tour Of Mountains Peak",
        rating: "4.5",
        ratings: "5,786",
        location: "The Isthmus Peak And A Lake In New Zealand",
        thumbnail: "/images/global/hotels/Travel-Tour-Of-Mountains-Peak.png"
    },
    {
        key: '4',
        type: "Ice Cream",
        name: "Chocolate Ice Cream With Nuts, Wafer Rolls",
        rating: "4.5",
        ratings: "5,786",
        location: "Oberoi Garden Estate, Andheri East, Mumbai",
        thumbnail: "/images/global/hotels/Chocolate-Ice-Cream-With-Nuts.png"
    },
    {
        key: '5',
        type: "Music",
        name: "Maya Kandon Music Concert",
        rating: "4.5",
        ratings: "5,786",
        location: "Thane Belapur Road, Mumbai",
        thumbnail: "/images/global/hotels/Maya-Kandon-Music-Concert.png"
    },
    {
        key: '6',
        type: "Gym",
        name: "Olympia Gym & Training",
        rating: "4.5",
        ratings: "5,786",
        location: "Banyan Park, Andheri East, Mumbai",
        thumbnail: "/images/global/hotels/Olympia-Gym-Training.png"
    },
    {
        key: '7',
        type: "Beauty & Spa",
        name: "Spa Salon Beauty Treatment",
        rating: "4.5",
        ratings: "5,786",
        location: "Mahape, Navi Mumbai",
        thumbnail: "/images/global/hotels/Spa-Salon-Beauty-Treatment.png"
    },
    {
        key: '8',
        type: "Education",
        name: "Indian College Students Reading",
        rating: "4.5",
        ratings: "5,786",
        location: "Kensington Sez, Powai, Mumbai",
        thumbnail: "/images/global/hotels/Indian-College-Students-Reading.png"
    },
]

const hotelFilter = [

]

const Page =()=> {
    return(
        <main>  
            <HotelSearch />

            <div className="py-8 md:py-12 md:mb-10">
                <div className="container">
                    <div className="flex flex-wrap"> 
                        <div className="col lg:pr-6">
                            <ul className="flex flex-col gap-3 md:gap-4">
                                {
                                    data.map((item)=>{
                                        return <HotelItemCard key={item.key} item={item} />
                                    })
                                }
                            </ul>

                            {/* <Pagination /> */}
                        </div>
                        <div className="w-full lg:w-[370px]">
                            <Filter />
                        </div>
                    </div>
                    {/* flex */}
                </div>
                {/* container */}
            </div>
        </main>
    )
}

export default Page;