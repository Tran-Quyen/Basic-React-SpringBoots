import React, { Component } from "react";
import "./css/style.scss";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <header className="header">
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div>
              <a
                href="https://www.facebook.com/QuyenGiaSuJava/"
                className="navbar-brand"
              >
                Employee Management App
              </a>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;