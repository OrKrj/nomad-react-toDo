import { atom, selector } from "recoil";

export interface IToDo {
  text: string;
  // 자료형과 함께 특정 문자열을 타입으로 지정 가능
  category: "To_Do" | "Doing" | "Done";
  id: number;
}

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    return [
      toDos.filter((toDo) => toDo.category === "To_Do"),
      toDos.filter((toDo) => toDo.category === "To_Do"),
      toDos.filter((toDo) => toDo.category === "Done"),
    ];
  },
});
