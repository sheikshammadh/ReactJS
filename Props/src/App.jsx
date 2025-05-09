import React from 'react';
import CompA from './Props/Props Drilling/CompA';
import Forms from './forms/form';
import User from './Props/User';
import Employee from './State2/Employee';
import Handlers from './State2/Hndalers';
import Employ from './List Rendering/Listrend';
import Users from './List Rendering/Users';
import UsersData from './Lifecycle/Lifecycle';
// import Logindet from './forms/FormDet';

function App() {
    return (
        <div>
          <h3>App components</h3>
          <hr />
          <>
          <CompA/>
          <Forms/>
          <Logindet/>
          <User/>
          <Employee/>
          <Handlers/>
          <Employ/>
          <Users/>
          <UsersData/>
          </>
        </div>
    )
}
export default App;