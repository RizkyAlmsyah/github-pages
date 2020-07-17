import React, { Component } from "react";

export default class Navbar extends Component {
  state = {
    navBackground: "",
    isScroll: false
  };

  componentDidMount() {
    document.addEventListener("scroll", () => {
      let backgroundcolor = "";
      let isScrollTrue = false;
      if(window.scrollY > 70){
        isScrollTrue = true
        backgroundcolor = "white"
      }

      this.setState({ 
          navBackground: backgroundcolor,
          isScroll: isScrollTrue
        });
    });
  }

  render() {
    const navBarScroll = {
      backgroundColor: this.state.navBackground
    };
    const isScroll = this.state.isScroll
   
    return (
      <div
        className={"navbar-expand-lg fixed-top navbar " + (isScroll ? 'navbar-colapse' : 'navbar-no-colapse')}
        style={navBarScroll}>
        <div className="container">
          <a className={"navbar-brand color-text " + (isScroll ? 'text-black' : 'text-white')}  href="/">
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
                <a className={"nav-link color-text " + (isScroll ? 'text-black' : 'text-white')} href="/software">
                  Software
                </a>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className={"nav-link color-text " + (isScroll ? 'text-black' : 'text-white')} href="/">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
