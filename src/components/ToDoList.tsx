import React from "react";
import { useForm } from "react-hook-form";
import { atom, useRecoilState } from "recoil";

const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

interface IForm {
  toDo: string;
}

interface IToDo {
  text: string;
  // 자료형과 함께 특정 문자열을 타입으로 지정 가능
  category: "To_Do" | "Doing" | "Done";
  id: number;
}

function ToDoList() {
  // useState랑 형식이 거의 똑같음
  const [toDos, setToDos] = useRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const onSubmit = (data: IForm) => {
    setToDos((oldToDos) => [
      { text: data.toDo, category: "To_Do", id: Date.now() },
      ...oldToDos,
    ]);
    setValue("toDo", ""); // toDo 작성한 뒤 자동으로 입력 창 비움
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("toDo", { required: "Please write a To Do" })}
          placeholder="Write a to do"
        />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <li key={toDo.id}>{toDo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
