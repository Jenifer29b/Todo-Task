import React from 'react'
import './TaskForm.css'


const TaskForm = () => {
    return (
        <header className='app_header'>
            <form>
            <input type="text" className='task_input'
                placeholder='Enter your task' />
            
            <input type="text" className='task_input'
                placeholder='Description of ur task' />
            
                <select className='task_status'>
                    <option>Ongoing</option>
                    <option>Completed</option>
                    <option>Not Completed</option>
                </select>
                <button type="submit" className='task_submit'>
                    + Add Task
            </button>
            
            </form>
        </header>
    
  )
}

export default TaskForm