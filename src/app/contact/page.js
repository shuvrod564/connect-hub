 
import React from 'react'
import QuickContact from './QuickContact'
import PageHeader from '@/components/common/PageHeader'

export const metadata = {
    title: "Contact us"
}

const page = () => {
    return (
        <main>
            <PageHeader
                title={"Contact Us "}
                banner="/images/banners/contact-page-bg.png"
            />


            <section className="py-10 md:py-16 lg:py-20 bg-[#F5F5F5]"> 
                <div className="container relative z-10">
            
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 lg:gap-12">
                        <div> 
                            <p className="text-primary mb-2">Get in Touch</p>
                            <h2 className="h2 mb-5 md:mb-8"> 
                                How can we help you
                            </h2>
                             
                            <form action="#">
                                <div className="mb-4 md:mb-5">
                                    <input type="text" className="form-control" placeholder="Your name*" />
                                </div>
                                <div className="mb-4 md:mb-5">
                                    <input type="text" className="form-control" placeholder="Your Email*" />
                                </div>
                                <div className="mb-4 md:mb-5">
                                    <input type="text" className="form-control" placeholder="Subject*" />
                                </div>
                                <div className="mb-4 md:mb-5">
                                    <textarea cols={100} rows={4} className="form-control" placeholder="Message*" />
                                </div>
                                <div>
                                    <button className="bg-primary text-white px-5 py-2 lg:rounded-lg md:rounded-md rounded inline-flex text-sm lg:text-base font-bold">Submit</button>
                                </div>
                            </form>
                        </div>
                        <div className="">
                            <div className="bg-white p-3 shadow-box">
                                <iframe className="w-full aspect-video" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3146.7883411989906!2d145.15569907589105!3d-37.93537487194528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad615e24fcd0741%3A0xa20f5a7a80779a71!2sCam%20Market%20Hub!5e0!3m2!1sen!2sbd!4v1700596208869!5m2!1sen!2sbd" width={600} height={450}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> 
                            </div>
                        </div>
                    </div>
                </div>
                {/* container */}
            </section>


            <QuickContact />


        </main>
    )
}

export default page
