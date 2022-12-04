import styled from "styled-components";

export const TodoDescription = styled.p<{ isDone: boolean }>`
  text-decoration: ${(props) => (props.isDone ? "line-through" : "unset")};
`;

export const TodoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const TodoActionButton = styled.button`
  color: white;
  width: 15px;
  height: 15px;
  padding: 8px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
`;

export const DeleteTodoButton = styled(TodoActionButton)`
  background-color: red;
`;

export const EditTodoButton = styled(TodoActionButton)`
  background-color: green;
  width: 40px;
`;

export const SaveTodoButton = styled(TodoActionButton)`
  background-color: blue;
  width: 40px;
`;

export const TodoEditInput = styled.input`
  margin: 16px;
  margin-left: 0;
`;
