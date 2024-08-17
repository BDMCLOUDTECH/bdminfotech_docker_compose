import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from "axios"
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const[contact,setContact]=useState("")
  const[user,setUser]=useState("")
  const contactHandler=async()=>{
    const {data}=await axios.get(`//localhost:3001/contact`)
    setContact(data)
  }
  const userHandler=async()=>{
    const {data}=await axios.get(`//localhost:3000/user`)
    console.log("the data received for user is",data)
    setUser(data)
  }
  useEffect(()=>{
    contactHandler()
    userHandler()
  },[])

  return (
    <>
    
      <h1>{process.env.VITE_DOCKER_REACT}</h1>
      <h1>{process.env.LOVE_FROM_DOCKER}</h1>
      {
        user &&   <p>user api info {user}</p>
      }
      {
        contact &&  
        <p>contact api info {contact}</p>
      }
   
    </>
  )
}

export default App
