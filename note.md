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

* \_self hoặc không có gì => Mở ở tab hiện tại
* \_blank => mở tab mới

Đường dẫn tương đối (Relative Path): Path

Đường dẫn tuyệt đối (Absolute Path): Từ giao thức + tên miền + đường dẫn

2. Thẻ img => Chèn hình ảnh

<img src="duong_dan_anh" width="chieu_rong" height="chieu_cao" alt="Chú thích ảnh" title="Tiêu đề ảnh" />

Đường dẫn ảnh: bao gồm cả tương đối và tuyệt đối

Form (Biểu mẫu)

- 1 form sẽ có nhiều trường
- 1 form sẽ phải có button submit (Dùng để gửi dữ liệu lên Server)
- Thẻ tạo 1 form: dùng thẻ <form></form>

Field (Trường)

<input type="text" /> => Nhập liệu (Khác type)
<input type="email" /> => Nhập định dạng email

<button type="submit">Text</button> => Gửi dữ liệu từ form

Lưu ý khi làm việc với Form:

- Các thẻ form phải ngang hàng với nhau (Không được lồng thẻ form)
- Trong 1 trang web sẽ có nhiều form

## Chuyên đề CSS

### Khái niệm CSS

- CSS (Cascading Style Sheets): Dùng để định dạng trang web
- HTML chịu trách nhiệm hiển thị nội dung
- CSS chịu trách nhiệm định dạng, chia bố cục, màu sắc,...
- CSS không ngôn ngữ lập trình

### Các cách viết CSS

- Inline CSS: Viết trực tiếp CSS vào trong thẻ style của html

- Internal CSS: Viết CSS trong file html thông qua thẻ <style>

- External CSS: Viết CSS thông qua 1 file riêng (.css) và liên kết từ html tới file này bằng thẻ link:
  `<link rel="stylesheet" type="text/css" href="link_toi_file_css" />`

### Selector CSS (Bộ chọn)

- Nếu html đặt id => #tenid
- Nếu html đặt class => .tenclass
- Nếu muốn selector theo tên thẻ html => tenthe
- Phân cấp cha con (Không giới hạn cấp): selector1 selector2 selector3...
- Phân cấp liền kề (Cấp con gần nhất): selector1 > selector2 > selector3....
- Selector cùng cấp (Trong 1 thẻ html): selector1selector2... (Chọn càng chi tiết => ưu tiên càng cao)
- Selector các thẻ html ngang hàng với nhau (~)

Lưu ý:

- Các thẻ html phải ngang hàng và cùng nằm trong 1 cha
- Không bị giới hạn số cấp
- Nếu muốn selector cấp liền sau (Dùng dấu +)

- Chọn tất cả thành phần: `*`
- Chọn theo thuộc tính: tenthe[tenthuoctinh]
