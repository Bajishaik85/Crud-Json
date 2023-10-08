import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {  FetchUserObj, FunctionUpdateuser } from '../Redux/Action';
const Updateuser = () => {

  const [id, setid] = useState(0);

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [number, setnumber] = useState("");
  const [role, setrole] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { code } = useParams();

  const userObj = useSelector((state) => state.user.userObj)



  const handleSubmit = (e) => {
    e.preventDefault();
    const userObj = { id, name, email, number, role };

    dispatch(FunctionUpdateuser(userObj, id));
    navigate("/user")


  }

  useEffect(() => {
    dispatch(FetchUserObj(code));
  }, [])
  useEffect(() => {
    if (userObj) {
      setid(userObj.id);
      setname(userObj.name);
      setemail(userObj.email);
      setnumber(userObj.number)
      setrole(userObj.role)
    }
  }, [userObj])


  return (
    <div className='container text-start'>

      <h1 className='fw-bold'>Add User</h1>

      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="uid" class="form-label">User Id</label>
          <input type="text" value={id || ''} disabled="disabled" class="form-control" id="uid" />
        </div>
        <div class="mb-3">
          <label for="uname" class="form-label">Name</label>
          <input type="text" value={name || ''} onChange={e => setname(e.target.value)} class="form-control" id="uname" />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" value={email || ''} onChange={e => setemail(e.target.value)} class="form-control" id="exampleInputEmail1" />
        </div>

        <div class="mb-3">
          <label for="unumber" class="form-label">Phone Number</label>
          <input type="number" value={number || ''} onChange={e => setnumber(e.target.value)} pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" class="form-control" id="unumber" />
        </div>
        <div class="mb-3">
          <select class="form-select" value={role || ''} onChange={e => setrole(e.target.value)} >
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

export default Updateuser