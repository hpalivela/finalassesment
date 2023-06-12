import React, { useState,useEffect } from 'react'

const Blog = () => {
    const[data,setData]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts').then((response)=>response.json().then((json)=>setData(json)));
    })
  return (
    <div>
       {data.map((item,key)=>(
            <p key={key}> {item.body}</p>
       ))}
    </div>
  )
}

export default Blog


