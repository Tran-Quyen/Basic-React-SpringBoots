import React, { Component } from "react";
import EmployeeService from "./js/EmployeeService.js";
class Employee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    };
    //Kết nối đến phương thức add Employee (1)
    this.addEmployee = this.addEmployee.bind(this);
    this.editEmployee = this.editEmployee.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
  }

  viewEmployee(id) {
    this.props.history.push(`/view-employee/${id}`);
  }

  deleteEmployee(id) {
    //rest api
    EmployeeService.deleteEmployee(id)
      .then((res) => {
        //set lại data table
        this.setState({
          employees: this.state.employees.filter(
            (employee) => employee.id !== id
          ),
        });
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }

  editEmployee(id) {
    //edit to save to general
    this.props.history.push(`/save-employee/${id}`);
  }

  componentDidMount() {
    //Khởi tạo data
    EmployeeService.getEmployees()
      .then((res) => {
        this.setState({ employees: res.data });
      })
      .catch((error) => console.log(error));
  }
  //method: add Employee (1)
  addEmployee() {
    //Định tuyến url sang '/add-employee' =>add to save to general
    this.props.history.push("/save-employee/add");
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Employees List</h2>
        <div className="row">
          <button className="btn btn-primary" onClick={this.addEmployee}>
            Add Employee
          </button>
        </div>
        <div className="row mt-2">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Employees First Name</th>
                <th>Employees Last Name</th>
                <th>Employees Email Id</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.emailId}</td>
                  <td>
                    <button
                      onClick={() => this.editEmployee(employee.id)}
                      className="btn btn-info"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => this.deleteEmployee(employee.id)}
                      className="btn btn-danger ml-2"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => this.viewEmployee(employee.id)}
                      className="btn btn-info ml-2"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Employee;
