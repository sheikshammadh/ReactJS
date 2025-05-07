import React from 'react';
import CompA from './Props/Props Drilling/CompA';
import Forms from './forms/form';
import User from './Props/User';
import Employee from './State2/Employee';
import Handlers from './State2/Hndalers';
import Employ from './List Rendering/Listrend';

function App() {
    return (
        <div>
          <h3>App components</h3>
          <hr />
          <>
          <CompA/>
          <Forms/>
          <User/>
          <Employee/>
          <Handlers/>
          <Employ/>
          </>
        </div>
    )
}
export default App;