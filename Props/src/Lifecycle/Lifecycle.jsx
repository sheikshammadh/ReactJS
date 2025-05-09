import Axios from 'axios'
import { useEffect, useState } from 'react'
let UsersData=()=>{
   let [users,setUsers] = useState([])
   useEffect(()=>{
    Axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
       console.log(response.data)
       setUsers(response.data)
    })
    .catch((err)=>{
       console.log(err.message)
    })
   },[])
   return <div className='container'>
            <h3>User Component</h3>
            <pre>{JSON.stringify(users)}</pre>
          
            <div className='row'>
            <div className='col-4'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>User Id:</th>
                        <th>User Name</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                {
                users.length>0 ? 
                <>
                {
                    users.map((user)=>{
                        return <tr>
                                    <td>{user.id}</td>
                                    <td>{user.username}</td>
                                    <td>{user.address.city}</td>
                              </tr>
                    })
                }
                </>:<h4>No Data</h4>
                }
                </tbody>
            </table>
            </div>
            </div>
            
           
           </div>
}
export default UsersData;