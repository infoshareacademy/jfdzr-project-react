import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Task from './components/Interfaces/Task'

import { TodoAdd } from './components/TodoAdd'
import { TodoList } from './components/TodoList'



const emptyTasks:Task[] = []

function App() {
  const [tasks, setTask] = useState(emptyTasks)

  console.log(tasks)
  return (
    <div className="App">
      <TodoAdd addTask={setTask} />
      <TodoList tasks={tasks} changeState={setTask}/>
    </div>
  )
}

export default App
