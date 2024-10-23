import { useForm } from "react-hook-form";
import styled from "styled-components";
import { EMAIL_EXP } from "../constant/regExp";

const Container = styled.div`
  padding: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const InputWrap = styled.div``;

interface FormInputType {
  toDo: string;

  extraError?: string;
}

export default function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormInputType>();

  const onValid = (data: FormInputType) => {
    setValue("toDo", "");
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onValid)}>
        <InputWrap>
          <input
            {...register("toDo", {
              required: "필수 입력 항목입니다.",
            })}
            placeholder="toDo"
          />
          <div>{errors.toDo?.message}</div>
        </InputWrap>

        <button>Add</button>
      </Form>
    </Container>
  );
}
