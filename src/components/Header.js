import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'
import "../App.css";

function Header() {
  return (
    <>
    
  <div className="tex">
    
        <div className="rout">
       <Link to="/Projects" >المشاريع</Link>
{'                     '}
      <Link to="/About">نبذة</Link> 
    </div>
    </div>
    </>
  );
}

export default Header;
