import { useState } from "react";

const Formss = () => {
  const [user, setUser] = useState({
    email: "",password: "",
  });

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const submitHandler = (event) => {
    console.log(user);
  };

  return (
    <div>
      <h4>Login Details</h4>
      <form onSubmit={submitHandler}>
        EmailId: <input type="text" name="email" onChange={inputHandler} /> <br /><br />
        Password: <input type="password" name="password" onChange={inputHandler} /> <br /><br />
        <input type="submit" value="Login" />
      </form>
      <h4>{JSON.stringify(user.email)}</h4>
      <h4>{JSON.stringify(user.password)}</h4>
    </div>
  );
};

export default Formss;
