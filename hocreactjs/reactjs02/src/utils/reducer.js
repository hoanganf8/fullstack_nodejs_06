export const initialState = {
  count: 0,
  todoList: [
    {
      id: 1,
      name: "Todo 1",
    },
    {
      id: 2,
      name: "Todo 2",
    },
  ],
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "counter/increment":
      return { ...state, count: state.count + action.payload };
    case "counter/decrement":
      return { ...state, count: state.count - 1 };
    case "todos/add":
      return { ...state, todoList: [...state.todoList, action.payload] };
    case "todos/remove":
      //action.payload sẽ là id của todo cần xóa
      return {
        ...state,
        todoList: state.todoList.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};
