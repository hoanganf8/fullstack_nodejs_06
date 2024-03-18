//Highlight từ khóa trong 1 đoạn văn (Ctrl + F)
var keyword = "a";
var content = `ABC 123 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

/*
Nguyên tắc: 
- Không được thay đổi chuỗi ban đầu
- Không nên sử dụng inline css
- Tìm từng đoạn --> Cắt bỏ --> Lưu chuỗi mới --> Tìm lại ở đoạn mới
*/
var output = "";
var position = content.toLowerCase().indexOf(keyword.toLowerCase());
while (position !== -1) {
  output +=
    content.slice(0, position) +
    `<span>${content.slice(position, position + keyword.length)}</span>`;
  content = content.slice(position + keyword.length);
  position = content.toLowerCase().indexOf(keyword.toLowerCase());
}
output += content;
var html = `<p>Tìm kiếm với từ khóa <b>${keyword}</b></p>
<p>${output}</p>
<p>Đã tìm thấy 0 kết quả với từ khóa <b>${keyword}</b></p>
`;
document.write(html);
