import React from "react";

const NavBar = () => {
  return(
    <nav className="navbar navbar-dark navbar-expand-lg navbar-light bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand text-light" href="#">Bootstrap Start</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <div className="container-fluid d-flex justify-content-end">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-secondary" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-secondary" href="#">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-secondary" href="#">Contact</a>
        </li>
      </ul>
      </div>
    </div>
  </div>
</nav>
)}

export default NavBar;