import styled from "styled-components";

export const TaskDescription = styled.p<{ isDone: boolean }>`
  text-decoration: ${(props) => (props.isDone ? "line-through" : "unset")};
`;
