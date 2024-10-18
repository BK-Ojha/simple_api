import React, {useEffect, useState} from 'react'
import '../adduser/add.css';
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast';


const Edit = () => {
  const users = {
    fname:"",
    lname:"",
    email:""
  }
  
  // To fetch id from given parameter
  const {id} = useParams();
  const nevigate = useNavigate();
  const [user, setUser] = useState(users);

  const inputChangeHandler = (e) =>{
    // To extract values
    const {name, value} = e.target;
    // To update values
    setUser({...user, [name]:value})
    console.log(user)
  }

  // Use to update 
  useEffect(() => {
    axios.get(`http://localhost:3000/api/getone/${id}`)
    .then((response) => {
      setUser(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  },[id]) //Whenever id will change then this function will hit the api as per given id

  const submitForm = async(e)=> {
    e.preventDefault();
      await axios.put(`http://localhost:3000/api/update/${id}`,user)
      .then((response)=>{
        toast.success(response.data.msg, {position:"top-right"})
        nevigate("/")
      })
      .catch(error => console.log(error))
  }

  return (
    <div className='addUser'>
      <Link to={'/'}>Back</Link>
      <h3>Update user</h3>
      <form className='addUserForm' onSubmit={submitForm} >
        <div className='inputGroup'>
          <label htmlFor="fname">First Name</label>
          <input type="text" value={user?.fname || ''} onChange={inputChangeHandler} id="fname" name='fname' autoComplete='off' placeholder='First Name' />
        </div>
        
        <div className='inputGroup'>
          <label htmlFor="lname">Last Name</label>
          <input type="text" value={user?.lname || ''} onChange={inputChangeHandler} id="lname" name='lname' autoComplete='off' placeholder='Last Name' />
        </div>
        
        <div className='inputGroup'>
          <label htmlFor="email">Email</label>
          <input type="email" value={user?.email || ''} onChange={inputChangeHandler} id="email" name='email' autoComplete='off' placeholder='Email' />
        </div>

        <div className='inputGroup'>
          <button type='submit'>UPDATE USER</button>
        </div>
      </form>
    </div>
  )
}
export default Edit
