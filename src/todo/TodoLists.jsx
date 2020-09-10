import React from 'react'

const TodoLists=(props)=>{
    return(
    <div className='list'>
     <button
      className='delete' 
      onClick={()=>{
        props.onSelect(props.id);
      }}>
     x
     </button>
      <li>{props.text}</li>
      </div>)
};

export default TodoLists;