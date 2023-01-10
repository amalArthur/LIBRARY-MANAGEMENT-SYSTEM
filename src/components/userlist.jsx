import { useEffect, useState } from "react";

const UserList = () => {
    let[list,setList]=useState([])
useEffect(()=>{
    let fetchData=async()=>{
        let response=await fetch(' http://localhost:4000/users')
        let data=await response.json()
        setList(data)
    }
    fetchData()
},[])
let handleDispatch=(id,name)=>{
 setList(list.filter(x=>x.id!==id))
 alert(`${name}has been removed`)
}
    return ( 
        <div className="userlist">
            <h1>User List</h1>
            <div className="user001">
                {list.map(data=>(
                    <div className="user002">
                        <h5>Name:{data.name}</h5>
                        <h5>Age:{data.age}</h5>
                        <h5>Email:{data.email}</h5>
                        <h5>PhNo:{data.phoneNumber}</h5>
                        <button onClick={()=>handleDispatch(data.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default UserList;