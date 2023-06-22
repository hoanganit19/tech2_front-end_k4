var header = document.querySelector('.header');
var menu = header.querySelector('.menu');
var headerInnerHeight = header.clientHeight - menu.clientHeight - 30;

var html = document.querySelector('html');

window.addEventListener('scroll', function(){
    var position = html.scrollTop;
    
    if (position >= headerInnerHeight){
        header.classList.add('fixed');
        header.parentElement.style.paddingTop = `${menu.clientHeight}px`;
    }else{
        header.classList.remove('fixed');
        header.parentElement.style.paddingTop = `0`;
    }
});