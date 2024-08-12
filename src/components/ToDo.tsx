import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "../atoms";

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((todo) => todo.id === id);
      const newToDo = { text, id, category: name as any };
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };

  return (
    <li>
      <span>{text}</span>
      {category !== "Doing" && (
        <button name="Doing" onClick={onClick}>
          Doing
        </button>
      )}
      {category !== "To_Do" && (
        <button name="To_Do" onClick={onClick}>
          To Do
        </button>
      )}
      {category !== "Done" && (
        <button name="Done" onClick={onClick}>
          Done
        </button>
      )}
    </li>
  );
}

export default ToDo;
