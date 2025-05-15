import React, { useState } from "react";

let Registration = () => {
    let [user, setUser] = useState({ Uname: "", Mobile: "", Email: "" });

    let Updatehandler = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value });
    };

    let Submithandler = (event) => {
        event.preventDefault();
        console.log(user);
    };

    return (
        <>
            <pre>{JSON.stringify(user, null, 2)}</pre>
            <form onSubmit={Submithandler}>
                User Name:::: <input type="text" onChange={Updatehandler} name="Uname" /><br /><br />
                Mobile Number: <input type="number" onChange={Updatehandler} name="Mobile" /><br /><br />
                Email ID:::: <input type="email" onChange={Updatehandler} name="Email" /><br /><br />
                <input type="Submit" value={"Register"} />
            </form>
        </>
    );
};

export default Registration;
