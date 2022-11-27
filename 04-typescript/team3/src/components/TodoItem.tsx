
import Task from "./Interfaces/Task"
import React from "react"

interface PropsType {
    task: Task,
    changeState: React.Dispatch<React.SetStateAction<Task[]>>
}

export const TodoItem = ({task , changeState}: PropsType) => {
    const liRef = React.useRef<HTMLLIElement>(null);

    const changeTask = () => {
        console.log(liRef)
        liRef.current?.setAttribute('style','text-decoration: line-through')
        changeState((state)=> state.map((e)=> e.id != task.id ? e : {id:e.id, description:e.description, isDone: true})
        )

    }
    return (
        <li ref={liRef} onClick={changeTask}>{task.description}</li>
    )
}