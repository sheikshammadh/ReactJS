// import React from "react";
import Forms from "./forms/form";
import User from "./Props/User";
import Employee from "./State2/Employee";
import Handlers from "./State2/Hndalers";
import Employ from "./List Rendering/Listrend";
import Users from "./List Rendering/Users";
import UsersData from "./Lifecycle/Lifecycle";
import Login from "./forms/FormDet";
import CompA from "./Props/Props Drilling/CompA";

function App() {
  return(
    <div>
      <h3>App Components</h3>
      <hr />
      <CompA/>
      <Forms />
      <Login />
      <Users />
      <Employee />
      <Handlers />
      <Employ/>
      <User />
      <UsersData />
    </div>
  )
}

export default App;