Ext.onReady(function () {
    // eg001:点击按钮，打开一个窗口,解决window重复创建问题（1.使用modal属性；2.采用判断id是否创建解决）


    // JQUERY code: var btn = $('#btn'); var dombtn = btn.get(0);
    var btn = Ext.get('btn'); // 返回的对象为一个经过ExtJS包装过的Dom对象
    // alert(btn.dom.value); // 将包装对象转换为dom原生元素，并获取value属性值


    // 推荐该种方法
   /* btn.on('click', function () {
        if (!Ext.getCmp('newWindow')) {
            Ext.create('Ext.window.Window', {
                id: 'newWindow', // 组件的id将会被Ext的manager所管理起来
                title: '弹出窗口',
                width: 300,
                height: 400,
                renderTo: Ext.getBody(),
                // modal:true // modal需要放在窗口弹出来之后
            }).show();
        }
    });*/


   // 不推荐以下方法
    var window = Ext.create('Ext.window.Window', {
        id: 'newWindow', // 组件的id将会被Ext的manager所管理起来
        title: '弹出窗口',
        width: 300,
        height: 400,
        renderTo: Ext.getBody(),
        // modal:true // modal需要放在窗口弹出来之后
        closeAction:'hidden' // 点击关闭按钮时只是隐藏该组件，默认为销毁该组件
    });

    Ext.get('btn').on('click',function () {
        window.show();
    });

});