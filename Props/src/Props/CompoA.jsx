import CompoB from "./CompoB";

let CompoA = () => {
    let uid = 101;
    let uname = "Rahul";
    let loc = ["Wayanad", "ND", "Bangalore"];

    return (
        <div>
            <h3>Component A</h3>
            <hr />
            <CompoB eid={uid} ename={uname} eloc={loc} />
        </div>
    );
};

export default CompoA;
