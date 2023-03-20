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

### Pseudo-elements

- before
- after
- first-letter
- first-line
- selection
- placeholder

### Pseudo Class

- hover => Trỏ chuột
- active => Click chuột và giữ
- focus => Con trỏ làm việc của trình duyệt
- checked => Trạng thái checked của input radio và input checkbox
- disabled => Trạng thái disabled các field
- first-child
- last-child

=> Lưu ý:

- Các item phải nằm trong 1 cha và ngang hàng với nhau
- Các item phải có selector giống nhau (Nếu bị xen ngang 1 selector khác => Sai)

* first-of-type
* last-of-type
* nth-child
* nth-of-type

### Thuộc tính định dạng text

1. Đơn vị:

- Đơn vị tuyệt đối

* px => pixels
* pt => points = 1.3 x px

- Đơn vị tương đối

* em => Tỷ lệ với thành phần cha gần nhất
* rem => Tỷ lệ với thành phần cao nhất (html selector)
* % => Tỷ lệ với thành phần cha gần nhất
* vh (viewport height) => Tỷ lệ theo chiều cao của viewport (Áp dụng với thuộc tính width, height)
* vw (viewport width) => Tỷ lệ theo chiều rộng của viewport (Áp dụng với thuộc tính width, height)

2. Giá trị mặc định

- inhertit => kế thừa theo thành phần cha gần nhất
- initial => Kế thừa theo mặc định trình duyệt
- unset => Loại bỏ giá trị của thuộc tính (Kế thừa theo thành phần cha gần nhất)

3. Màu sắc:

- Tên màu tiếng anh: blue, green, yellow,....
- Mã màu hexa: #efefef, #000000, #ffffff
- rgb
- hls
- color opacity: Độ mờ của màu sắc

4. Thuộc tính color:

- color: gia_tri_mau
- Thay đổi màu văn bản

5. Thuộc tính font-size

- font-size: value + unit
- Thay đổi cỡ chữ của văn bản

6. Thuộc tính font-family

- font-family: ten_font1, ten_font2,...
- Thay đổi font chữ của văn bản

Lưu ý:

- Nếu với các font chữ không có sẵn (Không phải các font mặc định của máy tính) thì cần phải nạp font vào trang web
- 2 font chữ mặc định: san-serif, serif
- Nếu font có chứa khoảng trắng => Đặt tên font vào trong dấu nháy kép

7. Thuộc tính font-weight

- font-weight: normal|bold|100|200|300|400|500|600|700|800|900
- Thay đổi độ đậm nhạt của chữ

8. Thuộc tính font-style

- font-style: normal|italic
- Thay đổi kiểu nghiêng của văn bản

9. Thuộc tính text-decoration

- text-decoration: none|underline|overline|line-through
- Thêm gạch ngang cho text

10. Thuộc tính text-transform

- text-transform: none|capitalize|lowercase|uppercase
- Thay đổi kiểu chữ: thường, hoa,...

11. Thuộc tính text-indent

- text-indent: value
- Thụt đầu dòng

12. Thuộc tính text-align

- text-align: left|center|right|justify
- Căn chỉnh vị trí text và các thẻ inline

13. letter-spacing

- letter-spacing: value
- Căn chỉnh khoảng cách giữa các ký tự

14. word-spacing

- word-spacing: value
- Căn chỉnh khoảng cách giữa các chữ

15. Thuộc tính word-wrap

- word-wrap: break-word
- Ngắn chữ để xuống dòng

### Thuộc tính background

- Thay đổi màu sắc, hình nền của 1 element
- Thuộc tính background sẽ có các thuộc tính mở rộng sau:

* background-color => Màu nền
* background-image => Hình nền
* background-position => Vị trí hình nền
* background-repeat => Lặp hình nền
* background-size: cover|contain|value|value1 value2
* background-attachment => Cố định hình nền
* background => Tổng hợp: color image position repeat attachment

### Thuộc tính border

- Thêm viền cho khối
- Áp dụng cho cả thẻ block và inline

