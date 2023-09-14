import React, { useState } from 'react';
import "./Project.css"

const Project = () => {
    const [task,setTask] = useState([]);
    const [data, setData] = useState('');
    const [editTask, setEditTask] = useState(null);

    const addTask = () => {
        if(data.trim() !== ""){
            if(editTask === null){
                setTask([...task,data]);

            }
            else{
                const updateTask = [...task];
                updateTask[editTask] = data;
                setTask(updateTask);
                setEditTask(null)
            }
            setData('')
        }
    }

    const editedTask = (i) => {
        setData(task[i])
        setEditTask(i)

    }
    const deletedTask = (index) => {
        const updatedTask = [...task];
        updatedTask.splice(index,1)
        setTask(updatedTask)
    }


  return (
    <div className='container'>
        <h1>Task Management System</h1>
        <div>
            <input 
                type='text'
                placeholder='Enter task here'
                value={data}
                onChange={(e) => setData(e.target.value)}
            />
            <button>
                {editTask === null ? "Add Task" : "Update Task"}
            </button>
        </div>
        <div>
            <ul></ul>
        </div>


    </div>
  )
}

export default Project