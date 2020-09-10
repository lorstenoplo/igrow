import React, { useState } from 'react'
import TodoLists from './TodoLists'

const Todo=()=>{
    const[todo,setTodo]=useState("");

    const[items,setItems]=useState([]);

    const iEvent=(event)=>{
        setTodo(event.target.value);
    };

    const listofitems=()=>{
        setItems((oldItems)=>{
            return [...oldItems,todo];
        });
        setTodo("");
    };

    const deleteItems=(id)=>{
        setItems((oldItems)=>{
            return oldItems.filter((arrElem,index)=>{
                return index !== id;
            })
        })
    }

    return(
<>
<div className='main-div'>
<div className='center-div'>
<div className='header-div'><h1>ToDo List</h1></div>
<div className='button-div'>
   <input className='in' placeholder="Add a ToDo"  onChange={iEvent} value={todo}/>
    <button onClick={listofitems} className='adder'>+</button>
</div>
<ol>
    {/* <li>{todo}</li> */}
    {
        items.map((itemval,index)=>{
           return <TodoLists 
           key={index}
            id={index} 
            text={itemval} 
            onSelect={deleteItems}    
            />        })
    }
</ol>
</div>
</div>
</>)
};

export default Todo;