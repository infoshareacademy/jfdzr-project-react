import styled from "styled-components";

export const TodoDescription = styled.p<{ isDone: boolean }>`
  text-decoration: ${(props) => (props.isDone ? "line-through" : "unset")};
`;

export const TodoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const DeleteTodoButton = styled.button`
  background-color: red;
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
