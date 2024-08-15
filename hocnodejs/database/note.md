# Các nhóm kiểu dữ liệu

1. Number

- integer (int)
- double
- smallint
- bigint

2. String

- char(length) ==> Ký tự
- charactor varying (varchar) ==> Chuỗi có độ dài biến đổi
- text

3. Boolean

- boolean

4. DateTime

- date
- timestamp

# Các loại quan hệ

Điều kiện: Từ 2 bảng trở lên

## Quan hệ 1-1

1 bản ghi của bảng này chỉ liên kết với 1 bản ghi của bảng khác

Ví dụ: 1 user chỉ có 1 số điện thoại

## Quan hệ 1-n

1 bản ghi của bảng này có thể liên kết với nhiều bản ghi của bảng khác

Ví dụ: 1 user có thể có nhiều posts

## Quan hệ n-n

1 bản ghi của bảng này có thể liên kết với nhiều bản ghi của bảng khác và ngược lại

Ví dụ: 1 tác giả có thể có nhiều cuốn sách, 1 cuốn có thể thuộc nhiều tác giả

Lưu ý: Với quan hệ này cần có bảng trung gian để liên kết

Trong CSDL quan hệ để thiết lập ràng buộc cần có khóa ngoại (foreign key)
