import React, { Component } from "react";
import EmployeeService from "../../js/EmployeeService.js";
import "../ViewEmployee/css/style.scss";
class ViewEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      employee: {},
    };
  }

  back() {
    this.props.history.push("/");
  }

  componentDidMount() {
    EmployeeService.getEmployeeById(this.state.id).then((res) => {
      this.setState({ employee: res.data });
    });
  }

  render() {
    return (
      <div>
        <div className="card col-md-4 offset-md-4 height">
          <h3 className="text-center">View Employee Page</h3>
          <div className="card-body">
            <div className="row">
              <label htmlFor="">Employee First Name: </label>
              <span className="ml-2">{this.state.employee.firstName}</span>
            </div>
            <div className="row">
              <label htmlFor="">Employee Last Name: </label>
              <span className="ml-2">{this.state.employee.lastName}</span>
            </div>
            <div className="row">
              <label htmlFor="">Employee Email Address: </label>
              <span className="ml-2">{this.state.employee.emailId}</span>
            </div>
            <div className="wrap row">
              <button
                className="btn btn-primary"
                onClick={this.back.bind(this)}
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewEmployee;
