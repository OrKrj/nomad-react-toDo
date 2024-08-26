import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState } from "../atoms";

interface IForm {
  toDo: string;
}

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const onSubmit = (data: IForm) => {
    setToDos((oldToDos) => [
      { text: data.toDo, category, id: Date.now() },
      ...oldToDos,
    ]);
    setValue("toDo", ""); // toDo 작성한 뒤 자동으로 입력 창 비움
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("toDo", { required: "Please write a To Do" })}
        placeholder="Write a to do"
      />
      <button>Add</button>
    </form>
  );
}

export default CreateToDo;
