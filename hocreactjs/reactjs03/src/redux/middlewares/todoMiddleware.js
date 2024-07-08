//Tạo thunk function
export const fetchTodos = () => {
  return async (dispatch, getState) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await response.json();
    dispatch({
      type: "todo/fetch",
      payload: todos,
    });
  };
};

//Thunk function đóng vai trò giống action creator
