import CompE from './CompE'
let CompD = (props)=>{
    return <div>
                <h2>Component D</h2>
                <pre>{JSON.stringify(props)}</pre>
                <hr />
                <CompE ename={props.ename}/>
            </div>
}
export default CompD;

