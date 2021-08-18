import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {listing} from '../Store/Api'
import Loader from './Loader'

function Listing() {
    const [lists, setLists] = useState([])
    const fetchinglist = () => {
        axios.get(`${listing}`).then((Response)=>{
            setLists(Response.data)
        }).catch((Error)=>{
            console.log(Error)
        })
    }
    useEffect(() => {
        fetchinglist()
    }, [])
    return (
        <div className="w-full">
            
            {lists ?
                lists.map((obj)=>{
                    return(
                        <div className="group hover:bg-purple-600 rounded w-full p-6 m-2 shadow-md overflow-hidden">
                            <div className="group-hover:text-white text-xl font-medium pb-4">{obj.title}</div>
                            <div className=" group-hover:text-white" dangerouslySetInnerHTML={{__html: obj.body_markdown}} />  
                            <div className="flex flex-row space-x-4 justify-center text-sm flex-wrap">
                                {obj.tags.map((tag)=>{
                                    return(
                                       <div className="p-2 m-2 group-hover:bg-white group-hover:text-purple-600 bg-purple-500 rounded-full text-white">
                                           {tag}
                                       </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })
            : <Loader />}
            

        </div>
    )
}

export default Listing
