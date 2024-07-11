/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { memo } from "react";
function ClearHistories({ onClick }) {
  console.log("clear re-render");
  return (
    <div>
      <button onClick={onClick}>Xóa lịch sử</button>
    </div>
  );
}

export default memo(ClearHistories);
