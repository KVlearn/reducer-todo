import React,{useState,useReducer,useEffect} from 'react';
import {reducer,initialState} from './reducers/reducer';
import {Form,Button,Input,Label} from 'reactstrap'
import TodoList from './components/TodoList';
import gsap from "gsap";
import './App.css';

function App(){

//useState for Form input state
const [task,setTask]=useState("");
const [tag,setTag]=useState("Health");
//useReducer for others
const [state,dispatch]=useReducer(reducer,initialState);
console.log('state in app=',state)

const handleChange=(e)=>{
    setTask(e.target.value)
}

const handleSelect=(e)=>{
    setTag(e.target.value)
}

useEffect(()=>{
    gsap.to("h1", {duration: 1, x:5,opacity: 0.8});

},[ ])


const handleSubmit=(e)=>{
    e.preventDefault();
    //dispatch add item to reducer function
    dispatch({type:"ADD_TASK",payload:{task:task,tag:tag}})
    setTask("");
}

const handleComplete=(id)=>{
    dispatch({type:"COMPLETE_TASK",payload:id})
}

const handleClear=()=>{
    dispatch({type:"CLEAR_COMPLETE"})
}
return(
    <div className="App">
        <h1>Helloz from my Todo App!</h1>
        <Form className="todoForm"
        onSubmit={handleSubmit}>
            <div>
            <Label htmlFor="todo">Enter your Task
            <Input id="todo"
            name="todo"
            value={task}
            onChange={handleChange}></Input>
            </Label>
            </div>
            <div>
            <label htmlFor="tag" className="taglabel">Enter Tag</label>
            <select id="tag"
            name="tag"
            value={tag}
            onChange={handleSelect}>
            <option value="Family">Family</option>  
            <option value="Health">Health</option>   
            <option value="Learning">Learning</option>   
            </select> 
            
            </div>
        
        <div className="mybutton">
        <div>
        <Button color="info">Add Todo Task</Button>
        </div>
       <br/>
        <div>
        <Button onClick={handleClear} color="danger">Clear Completed</Button>
        </div>
       
        </div>
        </Form>
        <TodoList todos={state.todos} handleComplete={handleComplete}/>
    </div>
    )
}
export default App;