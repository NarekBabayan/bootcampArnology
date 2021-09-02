import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "../menu/Menu";
import { Address } from "./Address";

export function Login() {

  const [myBool, setMyBool] = useState(false);

  useEffect(
    function loginPromise() {
      return (
        fetch('{{URL}}/api/v1/auth/login', {
          method: 'POST'
        }).then((resp) => resp.json)
      );
    }, [myBool])

  return (
    <>
      <Menu />
      <div className='parentLoginPage'>
        <div className='parentLogin'>

          <div className='title'>
            <svg className='loginTitleIcon1' width="19" height="13" viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.0459 1.76656L14.7378 5.46875H0.125V7.53125H14.7378L11.0459 11.2334L12.5 12.6875L18.6875 6.5L12.5 0.3125L11.0459 1.76656Z" fill="black" />
            </svg>
            <svg className='loginTitleIcon2' width="17" height="29" viewBox="0 0 17 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.8125 0.0625H2.4375C1.89049 0.0625 1.36589 0.279799 0.979093 0.666594C0.592299 1.05339 0.375 1.57799 0.375 2.125V5.21875H2.4375V2.125H14.8125V26.875H2.4375V23.7812H0.375V26.875C0.375 27.422 0.592299 27.9466 0.979093 28.3334C1.36589 28.7202 1.89049 28.9375 2.4375 28.9375H14.8125C15.3595 28.9375 15.8841 28.7202 16.2709 28.3334C16.6577 27.9466 16.875 27.422 16.875 26.875V2.125C16.875 1.57799 16.6577 1.05339 16.2709 0.666594C15.8841 0.279799 15.3595 0.0625 14.8125 0.0625Z" fill="black" />
            </svg>
            <span>Login</span>
          </div>

          <div className='exposition'>
            <span>Log in to list your Bootcamp or rate, review and favorite bootcamps</span>
          </div>

          <Address />

          <div className='buttonLoginPage'>
            <button onClick={() => {
              setMyBool(!myBool);
            }}>Login</button>
          </div>

          <div className='forgotPassword'>
            <span>Forgot Password?</span>
            <Link className='forgotPasswordLink' to=''>Reset Password</Link>
          </div>
        </div>
      </div>
    </>
  )
}