import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFeching() {
    const [state, Setstate] = useState([])

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res => {
            console.log(res)
            Setstate(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    },[])

    return (
        <div>
            <ul>
                {
                    state.map(states => <li key={states.id}>{states.title}{states.body}</li> )
                }
            </ul>
        </div>
    )
}

export default DataFeching
