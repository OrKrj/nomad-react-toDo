import React from "react";
import { useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo";
import { toDoState } from "../atoms";
import ToDo from "./ToDo";

function ToDoList() {
  const toDos = useRecoilValue(toDoState);
  return (
    <div>
      <CreateToDo />
      <ul>
        {toDos.map((toDo) => (
          // text={toDo.text} category={toDo.category} id={toDo.id} == {...toDo}
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
