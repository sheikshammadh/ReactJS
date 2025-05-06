import { useState } from "react";
let Handlers = () => {
    let [msg, setMsg] = useState("Hello");


    let updateHandler = (msgvalue) => {
        setMsg(msgvalue);       
    };
   

return <>
<h3>Button messages</h3>
<hr />
<h4>messge value:{msg}</h4>
<button onClick={updateHandler.bind('null','gm')}>GM</button>
<button onClick={updateHandler.bind('null','ga')}>GA</button>
<button onClick={updateHandler.bind('null','ge')}>GE</button>
<button onClick={updateHandler.bind('null','gn')}>GN</button>
</>
}
export default Handlers