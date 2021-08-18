import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {articles} from '../Store/Api'
import {useHistory} from 'react-router-dom'
import Loader from '../Components/Loader'
function Feed() {
    const [blogs, setBlogs] = useState([])
    const [pagenum, setPagenum] = useState('1')
    const history = useHistory()
    const blogsfetch = () => {
        axios.get(`${articles}?page=${pagenum}`).then((Response)=>{
            setBlogs(Response.data)
            console.log(blogs)
        }).catch((Error)=>{
            console.log(Error)
        })
    }
    const changepage = (id) => {
        setPagenum(id)
        blogsfetch()
        window.scrollTo(0,0)
    }
    const viewpost = (id,slug) => {
        history.push(`/post?slug=${slug}`)
        localStorage.setItem("postid", id)
    }
    useEffect(() => {
        blogsfetch()
    }, [])
    return (
        <div className="w-full "> 
            <div className="container mx-auto flex flex-col md:flex-row flex-wrap ">

                {blogs ?
                
                blogs.map((blogs)=>{
                    return(
                    <div className="w-full md:w-full mt-6">
                    
                        <div onClick={()=>viewpost(blogs.id, blogs.slug)} className="card h-full overflow-hidden hover:shadow-lg m-4 p-4 border-2 border-purple-400 rounded hover:shadow-lg cursor-pointer transform hover:-translate-y-2 duration-500">
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
                
                : <Loader />}

                

                
               
            </div>
            <div className="mx-auto my-8 w-max flex space-x-6">
                <div onClick={()=>changepage('1')} className="cursor-pointer px-2 bg-purple-600 font-bold text-white hover:text-purple-600 hover:bg-white hover:shadow-2xl  py-2 border-purple-600 border-2 rounded-xl">
                    1
                </div>
                <div onClick={()=>changepage('2')} className="cursor-pointer px-2 bg-purple-600 font-bold text-white hover:text-purple-600 hover:bg-white hover:shadow-2xl  py-2 border-purple-600 border-2 rounded-xl">
                    2
                </div>
                <div onClick={()=>changepage('3')} className="cursor-pointer px-2 bg-purple-600 font-bold text-white hover:text-purple-600 hover:bg-white hover:shadow-2xl  py-2 border-purple-600 border-2 rounded-xl">
                    3
                </div>
                <div onClick={()=>changepage('4')} className="cursor-pointer px-2 bg-purple-600 font-bold text-white hover:text-purple-600 hover:bg-white hover:shadow-2xl  py-2 border-purple-600 border-2 rounded-xl">
                    4
                </div>
                <div onClick={()=>changepage('5')} className="cursor-pointer px-2 bg-purple-600 font-bold text-white hover:text-purple-600 hover:bg-white hover:shadow-2xl  py-2 border-purple-600 border-2 rounded-xl">
                    5
                </div>
            </div>
        </div>
    )
}

export default Feed
