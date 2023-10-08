import './App.css';
import Home from './Components/Home';
import Updateuser from './Components/Updateuser';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Userlisting from './Components/Userlisting';
import Add from './Components/Add';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import Store from './Redux/Store';

function App() {
  return (


    <Provider store={Store}>
      <div className='App'>

        <BrowserRouter>

          <nav class="navbar bg-primary navbar-expand-lg">
            <div class="container-fluid">
              <Link to={"/"} class="navbar-brand">Navbar</Link>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/user">Users</Link>
                  </li>


                </ul>



                <form class="d-flex" role="search">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button class="btn btn-outline-light" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>


          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<Userlisting />} />

            <Route path="user/add" element={<Add />} />s
            <Route path="user/edit/:code" element={<Updateuser />} />

          </Routes>



        </BrowserRouter>

        <ToastContainer position="bottom-right"></ToastContainer>



      </div>
    </Provider>


  );
}

export default App;
