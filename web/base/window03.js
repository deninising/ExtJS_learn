Ext.onReady(function () {


    var window = new Ext.window.Window({
        title: '添加子组件',
        width: '40%',
        height: 400,
        renderTo: Ext.getBody(),
        draggable: false, //不许拖拽
        resizable: false, // 不许改变大小
        closable: false, // 禁止关闭按钮
        collapsible: true, //显示折叠按钮
        bodyStyle: 'background:#ffc;padding:10px;', //设置样式
        html: '我是window的内容！！！',
        items: [{}, {}],

    });

    window.show();


});