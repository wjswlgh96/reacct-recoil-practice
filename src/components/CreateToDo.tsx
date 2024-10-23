import { useForm } from "react-hook-form";
import { ToDoFormType } from "../type/props/ToDoList";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState } from "../recoil/atom/Todo";

export default function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ToDoFormType>();
  const handleValid = ({ toDo }: ToDoFormType) => {
    setToDos((prev) => [{ id: Date.now(), text: toDo, category }, ...prev]);
    setValue("toDo", "");
  };

  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("toDo", {
          required: "필수 입력 항목입니다.",
        })}
        placeholder="toDo를 작성해보세요."
      />
      <div>{errors.toDo?.message}</div>
      <button>Add</button>
    </form>
  );
}
