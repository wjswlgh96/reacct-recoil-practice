import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";

import { toDoSelector } from "../recoil/selector/Todo";
import CreateToDo from "./CreateToDo";
import { categoryState } from "../recoil/atom/Todo";
import { TodoCategories } from "../type/data/ToDo";
import ToDo from "./ToDo";

const Container = styled.div`
  padding: 10px;
`;

export default function ToDoList() {
  const [category, setCategory] = useRecoilState(categoryState);
  const toDos = useRecoilValue(toDoSelector);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    const value = event.currentTarget.value as TodoCategories;
    setCategory(value);
  };

  return (
    <Container>
      <h1>To Dos</h1>
      <hr />
      <select value={category} onInput={onInput}>
        <option value={TodoCategories.TO_DO}>To Do</option>
        <option value={TodoCategories.DOING}>Doing</option>
        <option value={TodoCategories.DONE}>Done</option>
      </select>
      <CreateToDo />
      {toDos.map((data) => (
        <ToDo key={data.id} {...data} />
      ))}
    </Container>
  );
}
