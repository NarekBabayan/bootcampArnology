import { useEffect, useState } from "react";
import { Address } from "../login/Address";
import { Menu } from "../menu/Menu";

export function Register() {

  const [myBool, setMyBool] = useState(false);
  const [state, setState] = useState(null);



  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value
    })

  }


  const handleClick = async () => {

    try {
      let data = await fetch('http://devcamp-api-node.herokuapp.com/api/v1/auth/register', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(state)
      })
      let result = await data.json();
      localStorage.setItem("result", JSON.stringify(result))



    } catch {

      console.log('Duplicate field value entered');
    }
  }

  return (
    <>
      <Menu />
      <div className='parentRegisterPage'>
        <div className='parentRegister'>

          <div className='titleRegister'>
            <svg className='iconRegister' width="30" height="34" viewBox="0 0 30 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.4961 22.0938C22.4414 21.5859 23.5234 21.2969 24.6758 21.2969H24.6797C24.7969 21.2969 24.8515 21.1562 24.7656 21.0781C23.5672 20.0027 22.1983 19.134 20.7148 18.5078C20.6992 18.5 20.6836 18.4961 20.6679 18.4883C23.0937 16.7266 24.6719 13.8633 24.6719 10.6328C24.6719 5.28125 20.3437 0.945312 15.0039 0.945312C9.66404 0.945312 5.33982 5.28125 5.33982 10.6328C5.33982 13.8633 6.91794 16.7266 9.34763 18.4883C9.33201 18.4961 9.31638 18.5 9.30076 18.5078C7.55466 19.2461 5.98826 20.3047 4.6406 21.6562C3.30073 22.9937 2.23401 24.5792 1.49998 26.3242C0.777761 28.0331 0.387989 29.8639 0.351538 31.7188C0.350496 31.7604 0.357808 31.8019 0.373045 31.8407C0.388282 31.8796 0.411136 31.9149 0.440258 31.9448C0.469381 31.9746 0.504184 31.9984 0.542617 32.0146C0.58105 32.0307 0.622334 32.0391 0.664038 32.0391H3.00388C3.17185 32.0391 3.31248 31.9023 3.31638 31.7344C3.39451 28.7188 4.60154 25.8945 6.73826 23.7539C8.94529 21.5391 11.8828 20.3203 15.0078 20.3203C17.2226 20.3203 19.3476 20.9336 21.1797 22.082C21.2267 22.1116 21.2808 22.1283 21.3363 22.1303C21.3918 22.1324 21.4469 22.1198 21.4961 22.0938ZM15.0078 17.3516C13.2187 17.3516 11.5351 16.6523 10.2656 15.3828C9.64097 14.7598 9.14579 14.0194 8.80857 13.2041C8.47135 12.3889 8.29877 11.515 8.30076 10.6328C8.30076 8.83984 8.99998 7.15234 10.2656 5.88281C11.5312 4.61328 13.2148 3.91406 15.0078 3.91406C16.8008 3.91406 18.4804 4.61328 19.75 5.88281C20.3746 6.50582 20.8698 7.24627 21.207 8.06149C21.5442 8.87671 21.7168 9.7506 21.7148 10.6328C21.7148 12.4258 21.0156 14.1133 19.75 15.3828C18.4804 16.6523 16.7969 17.3516 15.0078 17.3516ZM29.375 26.6484H26.0937V23.3672C26.0937 23.1953 25.9531 23.0547 25.7812 23.0547H23.5937C23.4219 23.0547 23.2812 23.1953 23.2812 23.3672V26.6484H20C19.8281 26.6484 19.6875 26.7891 19.6875 26.9609V29.1484C19.6875 29.3203 19.8281 29.4609 20 29.4609H23.2812V32.7422C23.2812 32.9141 23.4219 33.0547 23.5937 33.0547H25.7812C25.9531 33.0547 26.0937 32.9141 26.0937 32.7422V29.4609H29.375C29.5469 29.4609 29.6875 29.3203 29.6875 29.1484V26.9609C29.6875 26.7891 29.5469 26.6484 29.375 26.6484Z" fill="black" />
            </svg>
            <span>Register</span>
          </div>

          <div className='exposition'>
            <span>Register in to list your Bootcamp or rate, review and favorite bootcamps</span>
          </div>

          <div className='textEmailAddress'>Name</div>

          <div className='emailInput'>
            <input placeholder='Enter Full Name' name='name' onChange={handleChange} />
          </div>


          <div className='textEmailAddress'> Email Address</div>

          <div className='emailInput'>
            <input placeholder='Enter Email' name='email' onChange={handleChange} />
          </div>

          <div className='textPassword'>Password</div>

          <div className='emailInput'>
            <input placeholder='Enter Password' name='password' onChange={handleChange} />
          </div>

          <div className='textEmailAddress'>Confirm Password</div>

          <div className='emailInput'>
            <input placeholder='Confirm Password' />
          </div>

          <div className='checkboxRegister'>
            <span>User Role</span>
            <div className='parentCheckbox'>
              <input type="checkbox" className="checkbox-round" />
              <span>Regulyar User Browse (Browse, Write reviews, etc)</span>
            </div>
            <div className='parentCheckbox2'>
              <input type="checkbox" className="checkbox-round" />
              <span>Bootcamp Publisher</span>
            </div>
          </div>

          <div className='botomTextRegisterPage'>
            * You must be affiliated with the bootcamp in some way in order to add it to DevCamper
          </div>

          <div className='registerButton'>
            <button onClick={handleClick}>Register</button>
          </div>
        </div>
      </div>
    </>
  );
}