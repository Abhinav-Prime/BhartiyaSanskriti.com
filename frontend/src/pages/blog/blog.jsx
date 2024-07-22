import React from "react";
import "./blog.css";
import BlogTemplate from "../../components/blogTemplate/blogTemplate";

const Blog = () => {

  return (
    <div className="blog">
      <div className="blog-header">
        <h1>Blogs</h1>
      </div>
     {
      [1,2,3,4,5].map(()=>(
        <BlogTemplate></BlogTemplate>
      ))
     }
    </div>
  );
};

export default Blog;
