import { Link } from "react-router-dom";
import { Menu } from "../menu/Menu";

export function Reset() {
  return (
    <>
      <Menu />
      <div className='resetPasswordPage'>
        <div className='resetPassword'>

          <div className='childResetPassword1 childReset'>
            <Link to='/login' className='linkReset'>Back to login</Link>
          </div>

          <div className='childResetPassword2'>
             Reset Password
          </div>

          <p className='childResetPassword3 childReset'>Use this form to reset your password using the registered email address</p>
          <p className='childResetPassword4 childReset'>Enter Email</p>
          <input className='inputResetPassword' placeholder='Enter address'/>
          <button className='buttonResetPassword'></button>
        </div>
      </div>
    </>
  )
}