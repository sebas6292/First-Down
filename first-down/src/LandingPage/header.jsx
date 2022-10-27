import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


const Header = () => {
  return (
    <div className='navbar navbar-expand-xl bg-dark text-light'>
      <div className='w-50'>
        <h1>Logo</h1>
      </div>
      <div className='w-50 d-flex justify-content-evenly'>

            <DropdownButton   
            id="dropdown-button-dark-example2"
            variant="secondary"
            menuVariant="dark"
            className="" 
            title="Leagues"
            type="button"
            data-bs-toggle="dropdown" 
            aria-expanded="false"
            >
          <Dropdown.Item href="#basketball">Basketball</Dropdown.Item>
          <Dropdown.Item href="#soccer">Soccer</Dropdown.Item>
          <Dropdown.Item href="#football">Flag Football</Dropdown.Item>
          </DropdownButton>

          <DropdownButton   
          id="dropdown-button-dark-example2"
          variant="secondary"
          menuVariant="dark"
          className="" title="Training Classes">
        <Dropdown.Item href="#strength">Strength Training</Dropdown.Item>
        <Dropdown.Item href="#cardio">Cardio Training</Dropdown.Item>
        <Dropdown.Item href="#sport">Sport Training</Dropdown.Item>
        </DropdownButton>
          <DropdownButton   
            id="dropdown-button-dark-example2"
            variant="secondary"
            menuVariant="dark"
            className="" title="Pricing">
          <Dropdown.Item href="#beginner">Beginner Athelte</Dropdown.Item>
          <Dropdown.Item href="#recreational">Recreational Athlete</Dropdown.Item>
          <Dropdown.Item href="#pro">Pro Athlete</Dropdown.Item>
          </DropdownButton>
         
          <DropdownButton   
          id="dropdown-button-dark-example2"
          variant="secondary"
          menuVariant="dark"
          className="" title="Register/Login">
        <Dropdown.Item href="#beginner">Returning Member?</Dropdown.Item>
        <Dropdown.Item href="#recreational">Create Account</Dropdown.Item>
        </DropdownButton>
        
      </div>
    </div>
  )
}



export default Header;

// <label className="dropdown">Pricing
// <select>
//   <option value="athlete">Athlete</option>
//   <option value="recreational athlete">Recreational Athlete</option>
//   <option value="pro athlete">Pro Athlete</option>
// </select>
// </label> 
// <div className="dropdown">
// <button className="btn btn-outline-secondary text-white text-white dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
//   Pricing
// </button>
// <ul className="dropdown-menu dropdown-menu-dark">
// <li><a class="dropdown-item" href="#beginner">Beginner Athelte</a></li>
//   <li><a class="dropdown-item" href="#recreational">Recreational Athlete</a></li>
//   <li><a class="dropdown-item" href="#pro">Pro Athlete</a></li>
// </ul>
// </div>

