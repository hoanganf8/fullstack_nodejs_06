-- SELECT users.*, groups.name AS group_name 
-- FROM users
-- RIGHT JOIN groups
-- ON users.group_id = groups.id;

-- Bài tập 1: Truy vấn trả về danh sách users của khóa học chứa từ khóa "stack 01"

-- SELECT users.*, courses.name AS course_name
-- FROM users
-- INNER JOIN users_courses
-- ON users.id = users_courses.user_id
-- INNER JOIN courses
-- ON users_courses.course_id = courses.id
-- WHERE courses.name ILIKE '%stack 01%'

-- Bài tập 2: Truy vấn trả về 1 user mới đăng ký khóa học có chứa từ khóa "stack 02"
-- SELECT users.*, courses.name AS course_name
-- FROM users
-- INNER JOIN users_courses
-- ON users.id = users_courses.user_id
-- INNER JOIN courses
-- ON users_courses.course_id = courses.id
-- WHERE courses.name ILIKE '%stack 02%'
-- ORDER BY users_courses.created_at DESC
-- LIMIT 1;

-- DELETE FROM users_courses 
-- WHERE user_id IN (
-- 	SELECT id FROM users WHERE email = 'user3@gmail.com'
-- )























