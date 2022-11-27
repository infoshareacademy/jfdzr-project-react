import React, { useState } from 'react';
import './App.css';
import ToDoList from './components/toDoList/ToDoList';

export type ToDo = {
  id:number,
  description: string,
  isDone: boolean
}


function App() {

const [toDoList, setToDoList] = useState<ToDo[]>([])
const [inputValue, setInputValue] = useState("")

const handleToDoList = () => {
  const currentToDoList = [...toDoList]
  currentToDoList.push({ id: Math.random(), description: inputValue, isDone: false })
  setToDoList(currentToDoList)
  console.log(toDoList)
}

  return (
    <div>
      <input onChange={(e)=>{setInputValue(e.target.value)}} type='text' />
      <button onClick={handleToDoList} >Dodaj</button>
      <ToDoList toDoList={toDoList} />
    </div>
  );
}
export default App;
