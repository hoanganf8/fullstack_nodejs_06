export const initialState = {
  count: 0,
  auth: {
    isAuthenticated: false,
    user: {},
    isLoading: true,
  },
};
export const rootReducer = (state, action) => {
  switch (action.type) {
    case "counter/increment":
      return { ...state, count: state.count + action.payload };
    case "counter/decrement":
      return { ...state, count: state.count - action.payload };
    case "auth/set_user":
      return {
        ...state,
        auth: {
          ...state.auth,
          isAuthenticated: true,
          user: action.payload,
          isLoading: false,
        },
      };
    case "auth/destroy_user":
      return {
        ...state,
        auth: {
          ...state.auth,
          isAuthenticated: false,
          user: {},
          isLoading: false,
        },
      };
    default:
      return state;
  }
};
