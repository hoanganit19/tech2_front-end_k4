var btn = document.querySelector(".btn");
var content = document.querySelector(".content");

btn.addEventListener("click", function () {
  var contentText = content.innerHTML;
  //var contentText = content.innerText;
  console.log(contentText);
  //content.innerHTML = `<h1>Học lập trình tại Unicode</h1>`;
  //content.innerText = `<h1>Học lập trình tại Unicode</h1>`;
  //   var bold = content.querySelector("b");
  //   var boldHtml = bold.outerHTML; //lấy cả html (outerHTML và outerText)
  //   console.log(boldHtml);
});

//Bài tập: click vào button => di chuyển nội từ div content => div result
