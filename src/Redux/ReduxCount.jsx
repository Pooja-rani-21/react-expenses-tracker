import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,Decrement } from './Slicer'

export default function ReduxCount() {
    let a=useSelector((state)=>state.demo.value)
    console.log(a)
    let sample=useDispatch()
  return (
    <div>
        <h1>
            {a}
        </h1>
        <button 
            onClick={()=>sample(increment())}
        >
            Add
        </button>
        <button onClick={()=>sample(Decrement())
        }>
         Minus    
        </button>
    </div>
  )
}
