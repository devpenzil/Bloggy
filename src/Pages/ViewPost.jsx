import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {articles, comment} from '../Store/Api'
import NavBar from '../Components/NavBar'
import Loader from '../Components/Loader'
function ViewPost() {
    const [postdata, setPostdata] = useState()
    const [comments, setComments] = useState([])
    const fetchingPost = () => {
        axios.get(`${articles}${localStorage.getItem("postid")}`).then((Response)=>{
            setPostdata(Response.data)
           
        }).then((Error)=>{
            console.log(Error)
        })
    }
    const fetchingcomment = () => {
        axios.get(`${comment}${localStorage.getItem("postid")}`).then((Response)=>{
            setComments(Response.data)
        }).then((Error)=>{
            console.log(Error)
        })
    }
    useEffect(() => {
        fetchingPost()
        fetchingcomment()
    }, [])
  
    return (
        <div>
            <NavBar />
            {postdata ?
                <div>
                    <div className="container mx-auto mt-4">
                        <img src={postdata.social_image} alt="" className=" w-full md:w-1/2 mx-auto "/>
                            <div className="pt-8">
                                <div className="text-4xl font-bold w-full md:w-1/2 mx-auto">
                                    {postdata.title}
                                </div>
                                <div className="w-full md:w-1/2 mx-auto space-x-6 text-purple-600 text-xl font-medium my-4">
                                    <span>
                                    <i class="ri-heart-line"></i> {postdata.public_reactions_count }
                                    </span>
                                    <span>
                                    <i class="ri-chat-3-line"></i> {postdata.comments_count}
                                    </span>
                                </div>
                                <div className="w-full md:w-1/2 mx-auto" dangerouslySetInnerHTML={{__html: postdata.body_html}} />
                                
                         </div>
                               
                    </div>
                    <div className="flex flex-row md:w-1/2  w-full mx-auto">
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
            
            : <Loader />}

            <div className="container w-full md:w-1/2 mx-auto my-6">
                <h3 className="text-3xl font-medium"> Comments</h3>

                {comments ?
                    comments.map((com)=>{
                        return(
                            <div>
                                <div className="m-4 p-4 space-y-4 border-b-2 border-gray-300">
                                <img src={com.user.profile_image_90} alt="" className="w-12 rounded-full border-4 border-purple-300" />
                                <span className="text-xl font-medium">{com.user.username}</span>
                                <div dangerouslySetInnerHTML={{__html: com.body_html}} />  
                                </div>
                            </div>
                        )
                    })
                
                : <Loader />}

            </div>
            
        </div>
    )
}

export default ViewPost
