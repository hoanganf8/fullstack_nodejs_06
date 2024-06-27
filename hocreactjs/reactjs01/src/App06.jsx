import { useEffect } from "react";
import { useRef } from "react";
import Button from "./components/Button";

export default function App() {
  //   const [random, setRandom] = useState(0);
  const countRef = useRef(0);
  const inputRef = useRef(null);
  const buttonRef = useRef();
  const obj = {
    value: 0,
  };
  const handleClick = () => {
    // setRandom(Math.random());
    obj.value++;
    countRef.current++;
  };
  useEffect(() => {
    // console.log(inputRef.current);
    // inputRef.current.focus();
    inputRef.current.addEventListener("blur", () => {
      console.log("Hello ae F8");
    });
    console.log(buttonRef.current);
  }, []);
  return (
    <div>
      <input type="text" placeholder="Vui lòng nhập..." ref={inputRef} />
      <button onClick={handleClick}>Click me</button>
      <ul>
        <li
          ref={(element) => {
            console.log(element);
          }}
        >
          Item 1
        </li>
        <li
          ref={(element) => {
            console.log(element);
          }}
        >
          Item 2
        </li>
        <li
          ref={(element) => {
            console.log(element);
          }}
        >
          Item 3
        </li>
      </ul>
      {/* <h3>{random}</h3>
      <h3>{obj.value}</h3>
      <h3>{countRef.current}</h3> */}
      <Button ref={buttonRef} />
    </div>
  );
}

//Ref
//1. Tham chiếu đến kết quả gần nhất ==> Không làm thay đổi giá trị qua mỗi lần re-render
/*
- Khởi tạo ref mới
- Update ref
- Khi component re-render ==> Giữ kết quả gần nhất
- Lưu ý: Không bị re-render khi ref thay đổi

2. Tham chiếu đến các element để trả về DOM
*/
