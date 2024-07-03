import React from 'react'
import './App.css'
import TaskForm from './Components/TaskForm'
const App = () => {
  return (
    <div className='app'>
       <TaskForm />
      <main className='app_main'>
        <secion className='task_column'>Section1</secion>
        <secion className='task_column'>Section2</secion>
        <secion className='task_column'>Section3</secion>
      </main>
    
    
    </div>
  )
}

export default App