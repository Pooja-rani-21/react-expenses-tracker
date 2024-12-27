import React from 'react'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export default function List() {
let page= useNavigate()
   function para(){
      page("Usestate")
   }
    
    let ar=[2,3,4,5,7,8,0]
       console.log(ar)
    let total=ar.reduce(
       (a,b)=>a+b,0
     )
     console.log(total)


     
  return (
    <div>
        <ol>
     {ar.map(
        (item,index)=>(
           <li  key={index}>{item}</li> 
        ))
     }
     </ol>

     {total}
     <br/>
   {/* <Links to="com">
   </Links> */}
   <NavLink to="Hooks/usestate">
      <button onClick={para}>
      usestate

      </button>
      </NavLink>
    </div>
  )
}
