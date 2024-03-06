import React from "react";
import robot from './../../assest/images/robot.png';
import investlogogo from './../../assest/images/investlogogo.png';
import { Link } from 'react-router-dom' ;

function NavBar(){
    return(
        <div class="hero_area" >
        <div class="header_section">
  <div class="header_left">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="logogo"><a href="index.html"><img src={investlogogo} /></a></div>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="about.html">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="services.html">Services</a>
          </li>
          {/* <li class="nav-item">
            <a class="nav-link" href="team.html">Team</a>
          </li> */}
          <li class="nav-item">
            <a class="nav-link" href="contact.html">Contact Us</a>
          </li>

          {/* <li class="nav-item">
            <a class="nav-link" href="contact.html">Login/SignUp</a>
          </li> */}

            <li class="nav-item">
              <a class="nav-link"><Link to="/login" style={{color:"black", textDecoration:"none"}}>Login/SignUp</Link></a>
            </li>
        </ul>
      </div>
    </nav>
    <div class="banner_main">   
      <h1 class="banner_taital">financial <br/>Service</h1>
      <p class="banner_text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever </p>
      <div class="btn_main">
        <div class="more_bt"><a href="#">Read More </a></div>
        <div class="contact_bt"><a href="#">Contact Us</a></div>
      </div>
    </div>
  </div>
  <div class="header_right">
    <img src={robot} class="banner_img" />
  </div>
</div>
       
    {/* <div className="slider">
            <Slider/>
    </div> */}

    </div>
    )
}

export default NavBar;