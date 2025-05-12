import { useState } from "react";

const Login = () => {
  let [user, setUser] = useState({ email: "", password: "" });

  let emailHandler = (event) => {
    setUser({ ...user, email: event.target.value });
  };

  let pwdHandler = (event) => {
    setUser({ ...user, password: event.target.value });
  };

  let submitHandler = (event) => {
    event.preventDefault(); // Prevent default form submission
    console.log(user); // Log user data
    alert(JSON.stringify(user)); // Display user data as alert
  };

  return (
    <div>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <h4>Login Details</h4>
      <form onSubmit={submitHandler}>
        EmailId: <input type="text" onChange={emailHandler} /> <br /> <br />
        Password: <input type="password" onChange={pwdHandler} /> <br /> <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;