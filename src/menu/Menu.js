import { NavLink } from "react-router-dom";
import { LoginParent } from "./LoginParent";
import { FaBars } from 'react-icons/fa';
import { CompTextDiv } from "./CompTextDiv";
import { useState } from "react";

export function Menu() {
 let [myBool, setMyBool] = useState(true);
  return (
    <>
      <div className="parentMenuDiv">
        <CompTextDiv />
        <LoginParent />
      </div>

      <div className='mediaParentMenuDiv'>
        <FaBars className='iconFaBars' onClick={() => {
         setMyBool(!myBool);
        }} />
        <CompTextDiv />
        <div className={myBool ? 'register' : 'secondRegister'}>
          <NavLink to="/" exact className="loginLink" >Login</NavLink>
          <NavLink to='' exact className="loginLink" >Register</NavLink>
          <NavLink to='' exact className="loginLink" >Browse Bootcamps</NavLink>
        </div>
      </div>
    </>
  )
}