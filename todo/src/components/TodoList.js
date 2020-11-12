import React from 'react';
import Todo from './Todo';

function TodoList(props){
 console.log('props in todolist',props)
return(
    <div>
    {props.todos.map((item)=>{
        return <Todo key={item.id} 
        todo={item} 
        handleComplete={props.handleComplete}
         />
    })}
    </div>
)
}
export default TodoList;