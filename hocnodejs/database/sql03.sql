-- Khi sử dụng các hàm: SUM, AVG, COUNT, MAX, MIN ==> KẾT HỢP VỚI MỆNH ĐỀ GROUP BY

-- SELECT status, COUNT(id) 
-- FROM users 
-- GROUP BY status
-- HAVING COUNT(id) >= 2;

-- Trả về thông tin user có trạng thái giống nhau từ 2 lần trở lên

-- SELECT * FROM 
-- users 
-- WHERE status 
-- IN (
-- 	SELECT status
-- 	FROM users 
-- 	GROUP BY status
-- 	HAVING COUNT(id) >= 2
-- )

-- Truy vấn trả về danh sách khóa học và số lượng học viên từng khóa
-- SELECT courses.*, COUNT(users_courses.*) as course_count FROM courses
-- LEFT JOIN users_courses 
-- ON courses.id = users_courses.course_id
-- GROUP BY courses.id
-- ORDER BY course_count DESC;

-- CASE THEN WHEN ELSE END
-- SELECT *, 
-- (
-- CASE
-- 	WHEN price > 0 THEN 'Trả phí'
-- 	ELSE 'Miễn phí'
-- END
-- ) AS status,
-- (
-- CASE
-- 	WHEN price >= 500000 THEN '5%'
-- 	ELSE '0'
-- END
-- ) AS discount,
-- (
-- 	price - price * (
-- CASE
-- 	WHEN price >= 500000 THEN 5
-- 	ELSE 0
-- END
-- ) / 100
-- ) AS sale_price
-- FROM courses;

-- Bài tập 1: Thêm 1 cột discount ở câu lệnh truy vấn
-- nếu price >= 500000 hiển thị 5% ngược lại hiển thị 0

-- Bài tập 2: Thêm 1 cột sale_price để tính giá phải trả sau khi đã trừ discount

-- Lấy khóa học có giá lớn nhất
SELECT MIN(price) FROM (
	SELECT id, name, price 
	FROM courses
	WHERE price > 0
)










