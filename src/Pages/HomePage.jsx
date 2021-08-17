import React from 'react'
import NavBar from '../Components/NavBar'
import Feed from '../Components/Feed'
function HomePage() {
    return (
        <div>
            <NavBar />
            <div className="container flex flex-col md:flex-row">
                <div className="w-10/12">
                    <Feed />
                </div>
                <div>
                    Tags will be here
                </div>
            </div>
            
        </div>
    )
}

export default HomePage
