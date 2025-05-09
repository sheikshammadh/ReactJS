import { useState } from "react";

let Forms= ()=>{
  let[user,setUser]=useState[{}]
  let[]=useState[{}]

  return <div>
          <h4>Login Details</h4>
          <form >
          EmailId:  <input type="text" onInput={emailhandler}/>  <br /> <br />
          Password: <input type="password" /> <br /> <br />
          <input type="submit" value={"Login"} />
          </form>
          </div>
}
export default Forms;