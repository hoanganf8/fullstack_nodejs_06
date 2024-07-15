/* eslint-disable react/display-name */
export const withColor = (Component) => {
  return (props) => {
    const color =
      "#" + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, "0");
    return (
      <div style={{ color }}>
        <Component {...props} />
      </div>
    );
  };
};

//HOC ==> Nhận vào 1 component và trả về 1 component mới
