import React from "react";
import ReactDOM from "react-dom";
import App from "./App";


function Header() {
  return (
    <header id="header">

      <nav data-aos="zoom-out" data-aos-delay="800"
        class="navbar navbar-expand">
        <div class="container header">


          <div class="ml-auto"></div>
          <ul class="navbar-nav items mx-auto">
            <li class="nav-item dropdown">
              <a class="nav-link" href="/">Home</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link" href="/">Explore </a>

            </li>
            <li class="nav-item">
              <a href="activity.html" class="nav-link">Activity</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link" href="/">Community <i
                class="fas fa-angle-down ml-1"></i></a>

            </li>
            <li class="nav-item dropdown">
              <a class="nav-link" href="/">Pages</a>

            </li>
            <li class="nav-item">
              <a href="contact.html" class="nav-link">Contact</a>
            </li>
          </ul>
          <ul class="navbar-nav icons">
            <li class="nav-item">
              <a href="/" class="nav-link" data-toggle="modal"
                data-target="#search">
                <i class="fas fa-search"></i>
              </a>
            </li>
          </ul>

          <ul class="navbar-nav toggle">
            <li class="nav-item">
              <a href="/" class="nav-link" data-toggle="modal"
                data-target="#menu">
                <i class="fas fa-bars toggle-icon m-0"></i>
              </a>
            </li>
          </ul>

          <ul class="navbar-nav action">
            <li class="nav-item ml-3">
              <div id="root"></div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


export default Header