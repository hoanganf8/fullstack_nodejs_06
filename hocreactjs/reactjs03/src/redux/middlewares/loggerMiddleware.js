export const loggerMiddleware = (store) => {
  return (next) => {
    return (action) => {
      //   console.log("ok chưa?");
      //   console.log(store.getState());
      //   console.log(action);
      return next(action); //Cho phép đi tiếp
    };
  };
};
