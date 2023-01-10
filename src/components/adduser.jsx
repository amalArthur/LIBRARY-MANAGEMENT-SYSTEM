import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
    let [name,setName]=useState("")
    let [age,setAge]=useState("")
    let [email,setEmail]=useState("")
    let [phoneNumber,setphoneNumber]=useState("")

    let handleSubmit=(e)=>{
        e.preventDefault();
        let userData={name,age,email,phoneNumber}
        fetch('http://localhost:4000/users',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(userData)
    })
    alert('user has been added successfully')
       navigate('/admin/user-list')
    }
    let navigate = useNavigate()

    return (
        <div className="adduser">
            <h1>Add a new user</h1>
            <div className="form">
                <form action=""onSubmit={handleSubmit}>
                    <div className="name">
                        <input type="text"placeholder="enter name"value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="age">
                        <input type="number" min='1'placeholder="enter age" value={age} onChange={(e) => setAge(e.target.value)}/>
                    </div>
                    <div className="email">
                        <input type="text" placeholder="enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="phone number">
                        <input type="tel" minLength='10'maxLength='10'placeholder="enter phone number" value={phoneNumber} onChange={(e) => setphoneNumber(e.target.value)}/>
                    </div>
                    <button>Add User</button>
                </form>
            </div>
            </div>
        
    )
}
export default AddUser;

