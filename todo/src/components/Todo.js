import React,{useEffect} from 'react';
import Moment from 'react-moment';
import moment from 'moment';
import gsap from "gsap";

function Todo(props){

const handleClassname=()=>{
    console.log('class=',props.todo.completed);
    return props.todo.completed ? 'taskCompleted' : 'task'
}

const handleDueDate=()=>{
    let completeBy=moment(props.todo.completeBy).format('MM-DD-YYYY');
    let currentDate= moment().format('MM-DD-YYYY')
    console.log('current date=',currentDate)
    console.log('completedby=',completeBy)
    console.log(moment(currentDate).isAfter(completeBy, 'day'));
    return (moment(currentDate).isAfter(completeBy, 'day')) ? 'dueCompletion' : 'nodueCompletion'

}
 
useEffect(()=>{
    gsap.to(".task",{duration: 1, x: 8, y: 8, scale: 1.1,skewX:1});
     
},[props.todo.item])

useEffect(()=>{
    gsap.to(".taskCompleted",{duration: 1, x: 8, y: 10, scale: 1,skewX:2});
     
},[props.todo.completed])

return(
<div className={handleClassname()}
onClick={(e)=>{props.handleComplete(props.todo.id)}}>
    <p>{props.todo.item} </p>
    <p className="completeDate"> Tag : {props.todo.tag} <br/>To be completed by: {moment(props.todo.completeBy).add(1, 'days').calendar()}</p>
    <p className={handleDueDate()}>This Task is due for Completion !</p>
</div>
)
}
export default Todo;