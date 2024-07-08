export const fetchTodoMiddleware = (store) => (next) => (action) => {
  if (action.type === "todos/get_todos") {
    console.log("Hãy call api ở  đây");
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((todos) => {
        store.dispatch({
          type: "todo/fetch",
          payload: todos,
        });
      });
  }
  next(action);
};
