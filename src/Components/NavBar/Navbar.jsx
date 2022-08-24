import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../Images/2.webp"


const Navbar = (props) => {

 
  return ( 
          <div >
          <nav className= "d-flex justify-content-between align-items-center pt-2" >

      <ul className="d-flex list-unstyled ">

      {
        props.loginUser ? <>
        <li className="mx-2 ">
        <NavLink to="/home"><img  src={logo}  alt="Nexo"/></NavLink>
        </li>
      <li className="mx-2 "><NavLink   to="/movie">Movies</NavLink></li>
      <li className="mx-2"><NavLink to="/tv">TV</NavLink></li>
      <li className="mx-2"><NavLink to="/person">Person</NavLink></li>
        </>
         :''
      }

      </ul>

      <ul className="d-flex list-unstyled">
      <li className="mx-2"><a  href="http://google.com/" target="_blank"><i className="fab fa-facebook-f"></i></a></li> 
      <li className="mx-2"><a href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram"></i></a></li>
      <li className="mx-2"><a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiYXIifQ%3D%3D%22%7D" target="_blank"><i className="fab fa-twitter"></i></a></li>
        
        {
          props.loginUser ? <>
            <li onClick={props.logOut} className="mx-2">LogOut</li>
          </>
          : <>
            <li className="mx-2"><NavLink to="/register">Register</NavLink></li>
        <li className="mx-2"><NavLink to="/login">Login</NavLink></li>
          </>
        }
      </ul>



      </nav>
      </div>
   );
}
 
export default Navbar;