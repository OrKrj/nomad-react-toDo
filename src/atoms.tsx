import { atom, selector } from "recoil";

type categories = "To_Do" | "Doing" | "Done";

export interface IToDo {
  text: string;
  // 자료형과 함께 특정 문자열을 타입으로 지정 가능
  category: categories;
  id: number;
}

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const categoryState = atom<categories>({
  key: "category",
  default: "To_Do",
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});
