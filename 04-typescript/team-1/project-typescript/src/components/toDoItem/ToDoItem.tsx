type ToDoItemProps = {
    description: string,
    isDone: boolean
}

function ToDoItem({description, isDone}:ToDoItemProps) {
    return (
        <p>{description}</p>
    )
}

export default ToDoItem