import { useState } from "react";
import { useForm } from "react-hook-form";

// function ToDoList() {
//   const [toDo, setToDo] = useState("");
//   const [toDoError, setToDoError] = useState("")

//   const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = event;
//     setToDo(value);
//   };

//   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault;
//     if (toDo.length < 10) {
//        return setToDoError("To do should be longer")
//     }
//     console.log(toDo);
//   };

//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input onChange={onChange} value={toDo} placeholder="Write a to do" />
//         <button>Add</button>
//       </form>
//     </div>
//   );
// }

interface IForm {
  email: string;
  password1: string;
  password2: string;
  username: string;
  age: string;
  region: string;
}

function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>({
    defaultValues: { email: "naver.com" },
  });
  const onValid = (data: IForm) => {
    if (data.password1 !== data.password2) {
      setError(
        "password1",
        { message: "Passwords are not same" },
        { shouldFocus: true }
      );
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "Only naver email is allowed",
            },
          })}
          placeholder="email"
        />
        <span>{errors?.email?.message}</span>
        <input
          {...register("password1", {
            required: "password1 is required",
            minLength: {
              value: 15,
              message: "Your password is too short.",
            },
          })}
          placeholder="password"
        />
        <span>{errors?.password1?.message}</span>
        <input
          {...register("password2", {
            required: "password2 is required",
            minLength: {
              value: 15,
              message: "Your password is too short.",
            },
          })}
          placeholder="password"
        />
        <span>{errors?.password2?.message}</span>
        <input
          {...register("username", {
            required: "username is required",
            minLength: 10,
            validate: (value) => !value.includes("zunsama"),
          })}
          placeholder="username"
        />
        <span>{errors?.username?.message}</span>
        <input
          {...register("age", { required: "age is required" })}
          placeholder="age"
        />
        <span>{errors?.age?.message}</span>
        <input
          {...register("region", { required: "region is required" })}
          placeholder="region"
        />
        <span>{errors?.region?.message}</span>
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
