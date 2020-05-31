Ext.onReady(function () {
    // var obj = new Object();
    var obj = {name: "z3", age: 20};
    obj.sex = '男';
    obj.hobby = '钱';
    for (var attr in obj) {
        alert(attr + ":" + obj[attr]);
    }
    delete obj.hobby;
    for (var atr in obj) {
        alert(atr + ":" + obj[atr]);
    }
});