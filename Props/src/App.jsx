import React from 'react';
import User from './Props/User';
import Message from './state.example/Msg';
import Logform from './state.example/btn';
import Forms from './forms/form';
function App() {
    return (
        <div>
          <h3>App components</h3>
          <hr />
          <><User/><Message/><Logform/><Forms/></>
        </div>
    )
}
export default App;