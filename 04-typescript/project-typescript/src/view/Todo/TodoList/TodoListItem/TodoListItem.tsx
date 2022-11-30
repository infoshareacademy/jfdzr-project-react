import { TodoItem } from "../../../../types";
import { TaskDescription } from "./TodoListItem.styles";

interface TodoListItemProps {
  id: number;
  description: string;
  isDone: boolean;
  setTodoList: React.Dispatch<React.SetStateAction<TodoItem[]>>;
}

const TodoListItem = ({
  id,
  description,
  isDone,
  setTodoList,
}: TodoListItemProps) => {
  const handleClick = () => {
    setTodoList((todos) =>
      todos.map((todo) =>
        todo.id !== id
          ? todo
          : { id: todo.id, description: todo.description, isDone: !todo.isDone }
      )
    );
  };

  return (
    <TaskDescription isDone={isDone} onClick={handleClick}>
      {description}
    </TaskDescription>
  );
};

export default TodoListItem;
