# Vấn đề khi sử dụng State

- Trong 1 component có quá nhiều State ==> Logic xử lý phức tạp
- Tái sử dụng lại logic cập nhật state để áp dụng cho nhiều component
- Triển khai State Global ==> Khó quản lý

# Triển khai hệ thống quản lý Global State

- State chỉ ở 1 component
- Chia sẻ dữ liệu giữa các component ==> Đẩy lên component cha
- Muốn có 1 state dùng cho toàn bộ project

* Thư viện: Redux, zustand,...
* Dùng context + useReducer
