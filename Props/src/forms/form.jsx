import { useState } from "react";

const Forms = () => {

  let [user, setUser] = useState({});

  const emailHandler = (event) => {
    setUser({ ...user, email: event.target.value ,password:event.target.value});
  };

  const submitHandler = (event) => {
    event.preventDefault(); 
    console.log(user); 
  };

  return (
    <div>
      <h4>Login Details</h4>
      <form onSubmit={submitHandler}>
        EmailId: <input type="text" onInput={emailHandler} /> <br /> <br />
        Password: <input type="password" /> <br /> <br />
        <input type="submit" value="Login" />
      </form>
      <h4>{JSON.stringify(user)}</h4>
    </div>
  );
};

export default Forms;