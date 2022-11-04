import React from 'react';
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <aside id="sidebar" className="sidebar">

      <ul className="sidebar-nav" id="sidebar-nav">

        <li className="nav-item">
          <a className="nav-link " href="index.html">
            <i className="bi bi-grid"></i>
            <span>Dashboard</span>
          </a>
        </li>
        {/* <!-- End Dashboard Nav --> */}

        <li className="nav-item">
          <a className="nav-link collapsed" data-bs-target="#customers-nav" data-bs-toggle="collapse" href="#">
            <i className="bi bi-menu-button-wide"></i><span>Customer Management</span><i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul id="customers-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
            <Link to={{ pathname: `/customers/` }}>
              <li>
                {/* <a href="http://localhost:3000/customers"> */}
                <i className="bi bi-circle"></i><span>All Customers</span>
                {/* </a> */}
              </li>
            </Link>
            <Link to={{ pathname: `/profile-usage/` }}>
              <li>
                {/* <a href="http://localhost:3000/customers"> */}
                <i className="bi bi-circle"></i><span>Account Usage</span>
                {/* </a> */}
              </li>
            </Link>
            <Link to={{ pathname: `/site-feedbacks/` }}>
              <li>
                {/* <a href="http://localhost:3000/customers"> */}
                <i className="bi bi-circle"></i><span>Site Feedbacks</span>
                {/* </a> */}
              </li>
            </Link>
            {/* <Link to={{ pathname: `/add-customer/` }}>
              <li>
                <i className="bi bi-circle"></i><span>Add New Customer</span>
              </li>
            </Link> */}
          </ul>
        </li>
        {/* <!-- End Customer Nav --> */}

      </ul>

    </aside>
  );
}

export default Sidebar;