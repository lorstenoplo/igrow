import React from 'react'
import { Link, NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <div className='container-fluid nav_bg'>
      <div className='row'>
      <div className='col-10 mx-auto'>

     

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand Brand_name" style={{color: '#0d70b3'}} to="/">iGrow</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink activeClassName='boom' className="nav-link" exact to="/">Home <span className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink  activeClassName='boom' className="nav-link" to="/service">Services</NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName='boom'  className="nav-link" to="about">About Us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName='boom'  className="nav-link" to="contact">Contact Us</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      </div>
      </div>
    </div>
    </>
  )
}
export default Navbar;