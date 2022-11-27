import ToDoItem from "../toDoItem/ToDoItem"
import { ToDo } from "../../App"

 type ToDoListProps = {
    toDoList: ToDo[]
}



function ToDoList({ toDoList }: ToDoListProps) {

    return (
        <>
            {toDoList.map(({ id, description, isDone }) => {
                return <ToDoItem key={id} description={description} isDone={isDone} />
            })}
        </>
    )
}

export default ToDoList