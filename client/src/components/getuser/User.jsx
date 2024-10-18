import React, { useEffect, useState } from 'react'
import "./user.css"
import { Link, useParams } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'

const User = () => {

  // To create states
  const {id} = useParams();
  const[users, setUsers]=useState([])

  // To fetch info of user
  useEffect(()=>{
    const fetchData = async() => {
        const response=await axios.get("http://localhost:3000/api/getall", fetchData)
        setUsers(response.data)
    }
    fetchData();
  },[id])

  const deleteUser = async(userId) => {
    await axios.delete(`http://localhost:3000/api/delete/${userId}`)
    .then((response) => {
      // Used to also delete data from state
      setUsers((prevUser) => prevUser.filter((user) => user._id !==userId))
      toast.success(response.data.msg, {position:"top-right"})
    }).catch((error) => {
      console.log(error)
    })
  }

  return (
    <div className='userTable'>
        {/* We can not use link as direct, it should to used with path and importing as above  */}
      <Link to={"/add"} className='addButton' >Add User</Link>    
      <table border={1} cellPadding={10} cellSpacing={0}>
        <thead>
            <tr>
                <th>S.No.</th>
                <th>User Name</th>
                <th>User Email</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
          {/* To check the data that are fetched are not */}
          {
            users.map((user, index) => {
              return (
                <tr key={user._id}>
                    <td>{index +1} </td>
                    <td>{user.fname} {user.lname}</td>
                    <td style={{cursor:"pointer"}} >{user.email}</td>
                    <td className='actionButtons'>
                        <button onClick={() => deleteUser(user._id)} ><i className="fa-solid fa-trash"></i></button>
                        {/* Updation using a particular user by given its ID */}
                        <Link to={`/edit/`+ user._id}><i className="fa-solid fa-pen-to-square"></i></Link>
                    </td>
                </tr>
              )  
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default User
