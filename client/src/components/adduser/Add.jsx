import React, {useState} from 'react'
import './add.css'
import axios from 'axios'
import { Link, useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast'
 
const Add = () => {

    // Intially all values should be empty
    const [user, setUser] = useState({  
      fname:"",
      lname:"",
      email:"",
      password:""
    })

// To jump into given page
const navigate = useNavigate();

  // Used to handle inputs
  const inputHandler = (e) => {
    // To extract values
    const {name, value} = e.target;

    // To set the values into user's field where they are initialized or To add values in their specific fields
    setUser({...user, [name]: value});
  }

// // Connection of frontend with backend
//   const submitForm = async(e) => {
//     e.preventDefault();

//     // Here, axios helps to communicate with the APIs or axios send http request ot backend
//     // passing API with user's data that wants to send
//     await axios.post("http://localhost:7000/api/create",user)
//     .then((response) => {
//       console.log(response)
//       toast.success(response.data.msg, {position:"top-right"})
//       navigate("/")
//     })
//     .catch(error => console.log(error))
//   }

const submitForm = async(e) => {
  e.preventDefault();
  try{
    const response = await axios.post("http://localhost:7000/api/create",user)
    console.log(response)
    // Any kinds of responses generated at the given position
    toast.success(response.data.msg, {position:"top-right"})
    // After successfully created, it helps to jump into the home page
    navigate("/")

  }catch(err){
    console.log(err)
  }
}
  

  return (
    <div className='addUser'>
      <Link to={'/'}>Back</Link>
      <h3>Add new user</h3>
      <form className='addUserForm' onSubmit={submitForm}>
        <div className='inputGroup'>
          <label htmlFor="fname">First Name</label>
          <input type="text" onChange={inputHandler} id="fname" name='fname' autoComplete='off' placeholder='First Name' />
        </div>
        
        <div className='inputGroup'>
          <label htmlFor="lname">Last Name</label>
          <input type="text" onChange={inputHandler} id="lname" name='lname' autoComplete='off' placeholder='Last Name' />
        </div>
        
        <div className='inputGroup'>
          <label htmlFor="email">Email</label>
          <input type="email" onChange={inputHandler} id="email" name='email' autoComplete='off' placeholder='Email' />
        </div>
        
        <div className='inputGroup'>
          <label htmlFor="password">Password</label>
          <input type="password" onChange={inputHandler} id="password" name='password' autoComplete='off' placeholder='Password' />
        </div>

        <div className='inputGroup'>
          <button type='submit'>ADD USER</button>
        </div>
      </form> 
    </div>
  )
}

export default Add
