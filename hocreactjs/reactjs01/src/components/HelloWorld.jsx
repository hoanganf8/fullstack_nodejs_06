import { useContext } from "react";
import { AppContext } from "../App09";
export default function HelloWorld() {
  const { value, setValue } = useContext(AppContext);
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={() => setValue("Chào anh em F8")}>Change Text</button>
    </div>
  );
}
