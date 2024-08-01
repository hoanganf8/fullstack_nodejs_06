# Luồng của NextJS

Request ==> Middleware ==> Root Layout ==> Layout ==> Page ==> Response

Component mặc định của NextJS là Server Component (SSR)

## Lưu ý khi làm việc với Middleware

- Tiếp nhận request ==> xử lý ==> response ==> Trả về client

- Tiếp nhận request ==> xử lý ==> next response ==> router =>=> layout ==> page ==> trả về client

## Các thư viện hỗ trợ Data Fetching Client

- swr
- tandstack
- redux toolkit query
