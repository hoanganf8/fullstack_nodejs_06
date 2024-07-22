# Router

- Browser Router ==> Có sự hỗ trợ của server (Rewrite URL)
- Hash Router ==> Không cần hỗ trợ của server (Thông qua #)

## Nested Router

- Kỹ thuật gom nhóm Route
- Dễ quản lý, thay đổi
- Dễ dàng tạo layout cho 1 nhóm
- Dễ dàng private

## Private Router

- Bảo vệ Router khỏi các truy cập trái phép
- Bảo vệ bằng 1 hoặc 1 số component ==> gọi Middleware

Request ==> Router ==> Middleware ==> Component
