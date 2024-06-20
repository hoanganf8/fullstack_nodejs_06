import Form from "./components/Form";

export default function App() {
  return (
    <div>
      <Form />
    </div>
  );
}

//State
/*
Khi làm việc với React
- Props truyền dữ liệu từ cha xuống con
- Props không thể thay đổi trong nội bộ component
- Muốn thay đổi dữ liệu trong nội bộ component ==> Dùng state

State là gì? 
- Trạng thái của 1 component
- Chứa dữ liệu của 1 component
- Khi state thay đổi ==> Component bị re-render ==> UI Update
- Chỉ hoạt động trong 1 component (Truyền state sang component khác ==> Dùng props hoặc context)
- Không thay đổi trực tiếp state mà phải thông qua hàm thay đổi

Lưu ý trong Funcional Component
- Props
- JSX
==> Áp dụng để xây dựng trang tĩnh
Muốn sử dụng các thành phần: state, lifecycle ==> Dùng class component
Tuy nhiên, ở phiên bản React 16, functional có thêm tính năng gọi là Hook (Cho phép làm việc với các chức năng React thông qua functional component)

Hook là gì?
- Hàm đặc biệt của React (Bắt đầu bằng từ khóa use)
- Chỉ được gọi trong functional component và phải gọi ở cấp đầu tiên của functional

*/
//Lifecycle
