import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {tag} from '../Store/Api'
function Tags() {
    const [tags, setTags] = useState([])
    useEffect(() => {
        fetchingtags()
    }, [])
    const fetchingtags = () => {
        axios.get(`${tag}`).then((Response)=>{
            setTags(Response.data)
        }).catch((Error)=>{
            console.log(Error)
        })
    }
    return (
        <div className="w-full">
            <div className="w-full flex flex-row overflow-x-auto">

                {tags ?
                    tags.map((obj)=>{
                        const styles = {
                            color : obj.text_color_hex,
                            backgroundColor: obj.bg_color_hex,
                        }
                        return(
                            <div className="w-full m-4 shadow-md p-4 rounded text-base cursor-pointer hover:shadow-lg" style={styles}>
                                {obj.name}
                            </div>
                        )
                    })
                : "loading.."}

            </div>
        </div>
    )
}

export default Tags
