//Layout.jsx, Syed Kazmi, 301330922, 2024/05/31
import React from 'react';
import { Link } from 'react-router-dom';
export default function Layout() {
  return (
    <>
      <h1>Welcome to Syed Kazmi's COMP229 Portfolio</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/education">Education</Link>| <Link to="/project">Project</Link>| <Link to="/contact">Contact</Link>| <Link to="/services">Service</Link>
      </nav>
<div class="logo">
    <img src="/public/images/logo.png" width="500" 
     height="300" alt="Logo"></img>
  </div>
         <br/>
      <hr />
      
    </>
    
  );
}
