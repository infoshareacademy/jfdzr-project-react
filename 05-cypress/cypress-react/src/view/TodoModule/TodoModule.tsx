import { useState, ChangeEvent } from "react";
import { TodoItem } from "../../types";
import TodoList from "./TodoList/TodoList";

interface TodoModuleProps {
  todoList: TodoItem[];
  setTodoList: React.Dispatch<React.SetStateAction<TodoItem[]>>;
}

const TodoModule = ({ todoList, setTodoList }: TodoModuleProps) => {
  const [descriptionInputValue, setDescriptionInputValue] = useState("");

  const handleDesciprionInputChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setDescriptionInputValue(event.target.value);
  };

  const createTodo = () => {
    const newTodo = {
      id: Math.random(),
      description: descriptionInputValue,
      isDone: false,
    };

    setTodoList((todos) => [...todos, newTodo]);
    setDescriptionInputValue("");
  };

  return (
    <>
      <input
        id="todo-input"
        value={descriptionInputValue}
        onChange={handleDesciprionInputChange}
      />
      <button
        id="add-todo-button"
        disabled={!descriptionInputValue}
        onClick={createTodo}
      >
        ADD NEW TODO
      </button>
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </>
  );
};

export default TodoModule;
