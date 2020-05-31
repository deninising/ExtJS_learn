// // this关键字在javascript中的使用
// // this关键你字总是指向调用者，谁调用函数，this就指向谁
// function test() {
//     alert(this.x);
// }
//
// test.x = 10;
// alert(test.x);
//
// // test();
// var x = 20;
// window.test();






// call,apply 主要作用就是绑定作用域
// 全局color即window.color
var color = 'red';

// 对象obj的color即obj.color
var obj = {color: 'yellow'};

function showColor(x, y) {
    alert(x + y);
    alert(this.color);
}

// 相当于showColor.call(window,3,4)
showColor(3, 5);

showColor.call(obj, 1, 3);
// call与apply的区别，前者参数为单个变量，后者参数为数组




// 块的概念相当于java中的代码块，javascript中用()代替{}



// 闭包的概念:执行环境，作用域，垃圾回收机制