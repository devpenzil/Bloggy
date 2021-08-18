import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'

function NavBar() {
    const history = useHistory()
    const [search, setSearch] = useState("")
    const gotosearch = () => {
        
        localStorage.setItem("tagname", search)
        history.push(`/result?${search}`)
    }
    return (
        <div className="bg-purple-600 py-2 w-full">
            <div className="container px-2 py-2 flex flex-col md:flex-row justify-between content-center mx-auto">
                <div onClick={()=>history.push('/')} className="text-white font-bold text-4xl cursor-pointer">
                    Blogggy
                </div>  
                <div>
                    <div className="bg-white p-2 rounded-full">
                        <form onSubmit={gotosearch}>
                        <i class="ri-search-2-line m-2"></i>
                        <input onChange={(e)=>setSearch(e.target.value)} type="text" name="search" id="search" className="border-0 outline-none " placeholder="search something" /> 
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar
