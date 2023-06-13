var carousel = document.querySelector(".carousel");
var carouselInner = document.querySelector(".carousel__inner");

var carouselInnerWidth = carouselInner.clientWidth;

var carouselItems = carouselInner.children;

var totalWidth = carouselItems.length * carouselInnerWidth;

carouselInner.style.width = `${totalWidth}px`;
carouselInner.style.transition = `all 0.4s linear`;
