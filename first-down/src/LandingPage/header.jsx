import React from 'react'


const Header = () => {
  return (
    <div className='navbar navbar-expand-xl bg-dark text-light'>
      <div className='w-50'>
        <h1>Logo</h1>
      </div>
      <div className='w-50 d-flex justify-content-evenly'>
          <div className="dropdown">
              <button className="btn btn-outline-secondary text-white dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Leagues
              </button>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li><a class="dropdown-item" href="#basketball">Basketball</a></li>
                <li><a class="dropdown-item" href="#soccer">Soccer</a></li>
                <li><a class="dropdown-item" href="#football">Flag Football</a></li>
              </ul>
          </div>
          <div className="dropdown">
              <button className="btn btn-outline-secondary text-white dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Training Classes
              </button>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li><a class="dropdown-item" href="#strength">Strength Training</a></li>
                <li><a class="dropdown-item" href="#cardio">Cardio Training</a></li>
                <li><a class="dropdown-item" href="#sport">Sport Training</a></li>
              </ul>
          </div>
          <div className="dropdown">
              <button className="btn btn-outline-secondary text-white text-white dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Pricing
              </button>
              <ul className="dropdown-menu dropdown-menu-dark">
              <li><a class="dropdown-item" href="#beginner">Beginner Athelte</a></li>
                <li><a class="dropdown-item" href="#recreational">Recreational Athlete</a></li>
                <li><a class="dropdown-item" href="#pro">Pro Athlete</a></li>
              </ul>
          </div>
          <div className="dropdown">
              <button className="btn btn-outline-secondary text-white dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Register / Log In
              </button>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li className="dropdown-item">Returning Member?</li>
                <li className="dropdown-item">Create Account</li>
              </ul>
          </div>
      </div>
    </div>
  )
}

export default Header