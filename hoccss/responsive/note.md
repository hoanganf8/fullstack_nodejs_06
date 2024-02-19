# Responsive

- Responsive Web Design: Thiết kế web thích ứng
- Sử dụng kích thước màn hình để thay đổi giao diện
- Sử dụng CSS
- Có 2 hình thức xây dựng web thích ứng: Responsive, Adaptive

## Breakpoint

- Điểm dừng mà tại đó giao diện sẽ thay đổi
- Không có các breakpoint cố định cho tất cả các dự án
- Chỉ có các breakpoint phổ biến --> Triển khai các breakpoint riêng cho từng dự án
- Nên tham khảo các CSS Framework để chọn ra các breakpoint phổ biến

Các breakpoint phổ biến (Theo bootstrap 5)

- 576px
- 768px
- 992px
- 1200px
- 1400px

## Viewport

Khung nhìn nội dung mà người dùng nhìn thấy

## Queries Media

At-rules của CSS cho phép kiểm tra kích thước màn hình trước khi CSS

```css
@media all|screen|print and (min-width: value) and (max-width: value) {
  body {
    color: red;
  }
}
```

2 trường phải Responsive

1. Desktop First: Ưu tiên giao diện màn hình lớn trước, các màn hình nhỏ hơn đưa vào media query

```css
@media sreen and (max-width: 1399px) {
  /* Code CSS*/
}
@media sreen and (max-width: 1199px) {
  /* Code CSS*/
}
@media sreen and (max-width: 991px) {
  /* Code CSS*/
}
@media sreen and (max-width: 767px) {
  /* Code CSS*/
}
@media sreen and (max-width: 575px) {
  /* Code CSS*/
}
```

2. Mobile First: Ưu tiên giao diện nhỏ nhất (Mobile), các màn hình lớn hơn đưa vào media query

```css
@media sreen and (min-width: 576px) {
  /* Code CSS*/
}
@media sreen and (min-width: 768px) {
  /* Code CSS*/
}
@media sreen and (min-width: 992px) {
  /* Code CSS*/
}
@media sreen and (min-width: 1200) {
  /* Code CSS*/
}
@media sreen and (min-width: 1400px) {
  /* Code CSS*/
}
```

## Gutter
```css
.g-0
.g-1
.g-2
.g-3
.g-4
.g-5
.gx-0
.gx-1
.gx-2
.gx-3
.gx-4
.gx-5
.gy-0
.gy-1
.gy-2
.gy-3
.gy-4
.gy-5
```

Cú pháp chung:
```css
.g-{size}
.gx-{size}
.gy-{size}
.g-{breakpoint}-{size}
.gx-{breakpoint}-{size}
.gy-{breakpoint}-{size}
```
size: 0 -> 5
breakpoint: sm, md, lg, xl, xxl

## Offset

Cú pháp chung
```css
.col-{breakpoint}-offset-{number}
.col-offset-{number}
```
breakpoint: sm, md, lg, xl, xxl
number: 1 -> 12