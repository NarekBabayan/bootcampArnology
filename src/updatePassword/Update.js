import { Menu } from "../menu/Menu";

export function Update() {
  return (
    <>
      <Menu />
      <div className='updatePasswordPage'>
        <div className ='updatePassword'>
         
          <div className='titleUpdate'>Update Password</div>
          <p className='childResetPassword3 childReset'>Current Password</p>
          <input placeholder='Current Password' className='inputResetPassword'/>
          <p className='updateP'>New Password</p>
          <input placeholder='New Password' className='inputResetPassword'/>
          <p className='updateP'>Confirm New Password</p>
          <input placeholder='Confirm New Password' className='inputResetPassword'/>
          <button className='buttonResetPassword'>Update Password</button>
        </div>
      </div>
    </>
  )
}