
import Task from "./Interfaces/Task"
import { TodoItem } from "./TodoItem"

interface PropsType {
    tasks: Task[],
    changeState: React.Dispatch<React.SetStateAction<Task[]>>
}

export const TodoList = ({tasks, changeState} : PropsType) => {
    console.log(tasks)
    return (
        <ul>
        {tasks.map((task)=>{
            
            return <TodoItem key={task.id} task={task} changeState={changeState}/>
        })}
        </ul>
    )

}
