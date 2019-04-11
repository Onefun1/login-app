import React, { Component } from "react";
import "./App.css";
import { getUsers } from "./api/users";
import { NavLink } from "react-router-dom";

class App extends Component {
  componentDidMount() {
    getUsers().then(console.log);
  }

  render() {
    return (
      <div className="App">
        <header>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <a className="navbar-brand" href="/">
              Mate academy
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/" exact>
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/sign-in">
                    Sign in
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/sign-up">
                    Sign up
                  </NavLink>
                </li>
              </ul>

              <div className="mt-2 mt-md-0">
                <ul className="nav nav-pills">
                  <li className="nav-item">
                    <NavLink to="/sign-in" className="nav-link">
                      Sign in
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/sign-up" className="nav-link">
                      Sign up
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>

        <main role="main" className="container">
          <h1>Home Page</h1>
        </main>

        <footer className="footer">
          <div className="container">
            <span className="text-muted">
              Place sticky footer content here.
            </span>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
