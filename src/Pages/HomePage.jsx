import React from 'react'
import NavBar from '../Components/NavBar'
import Feed from '../Components/Feed'
import Tags from '../Components/Tags'
import Listing from '../Components/Listing'
function HomePage() {
    return (
        <div>
            <NavBar />
            <Tags />
            <div className="container mx-auto flex flex-col md:flex-row py-10">
                <div className="w-full md:w-8/12">
                    <Feed />
                </div>
                <div className="w-full md:w-4/12">
                    <div className="m-4 p-4">
                     <Listing />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default HomePage
