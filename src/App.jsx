import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react'

function App() {
  const[users,setUsers]=useState([])
  const[name,setName]=useState([])
  const[email,setEmail]=useState([])
  const[phone,setPhone]=useState([])

  const addUser=()=>{
    setUsers([...users,{id:crypto.randomUUID(),"name":name,"email":email,"phone":phone}])
    console.log(users)
  }
  
  return (
    <>
    <div className='d-flex flex-column w-25'>
      <label className='form-label' >Name</label>
      <input type="text" className='form-control' value={name} onChange={(e)=>setName(e.target.value)}/>
      <label className='form-label'  >Email</label>
      <input type="email" className='form-control' value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <label className='form-label'>Phone</label>
      <input type="tel" className='form-control' value={phone} onChange={(e)=>setPhone(e.target.value)}/>
      <button className='btn btn-dark' onClick={addUser}>submit</button>
    </div>
    {
       users.length > 0 && 
      <table className='table'>
        <tbody>
        <tr><th>Name</th><th>Email</th><th>Phone</th></tr>
        {users.map(e=><tr key={e.id}><td>{e.name}</td><td>{e.email}</td><td>{e.phone}</td></tr>)}
        </tbody>
      </table>
    }
    </>
  )
}

export default App
