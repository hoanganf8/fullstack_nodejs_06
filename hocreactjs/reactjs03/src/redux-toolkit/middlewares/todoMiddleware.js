import {
  failedRequestTodo,
  loadedTodo,
  startedRequestTodo,
} from "../slices/todoSlice";
export const fetchTodos = () => {
  return async (dispatch) => {
    dispatch(startedRequestTodo());
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      if (!response.ok) {
        throw new Error("No Data");
      }
      const todos = await response.json();

      dispatch(loadedTodo(todos));
    } catch (error) {
      dispatch(failedRequestTodo());
    }
  };
};
