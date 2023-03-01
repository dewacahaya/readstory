import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import { Link } from "react-router-dom";
import "./sidebar.css"

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(()=>{
    const getCats = async ()=> {
      const res = await axios.get("/categories")
      setCats(res.data);
    };
    getCats();
  },[]);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT THIS WEBSITE</span> 
            <img 
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" 
            alt="" />
            <p>This website was created with the hope of increasing young children's interest in reading by presenting interesting stories</p>
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">CATEGORIES</span> 
      <ul className="sidebarList">
        {cats.map((c)=>(
          <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
          </Link>
        ))}
      </ul>
      </div>
    </div>
  )
}
