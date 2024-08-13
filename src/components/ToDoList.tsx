import React from "react";
import { useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo";
import { toDoSelector, toDoState } from "../atoms";
import ToDo from "./ToDo";

function ToDoList() {
  const [toDos, doing, done] = useRecoilValue(toDoSelector);
  return (
    <div>
      <CreateToDo />
      <h2>To Do</h2>
      <ul>
        {toDos.map((toDo) => (
          // text={toDo.text} category={toDo.category} id={toDo.id} == {...toDo}
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <hr />
      <h2>Doing</h2>
      <ul>
        {doing.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <hr />
      <h2>Done</h2>
      <ul>
        {done.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <hr />
    </div>
  );
}

export default ToDoList;
