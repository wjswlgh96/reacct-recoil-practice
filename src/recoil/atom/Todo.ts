import { atom } from "recoil";
import { TodoCategories, ToDoDataType } from "../../type/data/ToDo";

export const toDoState = atom<ToDoDataType[]>({
  key: "toDo",
  default: [],
});

export const categoryState = atom<TodoCategories>({
  key: "category",
  default: TodoCategories.TO_DO,
});
