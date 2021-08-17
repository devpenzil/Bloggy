import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {articles} from '../Store/Api'
import NavBar from '../Components/NavBar'
function ViewPost() {
    const [postdata, setPostdata] = useState()
    const fetchingPost = () => {
        axios.get(`${articles}${localStorage.getItem("postid")}`).then((Response)=>{
            setPostdata(Response.data)
           
        }).then((Error)=>{
            console.log(Error)
        })
    }
    useEffect(() => {
        fetchingPost()
    }, [])
    useEffect(() => {
        {postdata ? document.querySelector('#content').innerHTML = postdata.body_html : "not loading"}
    }, [postdata])
    return (
        <div>
            <NavBar />
            {postdata ?
                <div>
                    <div className="container mx-auto mt-4">
                        <img src={postdata.social_image} alt="" className=" w-full md:w-1/2 mx-auto "/>
                            <div className="pt-8">
                                <div className="text-4xl font-bold">
                                    {postdata.title}
                                </div>
                                
                                <div id="content" className="py-4">
                                    
                                </div>
                         </div>
                               
                    </div>
                    <div className="flex flex-row  w-full mx-auto">
                        <div className="mx-6 my-6">
                        <img src={postdata.user.profile_image_90} alt="" className="border-4 border-purple-600 rounded-full"/>
                        </div>
                        <div className="mx-6 my-6">
                            <div className="text-2xl font-medium">
                                {postdata.user.name} <br />
                               @ {postdata.user.username}
                            </div>
                        </div>
                    </div>
                </div>
            
            : "loading"}
            
        </div>
    )
}

export default ViewPost