Cú pháp: border: size style color

- size: Độ dày của viền
- style: kiểu (solid, dashed, dotted, double)

Thuộc tính đầy đủ:

- border-left: size style color
- border-right: size style color
- border-top: size style color
- border-bottom: size style color
- border-width: size
- border-left-width: size
- border-right-width: size
- border-top-width: size
- border-bottom-width: size
- border-style: style
- border-left-style: style
- border-right-style: style
- border-top-style: style
- border-bottm-style: style
- border-color: color
- border-left-color: color
- border-right-color: color
- border-top-color: color
- border-bottom-color: color

### Thuộc tính border-radius

- Bo góc khối
- Cú pháp:

* border-radius: size => Bo 4 góc
* border-radius: size1 size2 (size = top left = bottom right, size2 = bottom left = top right)
* border-radius: size1 size2 size3 (size1 = top left, size2 = bottom left = top right, size3 = bottom right)
* border-radius: size1 size2 size3 size4 (size1 = top left, size2 = top right, size3 = bottom left, size4 = bottom right)
* border-top-left-radius: size
* border-top-right-radius: size
* border-bottom-left-radius: size
* border-bottom-right-radius: size

Lưu ý: Nếu muốn tạo hình tròn

- border-radius: 50% (hoặc 100%)
- width = height

### Thuộc tính padding và margin

- Thuộc tính padding: Căn chỉnh khoảng cách giữa viền và nội dung (Khoảng cách bên trong)

- Thuộc tính margin: Căn chỉnh ngoài khối (Căn lề)

Cú pháp:

- margin: value => 4 cạnh
- margin: value1 value2 => value1 = top = bottom, value2 = left = right
- margin: value1 value2 value3 => value1 = top, value2 = left = right, value3 = bottom
- margin: value1 value2 value3 value4 => value1 = top, value2 = right, value3 = bottom, value4 = left

Thuộc tính padding tương tự

Lưu ý: Riêng thuộc tính margin => Có thêm giá trị auto

### Thuộc tính width và height

- Thiết lập chiều rộng và chiều cao
- Chỉ áp dụng với thẻ block
- Tìm hiểu 2 đơn vị mới: vh, vw
- Nếu dùng đơn vị % => Tỷ lệ với parent gần nhất

Thuộc tính liên quan

- min-width
- max-width
- min-height
- max-height

### Box Model

- Mô hình hộp trong CSS

### Thuộc tính overflow

- Xử lý khi nội dung bị tràn khung
- Khung bị tràn khi nội dung bên trong 1 element lớn hơn kích thước của thành phần cha
- Các hình thức xử lý

* Ẩn phần bị tràn
* Tạo thanh cuộn cho thành phần cha (scroll)

Cú pháp:
overflow: visible|hidden|auto|scroll

- visible: Mặc định
- hidden: Ẩn phần bị tràn
- auto: Hiển thị thanh cuộn nếu bị tràn
- scroll: Luôn hiển thị thanh cuộn (Kể cả không bị tràn)

Các thuộc tính mở rộng

- overflow-x
- overflow-y

### Thuộc tính opacity

- Làm mờ tất cả nội dung được chọn
- Bao gồm cả các thành phần con

### Thuộc tính display

- Thay đổi chế độ hiển thị của 1 element
- Cú pháp: display: none|block|inline-block|inline....

Ngoài ra: Thuộc tính display còn rất nhiều giá trị phức tạp

- flex
- grid
- table
- list-item

BÀI TẬP VỀ NHÀ

- Xây dựng menu dropdown
- Tìm hiểu về thuộc tính position

### Thuộc tính float

- Trôi 1 thành phần về bên trái hay bên phải của thành phần cha

- Cú pháp: float: none|left|right

### Thuộc tính clear

- Khắc chế tự động trôi của thuộc tính float

- Cú pháp: clear: left|right|both

Nguyên tắc khi làm việc với float

- Nên đặt trong 1 thẻ bọc
- Clearfix thẻ bọc: overflow: auto, after + clear
