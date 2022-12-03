import { useState, ChangeEvent } from "react";
import { TodoItem } from "../../../../types";
import {
  TodoDescription,
  TodoWrapper,
  DeleteTodoButton,
  EditTodoButton,
  TodoEditInput,
  SaveTodoButton,
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
  const [isEditModeOpen, setIsEditModeOpen] = useState(false);
  const [todoDescription, setTodoDescription] = useState(description);

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

  const openEditMode = () => {
    setIsEditModeOpen(true);
  };

  const saveModifiedTodo = () => {
    setTodoList((todos) =>
      todos.map((todo) =>
        todo.id !== id
          ? todo
          : { id: todo.id, description: todoDescription, isDone: isDone }
      )
    );
    setIsEditModeOpen(false);
  };

  const handleTodoDesciprionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTodoDescription(event.target.value);
  };

  return (
    <TodoWrapper>
      {isEditModeOpen ? (
        <TodoEditInput
          onChange={handleTodoDesciprionChange}
          defaultValue={description}
        />
      ) : (
        <TodoDescription isDone={isDone} onClick={checkTodo}>
          {todoDescription}
        </TodoDescription>
      )}
      {!isEditModeOpen && (
        <DeleteTodoButton onClick={deleteTodo}>x</DeleteTodoButton>
      )}
      {isEditModeOpen ? (
        <SaveTodoButton disabled={!todoDescription} onClick={saveModifiedTodo}>
          SAVE
        </SaveTodoButton>
      ) : (
        <EditTodoButton onClick={openEditMode}>EDIT</EditTodoButton>
      )}
    </TodoWrapper>
  );
};

export default TodoListItem;
