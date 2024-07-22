import React, { useState } from 'react'
import './blogTemplate.css'
const BlogTemplate = () => {
 const[like,setLike]= useState(true)
  return (
    <div className="blog-content">
    <div className="blog-user-info">
      <div className="logo">
        <p>L</p>
      </div>
      <p className="user-name">Lekhansh Sachan</p>
    </div>
    <div className="blog-title">
      <h2>Lorem ipsum dolor sit amet.</h2>
    </div>
    <div className="blog-description">
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam,
        facilis?Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Consectetur, optio.
      </p>
    </div>
    <div className="blog-footer">
      <i class="fa-regular fa-face-smile"></i>
      <div className="blog-like">
        <i onClick={()=>{setLike(false)}} class={`fa-${like?'regular':'solid'} fa-heart`}></i>
      </div>
      <div className="blog-rating">
        <i class="fa-solid fa-chart-simple"></i>
        <p>30</p>
      </div>
    </div>
  </div>
  )
}

export default BlogTemplate