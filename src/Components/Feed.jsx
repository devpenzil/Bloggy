import React from 'react'

function Feed() {
    return (
        <div className="w-full py-10"> 
            <div className="container mx-auto flex flex-col md:flex-row flex-wrap ">

                <div className="w-full md:w-1/3">
                    
                    <div className="card h-full hover:shadow-lg m-4 p-4 border-2 border-purple-400 rounded hover:shadow-lg cursor-pointer transform hover:-translate-y-2 duration-500">
                        Hello
                    </div>

                </div>
               
            </div>
        </div>
    )
}

export default Feed
