import { TodoItem } from "../../../../types";
import {
  TodoDescription,
  TodoWrapper,
  DeleteTodoButton,
} from "./TodoListItem.styles";

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
  const checkTodo = () => {
    setTodoList((todos) =>
      todos.map((todo) =>
        todo.id !== id
          ? todo
          : { id: todo.id, description: todo.description, isDone: !todo.isDone }
      )
    );
  };

  const deleteTodo = () => {
    setTodoList((todos) => todos.filter((todo) => todo.id !== id));
  };

  return (
    <TodoWrapper>
      <TodoDescription isDone={isDone} onClick={checkTodo}>
        {description}
      </TodoDescription>
      <DeleteTodoButton onClick={deleteTodo}>x</DeleteTodoButton>
    </TodoWrapper>
  );
};

export default TodoListItem;
