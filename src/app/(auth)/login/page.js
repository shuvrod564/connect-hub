import SignIn from '@/components/auth/SignIn'
import React from 'react'

export const metadata = {
    title:"Login "
}

const Page = () => {
    

    return (
        <main className="min-h-screen flex items-center">
            <div className="container">
                <SignIn />
            </div>
        </main>
    )
}

export default Page