import { useSetRecoilState } from "recoil";
import { TodoCategories, ToDoDataType } from "../type/data/ToDo";
import { toDoState } from "../recoil/atom/Todo";

export default function ToDo({ id, text, category }: ToDoDataType) {
  const setToDos = useSetRecoilState(toDoState);

  const onClick = (newCategory: TodoCategories) => {
    setToDos((curr) => {
      const index = curr.findIndex((toDo) => toDo.id === id);
      const newTodo = { id, text, category: newCategory };

      return [...curr.slice(0, index), newTodo, ...curr.slice(index + 1)];
    });
  };

  return (
    <li>
      <span>{text}</span>
      {category !== TodoCategories.DOING && (
        <button onClick={() => onClick(TodoCategories.DOING)}>Doing</button>
      )}
      {category !== TodoCategories.DONE && (
        <button onClick={() => onClick(TodoCategories.DONE)}>Done</button>
      )}
      {category !== TodoCategories.TO_DO && (
        <button onClick={() => onClick(TodoCategories.TO_DO)}>To Do</button>
      )}
    </li>
  );
}
