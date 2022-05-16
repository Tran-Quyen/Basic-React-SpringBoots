import React, { Component } from "react";
import EmployeeService from "../../js/EmployeeService.js";

class UpdateEmployee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id, //Lấy id từ url
      firstName: "",
      lastName: "",
      emailId: "",
    };

    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.changeEmailAddressHandler = this.changeEmailAddressHandler.bind(this);

    this.editEmployee = this.editEmployee.bind(this);
  }

  componentDidMount() {
    EmployeeService.getEmployeeById(this.state.id)
      .then((res) => {
        let employee = res.data;
        this.setState({
          firstName: employee.firstName,
          lastName: employee.lastName,
          emailId: employee.emailId,
        });
        console.log(this.state);
      })
      .catch((error) => console.log(error));
  }

  editEmployee = (e) => {
    //Ngăn chặn mặc định
    e.preventDefault();
    let employee = this.state;
    console.log("employee => " + JSON.stringify(employee));

    EmployeeService.editEmployee(this.state.id, employee)
      .then(() => {
        this.props.history.push("/");
      })
      .catch((error) => console.log(error));
  };

  cancel() {
    this.props.history.push("/");
  }

  changeFirstNameHandler(event) {
    //Lấy toàn bộ giá trị trên ô input bằng event.target.value
    this.setState({ firstName: event.target.value });
  }

  changeLastNameHandler(event) {
    this.setState({ lastName: event.target.value });
  }

  changeEmailAddressHandler(event) {
    this.setState({ emailId: event.target.value });
  }

  render() {
    return (
      <div id="app">
        <div className="container mt-5">
          <div className="row">
            <div className="card col-md-6 offset-md-3 pt-3 pb-4">
              <h3 className="text-center">Employee Page</h3>
              <form action="">
                <div className="form-group">
                  <label htmlFor="firstName">First Name: </label>
                  <input
                    id="firstName"
                    className="form-control"
                    type="text"
                    placeholder="First Name"
                    value={this.state.firstName}
                    name="firstName"
                    onChange={this.changeFirstNameHandler}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name: </label>
                  <input
                    id="lastName"
                    className="form-control"
                    type="text"
                    placeholder="Last Name"
                    value={this.state.lastName}
                    name="lastName"
                    onChange={this.changeLastNameHandler}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="emailId">Email Address: </label>
                  <input
                    id="emailId"
                    className="form-control"
                    type="text"
                    placeholder="Email Address"
                    value={this.state.emailId}
                    name="emailId"
                    onChange={this.changeEmailAddressHandler}
                  />
                </div>

                <button className="btn btn-success" onClick={this.editEmployee}>
                  Save
                </button>
                <button
                  className="btn btn-danger ml-2"
                  onClick={this.cancel.bind(this)}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateEmployee;
