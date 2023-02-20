# Khóa học Front-End nền tảng

- HTML CSS
- SCSS (Ngôn ngữ tiền xử lý CSS)
- Cắt giao diện: PSD (Photoshop) => HTML - CSS, Figma => HTML CSS
- Bootstrap
- Javascript
- Project tổng hợp

## HTML

- Ngôn ngữ đánh dấu siêu văn bản
- Cấu tạo bởi các thẻ
- > 80 thẻ (Chỉ cần nhớ 10 đến 15 thẻ)

### Cấu trúc chung của 1 trang html

1. Cặp thẻ <head>

- Chứa thẻ title, meta, link css, link js
- Thẻ title => nội dung của thanh tiêu đề trên trình duyệt
- Thẻ <meta charset="UTF-8" /> => Hỗ trợ hiển thị nội dung Tiếng Việt

Cấu trúc của 1 thẻ meta

- <meta name="ten" content="nội dung" />

=> Thẻ html nằm trong head không hiển thị ra ngoài trang web

2. Cặp thẻ <body>

- Thể hiện nội dung của trang web

### Các loại thẻ html

1. Thẻ đủ và thẻ rỗng

- Thẻ đủ: Bao gồm cả mở thẻ và đóng thẻ

=> <p>Nội dung</p>

- Thẻ rỗng: Chỉ có mở thẻ
  => <img src="images/anh.jpg" />

Cấu trúc chung:

- <tenthe thuoctinh1 = "gia tri 1" thuoctinh2="gia tri 2">Noi dung</tenthe>
- <tenthe thuoctinh1 = "gia tri 1" thuoctinh2="gia tri 2" />

2. Thẻ inline và thẻ block

- Thẻ Inline

* Width bằng nội dung thẻ
* Các thẻ sẽ nằm cùng trên 1 dòng

- Thẻ block

* Width mặc định bằng 100%

* Mỗi thẻ sẽ nằm ở 1 dòng

Lưu ý: Trong tất cả các thẻ html luôn có 2 thuộc tính: id và class (Hỗ trợ CSS)

### Các thẻ html trong nhóm Block

- Thẻ <p> => Định dạng 1 đoạn văn bản

- Thẻ heading (h1 => h6) => Định dạng tiêu đề

- Thẻ div => Dùng định dạng khối (Chỉ có tác dụng nhóm các thẻ khác để hỗ trợ cho việc chia layout và sử dụng css)

- Định dạng danh sách:

* ul, li => Định dạng danh sách không sắp xếp
* ol, li => Định dạng danh sách có sắp xếp

Các thẻ html5

- header => Định dạng phần đầu trang
- footer => Định dạng phần chân trang
- aside => Định dạng phần cột bên (Sidebar)
- nav => Định dạng menu
- main => Định dạng phần body trang web
- section => Định dạng 1 section
- article => Định dạng 1 bài viết, sản phẩm,...
- time => Định dạng thời gian

Thẻ <hr /> => Tạo đường kẻ ngang

Thẻ <pre>

Thẻ <blockquote>

### Các thẻ trong nhóm Inline

1. Thẻ a => Chèn liên kết vào trang web

<a href="lien_ket" title="Tiêu đề" target="">Nội dung hiển thị</a>

- href => Liên kết cần chuyển đến
- title => Tiêu đề khi trỏ chuột
- target => 
+ _self hoặc không có gì => Mở ở tab hiện tại
+ _blank => mở tab mới

Đường dẫn tương đối (Relative Path): Path

Đường dẫn tuyệt đối (Absolute Path): Từ giao thức + tên miền + đường dẫn

2. Thẻ img => Chèn hình ảnh

<img src="duong_dan_anh" width="chieu_rong" height="chieu_cao" alt="Chú thích ảnh" title="Tiêu đề ảnh" />

Đường dẫn ảnh: bao gồm cả tương đối và tuyệt đối