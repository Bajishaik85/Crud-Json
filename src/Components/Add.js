import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Addnewuser } from '../Redux/Action';

const Add = () => {

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [number, setnumber] = useState("");
  const [role, setrole] = useState("");
  const dispatch = useDispatch();
  const navigate =useNavigate();




  const handleSubmit = (e) => {
    e.preventDefault();
    const userObj = { name, email, number, role };

    dispatch(Addnewuser(userObj));
    navigate("/user")


  }


  return (
    <div className='container text-start'>

      <h1 className='fw-bold'>Add User</h1>

      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="uname" class="form-label">Name</label>
          <input type="text" value={name} onChange={e => setname(e.target.value)} class="form-control" id="uname" />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" value={email} onChange={e => setemail(e.target.value)} class="form-control" id="exampleInputEmail1" />
        </div>

        <div class="mb-3">
          <label for="unumber" class="form-label">Phone Number</label>
          <input type="number" value={number} onChange={e => setnumber(e.target.value)} pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" class="form-control" id="unumber" />
        </div>
        <div class="mb-3">
          <select class="form-select" value={role} onChange={e => setrole(e.target.value)} >
            <option selected>Select Role</option>
            <option value="Admin">Admin</option>
            <option value="Staff">Staff</option>

          </select>
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
        <Link to={"/user"} type="btn" class="btn btn-danger ms-2">Go Back</Link >

      </form >




    </div >
  )
}

export default Add