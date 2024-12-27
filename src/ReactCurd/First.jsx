// import React, { useEffect} from 'react'
//  import { useState } from 'react';
//   import axios from "axios"
  

// export default function First() {
//     let [expense,setExpenses]= useState()
//      let [amount,setAmount]=useState()
//      let [data,setData] = useState()
//      let[value,setValue]=useState([])
//      let [sum,setSum]=useState(0)
//      let [Total,setTotal]=useState([])
     

//     let total;


//     let api ="https://6757e05dc0a427baf94e419c.mockapi.io/pooja/rani"

//      function save(e){
//          e.preventDefault()
         
//          axios.post(api,{expense,amount,data}).then(()=>{
//              alert("saved data")
//              setExpenses("");
//              setAmount("");
//              setData("");
//              setTotal("")

                 
//          }).catch((error)=>{
//              alert(error)
//          })    
//           }
//       useEffect(
//           ()=>{
//             axios.get(api).then((p)=>{
//                  // console.log(p.data)
//                   setValue(p.data)
//                   data=p.data
//                   setTotal(data)
//                 total=p.data.reduce((a,b)=>Number(a)+Number(b.amount),0)
//                 setSum(total)
        
//                 // console.log(total)
//         })
//          },[api,value,data]
//       )
//       function remove(id){
//         axios.delete(`${api}/${id}`).then(()=>{
//             alert("data deleted")
//         }).then(()=>{
//             axios.get(api).then((s)=>{
//                 setValue(s.data)
//             })
//         })
//     }


//   return (
//     <div className='expense'>
//          <h1>
//             Expense
//             Tracker
//             </h1>
//          <div className='spent'>
         
//          <h2>Add Expense</h2>

//          <form  onSubmit={save}>
//              <input type="text"  placeholder='Search Expenses' required value={expense} onChange={(e)=>setExpenses(e.target.value)}/>
//             <br/>
//              <input type="number" placeholder='Amount' required value={amount} onChange={(e)=>setAmount(e.target.value)} /> 
//              <br />
//              <input type="date" placeholder='date' required value={data}  onChange={(e)=>setData(e.target.value)}/>
//         <br/>
//           <br />
//          <input type="submit"/>
//         </form>
//         </div>
        
//         <div>
//         <h2>
//                 You've spent  <b className='b'>${sum}
//                 </b>                 
//                  <br />
//                 in a total of <b className='b'>{Total.length}</b> expenses
//             </h2>
//           </div>  
           
        
           

        
//          {/* <hr /> */}
//          <h1>Expenses</h1>
//          <ul>
//             {value.map(
//                 (i,index)=>(
//                     <li key={index.id}>
//                         <b>{i.expense}</b>
//                         {i.data}
//                         <b className='amount'>${i.amount}</b>
//                         <button className='delete' onClick={()=>remove(i.id)}>X</button>
//                         </li>
//                 )
//             )}
//             {/* <h1 className='add'>+</h1> */}
//          </ul>
        
//     </div>
//   )
// }

import React, { useEffect, useState } from "react";
import axios from "axios";

export default function First() {
  let [expense, setExpenses] = useState("");
  let [amount, setAmount] = useState("");
  let [data, setData] = useState("");
  let [value, setValue] = useState([]);
  let [sum, setSum] = useState(0);
  let [Total, setTotal] = useState([]);

  const api = "https://6757e05dc0a427baf94e419c.mockapi.io/pooja/rani";

  const calculateTotal = (data) =>
    data.reduce((acc, item) => acc + Number(item.amount), 0);

  const save = (e) => {
    e.preventDefault();

    axios
      .post(api, { expense, amount, data })
      .then(() => {
        alert("Saved data");
        setExpenses("");
        setAmount("");
        setData("");
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    axios.get(api).then((response) => {
      const fetchedData = response.data;
      setValue(fetchedData);
      setTotal(fetchedData);
      const totalAmount = calculateTotal(fetchedData);
      setSum(totalAmount);
    });
  }, [api,data]); // Removed unnecessary dependencies like `api`, `value`, `data`

  const remove = (id) => {
    axios
      .delete(`${api}/${id}`)
      .then(() => {
        alert("Data deleted");
        return axios.get(api); // Fetch the updated data after deletion
      })
      .then((response) => {
        const updatedData = response.data;
        setValue(updatedData);
        setTotal(updatedData);
        setSum(calculateTotal(updatedData));
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="expense">
      <h1>Expense Tracker</h1>
      <div className="spent">
        <h2>Add Expense</h2>
        <form onSubmit={save}>
          <input
            type="text"
            placeholder="Search Expenses"
            required
            value={expense}
            onChange={(e) => setExpenses(e.target.value)}
          />
          <br />
          <input
            type="number"
            placeholder="Amount"
            required
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <br />
          <input
            type="date"
            placeholder="Date"
            required
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
          <br />
          <br />
          <input type="submit" />
        </form>
      </div>
      <div>
        <h2>
          You've spent <b className="b">${sum}</b>
          <br />
          in a total of <b className="b">{Total.length}</b> expenses
        </h2>
      </div>
      <h1>Expenses</h1>
      <ul>
        {value.map((i) => (
          <li key={i.id}>
            <b>{i.expense}</b> {i.data}
            <b className="amount">${i.amount}</b>
            <button className="delete" onClick={() => remove(i.id)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}


