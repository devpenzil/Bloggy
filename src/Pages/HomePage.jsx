import React from 'react'
import NavBar from '../Components/NavBar'
import Feed from '../Components/Feed'
function HomePage() {
    return (
        <div>
            <NavBar />
            <div className="container flex flex-col md:flex-row py-10">
                <div className="w-10/12">
                    <Feed />
                </div>
                <div className="mt-6 ">
                    <div className="m-4 p-4">
                     Tags will be here
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default HomePage
