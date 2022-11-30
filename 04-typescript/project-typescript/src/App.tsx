import { useState } from "react";
import { TodoItem } from "./types";
import Todo from "./view/Todo/Todo";

function App() {
  const [todoList, setTodoList] = useState<TodoItem[]>([]);

  return <Todo todoList={todoList} setTodoList={setTodoList} />;
}

export default App;
