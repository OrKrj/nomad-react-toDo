import { useState } from "react";
import { useForm } from "react-hook-form";

interface IForm {
  toDo: string;
}

function ToDoList() {
  const [toDo, setToDo] = useState("");
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const onSubmit = (data: IForm) => {
    console.log("add to do", data.toDo);
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
    </div>
  );
}

export default ToDoList;
