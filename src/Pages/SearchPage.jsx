import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useHistory} from 'react-router-dom'
import NavBar from '../Components/NavBar'
import {blogbytag} from '../Store/Api'
function SearchPage() {
    const history = useHistory()
    const [blogs, setBlogs] = useState([])
    const fetchingblogs = () => {
        axios.get(`${blogbytag}${localStorage.getItem("tagname")}`).then((Response)=>{
            setBlogs(Response.data)
            console.log(blogs)
        }).catch((Error)=>{
            console.log(Error)
        })
    }
    const gotopost = (id) => {
        localStorage.setItem("postid", id)
        history.push('/post')
    }
    useEffect(() => {
        fetchingblogs()
    }, [])
    return (
        <div>
            <NavBar />
            <div className="container mx-auto">
                <div className="my-4 text-4xl font-medium">Result for "{`${localStorage.getItem("tagname")}`}"</div>


                {blogs ?
                    blogs.map((obj)=>{
                        return(
                        <div onClick={()=> gotopost(obj.id)} className="w-full md:w-full mt-6">
                    
                    <div className="card h-full overflow-hidden hover:shadow-lg m-4 p-4 border-2 border-purple-400 rounded hover:shadow-lg cursor-pointer transform hover:-translate-y-2 duration-500">
                        <div className="flex flex-row content-center my-2">
                            <img src={obj.user.profile_image_90} alt="profile_picture" className="w-12 rounded-full border-4 border-purple-300" />
                            <div className="m-2 text-xl font-meddium">{obj.user.username}</div>
                        </div>
                        <div className="text-2xl font-bold"> 
                            {obj.title}
                        </div>
                        <div>{obj.description} <span className="text-purple-600">Read more...</span></div>
                        <div>{obj.reading_time_minutes} minutes read</div>
                        <div className="h-full w-12 bg-purple-500 absolute top-0 right-0  ">
                            <div className="h-1/2 flex flex-col justify-center font-bold text-white items-center w-full content-center">
                                <i class="ri-heart-line"></i>
                                {obj.public_reactions_count}
                            </div>
                            <div className="h-1/2 flex flex-col justify-center font-bold text-white items-center w-full content-center">
                                <i class="ri-chat-3-line"></i>
                                {obj.comments_count}
                            </div>
                        </div>
                    </div>

                </div>

                        )
                    })
                : ""}

                
            </div>
        </div>
    )
}

export default SearchPage
