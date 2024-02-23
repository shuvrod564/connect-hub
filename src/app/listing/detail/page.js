 
 
import HotelDetails from '@/components/listingDetails/HotelDetails';
import HotelShortInfo from '@/components/listingDetails/HotelShortInfo';
import HotelGallery from '@/components/listingDetails/gallery/HotelGallery';
import React from 'react' 

export const metadata = {
    title: "Hotel Listing"
}
 

const Page = () => {
    return (
        <main className="pt-8 md:pt-10 lg:pt-12">
            <div className="container">
                <HotelGallery />
            </div>

            <HotelShortInfo />

            <HotelDetails />

        </main>
    )
}

export default Page;