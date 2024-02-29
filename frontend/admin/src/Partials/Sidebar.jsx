import React from "react";

import "bootstrap/js/dist/dropdown";

import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="sidebar  vh-100  d-flex justify-content-between flex-column">
          <div>
            <Link className="text-decoration-none d-none d-sm-inline text-white d-flex  ms-3 nt-2">
              <span className="fs-4  "> ChiMatch</span>
            </Link>
            <hr className="text-white" />
            <ul className="nav nav-pills flex-column mt-5">
              <li className="nav-item text-white fs-4 my-1">
                <Link to="Dashboard" className="nav-link text-white fs-5">
                  <i className=" bi bi-speedometer  fs-5"></i>
                  <span className="fs-5 d-none d-sm-inline "> Dashboard</span>
                </Link>
              </li>

              <li className="nav-item text-white fs-4 my-1">
                <Link to="Reserv" className="nav-link text-white fs-5">
                  <i className="bi bi-people me-2 fs-5"></i>
                  <span className="fs-5 d-none d-sm-inline "> Reservation</span>
                </Link>
              </li>
              <li className="nav-item text-white fs-4 my-1">
                <Link to="Terrain" className="nav-link text-white fs-5">
                  <i className="bi bi-table me-2 fs-5"></i>
                  <span className="fs-5 d-none d-sm-inline "> Terrain</span>
                </Link>
              </li>

              <li className="nav-item text-white fs-4 my-1">
                <Link to="Report" className="nav-link text-white fs-5">
                  <i className="bi bi-grid me-2 fs-5"></i>
                  <span className="fs-5 d-none d-sm-inline "> Report</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="dropdown open mb-3 fs-4">
            <Link
              className="text-decoration-none  text-white dropdown-toggle p-3"
              aria-expanded="false"
            >
              <i className="bi bi-person-circle"></i>
              <span className="ms-2 d-none d-sm-inline ">Jawad</span>
            </Link>
            <div className="dropdown-menu">
              <Link className="dropdown-item"> Action</Link>
              <Link className="dropdown-item disabled"> Disabled Action</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
