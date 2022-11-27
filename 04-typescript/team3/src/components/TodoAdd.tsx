import Task from "./Interfaces/Task"
import React from "react"

interface PropsType {
    addTask: React.Dispatch<React.SetStateAction<Task[]>>
}

export const TodoAdd = ({addTask} : PropsType) => {
    const inputRef = React.useRef<HTMLInputElement>(null);

    const newTask = () => {
        
        const description:string | undefined = inputRef.current?.value
        if (description != undefined && description.length > 0) {
          // console.log(tasks)

           const newTask:Task = {
            id: Math.random(),
            description: description,
            isDone: false
           }
           
           addTask((tasks)=>{
            return [...tasks, newTask] 
            
           })
        }
       
    }

    return (

        <div>
            <input ref={inputRef} type='text'></input>
            <button onClick={newTask}>Add Task</button>
        </div>

    )
}