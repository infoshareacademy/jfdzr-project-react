import { TodoItem } from "../../../types";
import TodoListItem from "./TodoListItem/TodoListItem";

interface TodoListProps {
  todoList: TodoItem[];
  setTodoList: React.Dispatch<React.SetStateAction<TodoItem[]>>;
}

const TodoList = ({ todoList, setTodoList }: TodoListProps) => {
  return (
    <>
      {todoList.map(({ description, id, isDone }) => {
        return (
          <TodoListItem
            key={id}
            id={id}
            isDone={isDone}
            description={description}
            setTodoList={setTodoList}
          />
        );
      })}
    </>
  );
};

export default TodoList;
