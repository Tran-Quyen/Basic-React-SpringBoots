import React, { Component } from "react";
import "./css/style.scss";
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <footer className="footer">
          <span className="text-muted">All Rights Reserved 2020 @QuyenJW</span>
        </footer>
      </div>
    );
  }
}

export default Footer;
