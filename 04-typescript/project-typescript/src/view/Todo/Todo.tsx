import { useRef } from "react";
import { TodoItem } from "../../types";
import TodoList from "./TodoList/TodoList";

interface TodoProps {
  todoList: TodoItem[];
  setTodoList: React.Dispatch<React.SetStateAction<TodoItem[]>>;
}

const Todo = ({ todoList, setTodoList }: TodoProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const createTask = () => {
    const newTask = {
      id: Math.random(),
      description: inputRef?.current?.value ?? "",
      isDone: false,
    };

    setTodoList((todos) => [...todos, newTask]);
  };

  return (
    <>
      <input ref={inputRef} />
      <button onClick={createTask}>ADD NEW TASK</button>
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </>
  );
};

export default Todo;
