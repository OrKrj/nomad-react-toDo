import { atom } from "recoil";

interface IToDo {
  text: string;
  // 자료형과 함께 특정 문자열을 타입으로 지정 가능
  category: "To_Do" | "Doing" | "Done";
  id: number;
}

const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});
