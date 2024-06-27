import { useEffect, useRef } from "react";
import Search from "./components/Search";

export default function App() {
  const inputRef = useRef();
  const handleChangeVietnam = () => {
    inputRef.current.placeholder = "Tìm kiếm...";
    inputRef.current.focus();
  };
  const handleChangeEnglish = () => {
    inputRef.current.placeholder = "Search...";
    inputRef.current.focus();
  };
  useEffect(() => {
    console.log(inputRef.current);
  }, []);
  return (
    <div>
      <Search ref={inputRef} />
      <hr />
      <button onClick={handleChangeEnglish}>Tiếng Anh</button>
      <button onClick={handleChangeVietnam}>Tiếng Việt</button>
    </div>
  );
}

//App (ref) ==> Search (ref)
