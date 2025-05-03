import { useState } from "react";

let Message = () => {
    let [msg, setMsg] = useState("Hello");
    let [imgUrl, setImgUrl] = useState("");

    let gmHandler = () => {
        setMsg("Good Morning");
        setImgUrl("");
    };
    
    let gaHandler = () => {
        setMsg("Good Afternoon");
        setImgUrl("");
    };

    let imgHandler = () => {
        setMsg("Here's your image:");
        setImgUrl("https://tse2.mm.bing.net/th?id=OIP.7cRYFyLoDEDh4sRtM73vvwHaDg&pid=Api&P=0&h=180");
    };

    return (
        <div>
            <h1>Message Component</h1>
            <hr/>
            <h3>Message Value: {msg}</h3>
            <button onClick={gmHandler}>GM</button>
            <button onClick={gaHandler}>GA</button>
            <button onClick={imgHandler}>Display Image</button>
            {imgUrl && <img src={imgUrl} alt="Displayed Image" />}
        </div>
    );
};

export default Message;