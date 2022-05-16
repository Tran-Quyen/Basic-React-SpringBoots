import './App.css';

import React, { Component } from 'react';
import Employees from './components/Employee/index.jsx';
import CreateEmployee from './components/Employee/Child/CreateEmployee/index.jsx';
import Header from './components/Header/index.jsx';
import Footer from './components/Footer/index.jsx';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ViewEmployee from './components/Employee/Child/ViewEmployee/index.jsx';
// import UpdateEmployee from './components/Employee/Child/UpdateEmployee/index.jsx';
// Router là định tuyến phần bên trong Switch là thành phần chúng ta muốn chuyển tới với các Route được kích hoạt ở bên trong
class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Header />
          <div className="container">
            <Switch>
              {/* http://localhost:3000/employees | exact để định tuyến chính xác 1 url nếu k0 có nó sẽ cố gọi ra hết*/}
              <Route path="/" exact component={Employees} />
              <Route path="/employees" component={Employees} />
              {/* Dùng 1 url để create và edit nếu có id = -1 thì là create còn id > 0 thì là edit  */}
              {/* Step 1 => add to save to use general */}
              <Route path="/save-employee/:id" component={CreateEmployee} />
              <Route path="/view-employee/:id" component={ViewEmployee} />
              {/* <Route path="/edit-employee/:id" component={UpdateEmployee} /> */}
            </Switch>
          </div>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
