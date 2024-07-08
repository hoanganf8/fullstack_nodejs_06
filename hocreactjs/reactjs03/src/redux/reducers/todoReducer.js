const initlaState = {
  todoList: [],
};
export const todoReducer = (state = initlaState, action) => {
  switch (action.type) {
    case "todo/fetch": {
      return { ...state, todoList: action.payload };
    }
    default:
      return state;
  }
};
