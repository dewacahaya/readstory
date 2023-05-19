import "./post.css"
import {Link} from "react-router-dom"
import {useEffect} from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';
import React from "react";

export default function Post({post}) {
  const PF = "http://localhost:5000/images/"

  useEffect(()=>{
    AOS.init({duration: 1500})
  },[]);
  return (
    <div className="post" data-AOS="fade-up">
      {post.photo && (
      <img className="postImg" 
      src={PF + post.photo} alt="" 
      />
      )}
        <div className="postInfo">
          <div className="postCats">
            {post.categories.map(c=>(
                <span className="postGenre">{c.name}</span>
            ))}
          </div>
          <Link to={`/post/${post._id}`} className="link">
            <br/>
            <span className="postTitle">{post.title}</span>
          </Link>
            <hr />
            <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
            <p className="postDesc">{post.desc}</p>
          </div>
        </div>
  )
}
