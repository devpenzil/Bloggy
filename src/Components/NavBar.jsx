import React from 'react'

function NavBar() {
    return (
        <div className="bg-purple-600 py-2 w-full">
            <div className="container px-2 py-2 flex flex-col md:flex-row justify-between content-center mx-auto">
                <div className="text-white font-bold text-4xl">
                    Bloggy
                </div>
                <div>
                    <div className="bg-white p-2 rounded-full">
                        <i class="ri-search-2-line m-2"></i>
                        <input type="text" name="search" id="search" className="border-0 outline-none " placeholder="search something" /> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar
