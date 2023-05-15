// //vòng lặp for tăng
// for (var i = 1; i <= 10; i++){
//     console.log('Xin chào Javascript: '+i);
// }

// //vòng lặp for giảm
// for (var i = 10; i >= 1; i--){
//     console.log('Xin chào Javascript: '+i);
// }

//S = 1 + 2 + 3 +..+N

var n = 1000;
var total = 0;
for (var index = 1; index <= n; index++){
    total+=index;
}
console.log(`Tổng = ${total}`);