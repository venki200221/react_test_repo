import React, { useEffect,useState } from "react";
import Header from "../../components/header/header";
import Posts from "../../components/posts/posts";
import Sidebar from "../../components/sidebar/sidebar";
import "./home.css" ;
import axios from "axios"
import { useLocation } from "react-router";
import Footer from "../../components/footer/footer";
export default function Home(){
     const [posts,setPosts]=useState([]);
     const {search}=useLocation();
     


     useEffect(()=>{
      const fetchPosts=async()=>{
       const res=await  axios.get("http://localhost:3000/api/posts/"+search)
       setPosts(res.data)
      }
      fetchPosts()
     },[search]);
      
     const width=window.screen.width;
     console.log(width);


    return(
        
        <>
        <Header></Header>
        <div className="home">
        <Posts posts={posts} />
        {/* if(width`{'>'}`350){
        <Sidebar />
        } */}
        {/* {
            width>350?<Sidebar/>:<div/>
        } */}
        {/* <Sidebar></Sidebar> */}
        
        </div>
        <Footer />
       </>

    )
};