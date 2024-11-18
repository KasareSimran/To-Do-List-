
// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';

function ToDoList(){
    const [tasks,setTask]=useState(["wake up at 5am","study for 9 hr"])
    const [newTask,setNewTask]=useState('');

    function handleInputevent(e){
    setNewTask(e.target.value);
    }

    function addTask(){
        if(newTask.trim()!==""){
            setTask(t=>[...t,newTask])
        setNewTask("");
        }
        
    }

    function deleteTask(index){
        const updatedTask=tasks.filter((_,i)=>i!==index);
        setTask(updatedTask);

    }

    return(
        <div className='main-container'>
            <h1>TO-DO-LIST APP</h1>
            <div className='input-container'>
                <input type='text' placeholder='Enter your task..' value={newTask} onChange={handleInputevent}/>
                <button className='add-button' onClick={addTask}>Add</button>
            </div>
            <ol>
                {tasks.map((task,index)=>
                <li key={index}>
                    <span className='text'>{task}</span>
                    <button  className='delete-button'onClick={()=>deleteTask(index)}>Delete</button>
                </li>)}
                
            </ol>

        </div>
    );
}
export default ToDoList;