import React from "react";
import { useState } from "react";
import ToDoList from "./ToDoList";

const App=()=>{
   const [cval,upval]=useState();
   const[item,upitem]=useState([]);

   const itemevent=(event)=>{
      upval(event.target.value);
   };
   const additem=()=>{
       upitem((preval)=>{
        return [...preval,cval];
        
      });
   }
   

   const deleteitem=(id)=>{
      upitem((preval)=>{
         return preval.filter((arrelement,index)=>{
            return index !== id;
         })
         
      })
   }

   return(<>
      <div className="main_div">
         <div className="center_div">
         <br/>
            <h1>to Do list</h1>
            <br/>
            <input 
            type="text"
            placeholder="add list of item"
            onChange={itemevent}
                />
         <button className="b1" onClick={additem}>+</button>
         <br/>
         <ol>
             {item.map((val,index)=>{
                return <ToDoList
                         key={index}
                         id={index}
                         text={val}
                        onSelect={deleteitem}
                />
             }
             )
             }
             </ol>
         </div>
      </div>
   </>
   );
            };

export default App;

