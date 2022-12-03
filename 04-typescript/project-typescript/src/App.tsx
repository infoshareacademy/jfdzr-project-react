import { useState } from "react";
import { TodoItem } from "./types";
import TodoModule from "./view/TodoModule/TodoModule";

function App() {
  const [todoList, setTodoList] = useState<TodoItem[]>([]);

  return <TodoModule todoList={todoList} setTodoList={setTodoList} />;
}

export default App;
