-- Comment trong SQL

-- Thêm dữ liệu vào table
-- Cú pháp: INSERT INTO tenbang(cot1, cot2,...) VALUES(giatri1, giatri2,...)

-- INSERT INTO users(id, name, email, password, status, created_at, updated_at)
-- VALUES(1, 'User 1', 'user1@gmail.com', '123456', true, NOW(), NOW());

-- INSERT INTO users(id, name, email, password, status, created_at, updated_at)
-- VALUES(2, 'User 2', 'user2@gmail.com', '123456', false, NOW(), NOW());

-- INSERT INTO users(id, name, email, status, created_at, updated_at)
-- VALUES(3, 'User 3', 'user3@gmail.com', true, NOW(), NOW());
-- INSERT INTO users(id, name, email, status, created_at, updated_at)
-- VALUES(4, 'User 4', 'user4@gmail.com', true, NOW(), NOW());
-- INSERT INTO users(id, name, email, status, created_at, updated_at)
-- VALUES(5, 'User 5', 'user5@gmail.com', false, NOW(), NOW());
-- INSERT INTO users(id, name, email, status, created_at, updated_at)
-- VALUES(7, 'Hoàng An', 'hoangan@gmail.com', true, NOW(), NOW());
-- INSERT INTO users(id, name, email, status, created_at, updated_at)
-- VALUES(8, 'Phan Văn Hải', 'phanhai@gmail.com', false, NOW(), NOW());
-- INSERT INTO users(id, name, email, status, created_at, updated_at)
-- VALUES(9, 'Hoàng Anh', 'hoanganh@gmail.com', false, NOW(), NOW());

-- Cập nhật dữ liệu
-- Cú pháp: UPDATE tenbang SET cot1=giatri1, cot2=giatri2,... WHERE condition
-- UPDATE users SET name='User 2 - Update', email='user2@gmail.com', updated_at=NOW()
-- WHERE id=2

-- Xóa dữ liệu
-- DELETE FROM users WHERE id = 2;

-- Truy vấn dữ liệu
-- Cú pháp: SELECT *|cot1,cot2,cot3 FROM tenbang WHERE dieukien
-- Toán tử so sánh: =, >, >=, <, <=, <>, !=, IS NULL, IN, LIKE, ILIKE, BETWEEN, EXISTS
-- Toán tử luận lý: AND, OR, NOT
-- SELECT * FROM users WHERE status=true AND (name ILIKE '%an%' OR email ILIKE '%an%')

-- Tạo table mới từ table cũ
-- CREATE TABLE customers (LIKE users INCLUDING ALL);

-- Copy dữ liệu từ bảng cũ sang bảng mới
-- INSERT INTO customers(id, name, email, password, status, created_at, updated_at) 
-- SELECT * FROM users;

-- DROP TABLE customers;

-- Sắp xếp
-- SELECT * FROM users WHERE id > 1 ORDER BY id DESC;

-- Giới hạn, bỏ qua (LIMIT, OFFSET)
-- SELECT id, name AS fullname, email, status FROM users ORDER BY id DESC LIMIT 2 OFFSET 2;





















