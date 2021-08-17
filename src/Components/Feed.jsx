import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {articles} from '../Store/Api'
function Feed() {
    const [blogs, setBlogs] = useState([])
    const blogsfetch = () => {
        axios.get(`${articles}`).then((Response)=>{
            setBlogs(Response.data)
            console.log(blogs)
        }).catch((Error)=>{
            console.log(Error)
        })
    }
    useEffect(() => {
        blogsfetch()
    }, [])
    return (
        <div className="w-full py-10"> 
            <div className="container mx-auto flex flex-col md:flex-row flex-wrap ">

                {blogs ?
                
                blogs.map((blogs)=>{
                    return(
                    <div className="w-full md:w-full mt-6">
                    
                        <div className="card h-full overflow-hidden hover:shadow-lg m-4 p-4 border-2 border-purple-400 rounded hover:shadow-lg cursor-pointer transform hover:-translate-y-2 duration-500">
                            <div className="flex flex-row content-center my-2">
                                <img src={blogs.user.profile_image_90} alt="profile_picture" className="w-12 rounded-full border-4 border-purple-300" />
                                <div className="m-2 text-xl font-meddium">{blogs.user.username}</div>
                            </div>
                            <div className="text-2xl font-bold"> 
                                {blogs.title}
                            </div>
                            <div>{blogs.description} <span className="text-purple-600">Read more...</span></div>
                            <div>{blogs.reading_time_minutes} minutes read</div>
                            <div className="h-full w-12 bg-purple-500 absolute top-0 right-0  ">
                                <div className="h-1/2 flex flex-col justify-center font-bold text-white items-center w-full content-center">
                                    <i class="ri-heart-line"></i>
                                    {blogs.public_reactions_count}
                                </div>
                                <div className="h-1/2 flex flex-col justify-center font-bold text-white items-center w-full content-center">
                                    <i class="ri-chat-3-line"></i>
                                    {blogs.comments_count}
                                </div>
                            </div>
                        </div>
    
                    </div>
                    )
                })
                
                : "loading"}

                
               
            </div>
        </div>
    )
}

export default Feed
