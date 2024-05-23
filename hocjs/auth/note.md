# Authentication - Authorization

- Authentication: Xác thực người dùng để hệ thống biết bạn là ai?
- Authorization: Hệ thống kiểm tra xem bạn được làm gì? Không được làm gì?

Guest ==> Authentication ==> Authorization

## Các cách Authentication

1. Cookie-Based Authentication

- User Request Login ==> Server kiểm tra thông tin ==> Lưu thông tin đăng nhập vào Session và trả về Cookie chứa session_id
- User Request Authorization => Server nhận được Cookie từ phía client gửi lên ==> Server kiểm tra session_id từ cookie có tồn tại ở trên Server hay không?

* Tồn tại ==> Lấy được thông tin user đã đăng nhập
* Không tồn tại ==> Chuyển hướng về trang đăng nhập

Nhược điểm:

- Dễ bị đánh cắp cookie: csrf, phần mềm gián điệp,...
- Khó mở rộng
- Khó hỗ trợ các ứng dụng cross domain, đa thiết bị ==> Cookie chỉ chia sẻ được ở các subdomain

2. Token-Based Authentication

- User Request Login ==> Server kiểm tra thông tin ==> Lưu thông tin đăng nhập vào Token ==> Trả token về phía Client (Trạng ở dạng Response Body)
- User Request Authorization ==> Token sẽ được đính kèm vào Request Header ==> Server nhận được Token từ Header ==> Server kiểm tra token hợp lệ hay không?

* Không hợp lệ: Đăng xuất
* Hợp lệ: Giải mã token (Decode) để lấy ra thông tin

Giải pháp Token

- Tạo token bằng 1 chuỗi ngẫu nhiên ==> Lưu token vào server kèm thông tin cần lưu trữ
- Lưu toàn bộ thông tin vào token thông qua các thuật toán mã hóa (Không lưu token ở Server) ==> Chọn kỹ thuật mã hóa bảo mật cao, nếu không dễ bị hack ==> JSON WEB TOKEN (JWT)

Giải pháp bảo mật

- Hạ thời gian sống của token xuống thấp ==> Gây phiền phức
- Tự động tạo token mới khi hết hạn ==> Sinh ra 2 loại token

* Access Token
* Refresh Token
