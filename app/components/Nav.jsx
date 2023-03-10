"use client";
import { useState } from "react";
import Link from "next/link";
import Cross from "../icons/Cross";
import Bars from "../icons/Bars";

export default function Nav (){

    const [openNav, setOpenNav]=useState(false);

    function toggleNav (){
    
        setOpenNav((prevstat)=>!prevstat);
        const html = document.querySelector("html");
        html.classList.toggle("overflow-none");
    }

   let navStyle ="";
    if(openNav){
        navStyle="nav-open";
   
    }
    return (
        <div className="nav-cont margin-b-m ">
       <p className="logo"> home cinema</p>
       <button className="nav-btn" onClick={toggleNav}>
           {openNav?  <Cross></Cross> :<Bars/>}

     
            
        </button>
        {openNav?
        <nav className={`nav ${navStyle}`}>
     
       
     <ul className="nav__list">
         <li>
             <Link className="nav__link" href="/" onClick={toggleNav}>home</Link>
         </li>
         <li>
             <Link className="nav__link" href="/movies" onClick={toggleNav} >movies</Link>
         </li>
         <li>
             <Link className="nav__link" href="/tv"onClick={toggleNav}  >tv shows</Link>
         </li>
     
         <li>
             <Link  className="nav__link" href="/pricing" onClick={toggleNav}  >pricing</Link>
         </li>
     </ul>
 </nav>
  :false

        }

<nav className="nav">
     
       
     <ul className="nav__list">
         <li>
             <Link className="nav__link" href="/" >home</Link>
         </li>
         <li>
             <Link className="nav__link" href="/movies" >movies</Link>
         </li>
         <li>
             <Link className="nav__link" href="/tv" >tv shows</Link>
         </li>
     
         <li>
             <Link  className="nav__link" href="/pricing" >pricing</Link>
         </li>
     </ul>
 </nav>



      
        
        </div>
    )
}