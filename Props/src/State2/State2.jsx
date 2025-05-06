import { useState } from "react";
let Message = () => {
    let [msg, setMsg] = useState("Hello");


    let gmHandler = () => {
        setMsg("Good Morning");       
    };
    
    let gaHandler = () => {
        setMsg("Good Afternoon");
    };
    let gehandler=()=>{
        setMsg("good evening");
    };
    let gnhandler=()=>{
        setMsg("good night")
    };

return <>
<h3>Button messages</h3>
<hr />
<h4>messge value:{msg}</h4>
<button onClick={gmHandler}>GM</button>
<button onClick={gaHandler}>GA</button>
<button onClick={gehandler}>GE</button>
<button onClick={gnhandler}>GN</button>
</>
}
export default Message