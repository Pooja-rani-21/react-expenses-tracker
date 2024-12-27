import React from 'react'
import { useReducer } from 'react'

export default function UseReduce() {
   function task(use,action){
    switch(action.type){
      

    }
   }
   let [use,setuse]=useReducer(task,{number:0})
  return (
    <div>
      <h1>
        count in {use.number}
        </h1>
        <button
            onClick={
                ()=>setuse({type:"+"})
            }
        >
            Add
        </button>

        <button 
            onClick={
                ()=>setuse({type:"-"})
            }
        >
            Minus
        </button>

        
    </div>
  )
}
