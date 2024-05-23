import React from 'react'
import {Link} from "react-router-dom";

export default function Navbar() {
  return (
    <div >
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid" style={{
      backgroundColor:"#5f4c4c",height:"150px",
      color:"white"
    }}>

    {/* <a class="navbar-brand" href="#">Navbar</a> */}
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link class="nav-link" aria-current="page" to="/" style={{color:"white",fontSize:"30px",fontWeight:"bolder"}}>Home</Link>
        <Link class="nav-link mx-4" to="/About" style={{color:"white",fontSize:"30px",fontWeight:"bolder"}}>about</Link>
        <Link class="nav-link" to="/Contact" style={{color:"white",fontSize:"30px",fontWeight:"bolder"}}>contact</Link>
       
      </div>
    </div>
    <h1 className='lg'><b>SARC  IITB</b></h1>
  </div>
</nav>
    </div>
  )
}
