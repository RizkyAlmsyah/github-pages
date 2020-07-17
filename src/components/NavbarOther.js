import React, { Component } from 'react'

export default class NavbarOther extends Component {
    render() {
        return (
            <div
            className={"navbar-expand-lg fixed-top navbar navbar-no-colapse"}>
            <div className="container">
              <a className={"navbar-brand color-text text-black"}  href="/">
                Rizky Alamsyah
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarText"
                aria-controls="navbarText"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <a className={"nav-link color-text text-black" } href="/">
                      Software
                    </a>
                  </li>
                </ul>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className={"nav-link color-text text-black"} href="/">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        
        )
    }
}
