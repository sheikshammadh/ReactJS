let CompE=(props)=>{
 return<>
 <h3>Component E</h3>
 <pre>{JSON.stringify(props)}</pre>
 <hr />
 <h3>Employee name:{props.ename}</h3>
 </>
}
export default CompE