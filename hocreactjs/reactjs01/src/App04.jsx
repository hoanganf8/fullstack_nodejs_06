import ImageUpload from "./components/ImageUpload";

export default function App() {
  return (
    <div>
      <ImageUpload />
    </div>
  );
}
/*
Các bước hoạt động của useEffect
1. State thay đổi
2. Component Re-render
3. Update UI
4. Cleanup (Nếu có) ==> Hàm được trả về từ callback của useEffect
5. Callback useEffect


*/
