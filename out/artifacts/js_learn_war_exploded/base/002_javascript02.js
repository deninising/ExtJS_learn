// 三种构造函数的形式
// 全局变量
var k = 1;

function test() {
    // 局部变量
    var k = 2;

    // 创建函数的三种形式

    // 1.function语句式:解释器直接首先加载，局部作用域
    // function f() {
    //     return k;
    // }

    // 2.函数直接量式:先声明再使用，局部作用域
    // var f = function () {
    //     return k
    // };

    // 3.构造函数方式:先声明再使用，全局作用域
    var f = new Function('return k;')
    alert(f())
}

test();