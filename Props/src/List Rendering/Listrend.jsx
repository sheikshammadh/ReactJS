let Employ=()=>{
let Employees=[
    {eid:101,ename:"Nandu",esal:54000},
    {eid:102,ename:"Shyam",esal:34000},
    {eid:103,ename:"Vishnu",esal:45000},

]

return <>
<h3>Employee Component</h3>
<table className="table">
    <thead>
        <tr>
            <th>EId</th>
            <th>E Name</th>
            <th>E Salary</th>
        </tr>
    </thead>
    <tbody>
        {Employees.map((empl)=>{
            return <tr key={empl.eid}>{/*must have an unique value*/}
                <td>{empl.eid}</td>
                <td>{empl.ename}</td>
                <td>{empl.esal}</td>
            </tr>
        })}
        
    </tbody>
</table>
</>

}
export default Employ