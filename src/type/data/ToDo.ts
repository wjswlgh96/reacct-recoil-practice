export enum TodoCategories {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

export interface ToDoDataType {
  id: number;
  text: string;
  category: TodoCategories;
}
