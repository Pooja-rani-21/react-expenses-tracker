import React, {  useState,useEffect } from 'react'
import axios from 'axios'
export default function Curd() {
    let[name,setName]= useState()
    let [value,setValue]=useState()
    
    let api="https://6757e05dc0a427baf94e419c.mockapi.io/pooja/rani"
    

    function save(e){
        e.preventDefault()
        axios.post(api,{name}).then(()=>{
            alert("data saved")
            setName("")
        }).catch((error)=>{
            alert(error)
        })        
    }
    
    useEffect(
        ()=>{
            axios.get(api).then((s)=>{
                setValue(s.data)
            })
        },[api,value]
    )    
    
  return (
    <div>
        <h2>
            Create 
        </h2>
        <form onSubmit={save}>
            <input type="text" placeholder='Enter the name' value={name} onChange={(e)=>setName(e.target.value)}/>
            <br/>
            <br/>
            <input type="submit" />
        </form>
        <hr />
        <h1>
            Datas
        </h1>
        
          <ul>
            {value.map(
                (item,index)=>(
                    <li key={index.id}>
                        {item.name}
                    </li>
                )
            )}
        </ul>
        
        
    </div>
  )
}
