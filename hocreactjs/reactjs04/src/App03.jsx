import Form from "./components/Form";
import Content from "./components/Content";
import { useEffect, useLayoutEffect, useState } from "react";
export default function App() {
  const [status, setStatus] = useState(false);
  useLayoutEffect(() => {
    setStatus(true);
  }, []);
  return <div>{status ? <Content /> : <Form />}</div>;
}
/*
useEffect
1. State thay đổi
2. Component Re-render
3. Update UI
4. Cleanup
5. Callback Effect

useLayoutEffect
1. State thay đổi
2. Component Re-render
3. Cleanup
4. Callback Effect
5. Update UI
*/
