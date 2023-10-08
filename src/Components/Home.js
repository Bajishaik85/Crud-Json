import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div class="container my-5">
      <div class="position-relative p-5 text-center text-muted bg-body border border-dashed border-4 rounded-5">
        <h1 class="text-body-emphasis">Welcome To Crud App</h1>
        <p class="col-lg-6 mx-auto mb-4 fs-3">
          Welcome to our React.js CRUD (Create, Read, Update, Delete) application! This powerful web application is built on the cutting-edge technologies of React.js, JSON Server, React Router, and Redux, providing a seamless user experience for managing data.
        </p>
        <Link to={"/user"} class="btn btn-primary px-5 mb-5">
          See the User Details
        </Link>
      </div>
    </div>


  )
}

export default Home