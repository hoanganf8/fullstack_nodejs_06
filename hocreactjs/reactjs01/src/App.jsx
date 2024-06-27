import { createContext, useState } from "react";
import "./assets/style.css";
import HelloWorld from "./components/HelloWorld";
import HeaderTop from "./components/HeaderTop";
export const AppContext = createContext();
export default function App() {
  const [value, setValue] = useState("Hello");
  const [theme, setTheme] = useState("light");
  return (
    <AppContext.Provider
      value={{
        value,
        setValue,
        theme,
        setTheme,
      }}
    >
      <HeaderTop />
      <HelloWorld />
    </AppContext.Provider>
  );
}

/*
Bước 1: Khởi tạo đối tượng Context 
React.createContext

Bước 2: Bọc component Provider của Context vào các component muốn chia sẻ dữ liệu

Bước 3: Tại Component muốn lấy dữ liệu ==> Sử dụng Hook useContext để lấy dữ liệu từ Context
*/
