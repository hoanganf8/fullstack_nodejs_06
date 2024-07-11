import { useCallback, useMemo } from "react";
import { useState } from "react";
import ClearHistories from "./ClearHistories";

export default function TransferMoney() {
  const [money, setMoney] = useState("");
  const [histories, setHistories] = useState([]);
  const handleChangeValue = (e) => {
    setMoney(e.target.value);
  };
  const handleAdd = (e) => {
    e.preventDefault();
    setHistories([...histories, +money]);
    setMoney("");
  };
  const total = useMemo(
    () =>
      histories.reduce((total, history) => {
        console.log("reduce");
        return total + history;
      }, 0),
    [histories]
  );
  const handleClearHistories = useCallback(() => {
    setHistories([]);
  }, []);
  return (
    <div>
      <form action="" onSubmit={handleAdd}>
        <input
          type="number"
          placeholder="Nhập số tiền..."
          onChange={handleChangeValue}
          value={money}
        />
        <button>Add</button>
      </form>
      <h2>Lịch sử: {total}</h2>
      {histories.map((history, index) => (
        <h3 key={index}>{history}</h3>
      ))}
      <ClearHistories onClick={handleClearHistories} />
    </div>
  );
}
