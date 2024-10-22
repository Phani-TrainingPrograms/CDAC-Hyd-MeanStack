import React, { useState } from 'react'

export default function Ex13TodolistExample() {
    const [tasks, setTasks] = useState([]) // blank array when it starts
    const [newTask, setNewTask] = useState("") //black task 

    function handleInputChange(ev){
        setNewTask(ev.target.value)
    }

    function addTask(){
        console.log(newTask);
        setTasks(t => [...t, newTask])
        setNewTask("");
        console.log(tasks);
    }

    function removeTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index)
        setTasks(updatedTasks)
    }

    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index -1], updatedTasks[index]];
            setTasks(updatedTasks)
        }
    }

    function moveTaskDown(index){
        if(index < tasks.length -1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks)
        }
    }

  return (
    <div>
        <h1>To-Do-List</h1>
        <hr />
        <div>
            <input type='text' placeholder='Enter a Task....' value={newTask} onChange={handleInputChange}/>
            <button onClick={addTask}>Add Task</button>
        </div>
        <ol>
            {tasks.map((task, index)=>
                <li key={index}>
                    <span>{task}</span>
                    <button onClick={() => removeTask(index)}>Delete</button>
                    <button onClick={() => moveTaskUp(index)}>Move Up☝</button>
                    <button onClick={() => moveTaskDown(index)}>Move Down 👇</button>
                </li>
            )}
        </ol>
    </div>
  )
}
