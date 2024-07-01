import { useReducer } from "react";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";
import { reducer, initialState } from "../../utils/reducer";
import { createContext } from "react";
export const TodoContext = createContext();

export default function Todos() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <TodoList />
      <TodoAdd />
    </TodoContext.Provider>
  );
}
