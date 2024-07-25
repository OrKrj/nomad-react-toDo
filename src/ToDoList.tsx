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

function ToDoList() {
  const { register, handleSubmit } = useForm();
  const onValid = () => {};
  return (
    <div>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          {...(register("email"), { required: true })}
          placeholder="email"
        />
        <input
          {...(register("password"), { required: true })}
          placeholder="password"
        />
        <input
          {...(register("username"), { required: true, minLength: 10 })}
          placeholder="username"
        />
        <input {...(register("age"), { required: true })} placeholder="age" />
        <input
          {...(register("region"), { required: true })}
          placeholder="region"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
