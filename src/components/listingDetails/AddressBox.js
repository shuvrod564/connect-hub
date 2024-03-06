import React from 'react' 
import { MdOutlineMail } from 'react-icons/md'
import Link from 'next/link'
import { DirectionIcon, SMSIcon } from '../common/Icons'

export function AddressBox(props) {
    

    return (
        <>
            <div className="border  border-bc rounded-lg">
                <div className="px-4 sm:px-5 pt-5 sm:pt-6 pb-5 border-b border-bc">
                    <h2 className="text-lg md:text-xl font-bold text-dark mb-3">Address</h2>
                    <p className="text-gray">
                        BN 4, Webel IT Park, Tower - I, Module 905, Salt lake city Sector V, Kolkata 700091, WB
                    </p>
                    <button className="text-primary font-bold inline-flex items-center gap-2.5">
                        <DirectionIcon />
                        <span>Get Directions</span>
                    </button>
                </div>
                <div className="px-4 sm:px-5 pt-5 pb-5 md:pb-8 text-dark-light">
                    <ul className="flex flex-col gap-4">
                        <li className="flex flex-wrap items-center gap-2.5">
                            <MdOutlineMail className="text-primary text-xl" />
                            <span>Send Enquiry by Email</span>
                        </li>
                        <li className="flex flex-wrap items-center gap-2.5">
                            <SMSIcon />
                            <span>Get info via SMS/Email</span>
                        </li>
                    </ul>
                </div>
            </div>  

            <div className="border  border-bc rounded-lg mt-5">
                <div className="px-4 sm:px-5 pt-5 sm:pt-6 pb-5">
                    <h2 className="text-lg md:text-xl font-bold text-dark mb-5">Get the list of best <span className="text-primary">&quot;Hotels&quot;</span></h2>
                     
                    <form className="flex flex-col gap-4 sm:gap-5">
                        <div>
                            <div className="relative"> 
                                <input type="text" className="form-control !font-normal" placeholder="Name" />
                            </div>
                        </div>
                        <div>
                            <div className="relative"> 
                                <input type="text" className="form-control !font-normal" placeholder="Phone Number" />
                            </div>
                        </div>
                        <div>
                            <button className="btn-primary w-full !font-bold text-center justify-center mt-2 h-12">Enquire Now &gt;&gt;&gt;</button>
                        </div>
                    </form>
                </div> 
            </div>  

            <div className="border  border-[#FFD5D1] bg-[#FFD5D1] rounded-lg mt-5">
                <div className="px-4 sm:px-5 pt-5 sm:pt-6 pb-7 sm:pb9">
                    <h2 className="text-lg md:text-xl font-bold text-[#E34133] mb-5">Report an error</h2>
                    <p className="text-dark-light mb-5">
                        Help us to make &quot;Cam Market Hub&quot; more updated and more relevant for you.
                    </p>
                     
                    <Link href="#" className="bg-white rounded-lg font-bold text-[#E34133] px-5 py-2.5 inline-block hover:bg-dark focus:bg-dark active:bg-dark"> 
                    Report Now
                    </Link>
                </div> 
            </div>  
        </>
    )
}
