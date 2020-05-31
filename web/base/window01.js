Ext.onReady(function () {
    Ext.create('Ext.window.Window', {
        title: 'i am a window component',
        width: 400,
        height: 300,
        layout: 'fit',
        // constrain: true, // 窗口不能超出浏览器展示界面
        constrainHeader:true, // 窗口的头部不能超出浏览器的界面
        x:50,  // 设置初始坐标位置x
        y:50,  // 设置初始坐标位置y
        modal:true, // 开启模态窗口，只能操作当前窗口的内容
        plain:true, // 窗口背景颜色设置为透明色
        onEse:true, // 按Esc键关闭当前窗口
        html:'<h2>hello ExtJS window component</h2><br>' +
            '<h2>hello ExtJS window component</h2><br>' +
            '<h2>hello ExtJS window component</h2><br>' +
            '<h2>hello ExtJS window component</h2><br>' +
            '<h2>hello ExtJS window component</h2><br>' +
            '<h2>hello ExtJS window component</h2><br>' +
            '<h2>hello ExtJS window component</h2><br>' +
            '<h2>hello ExtJS window component</h2><br>' +
            '<h2>hello ExtJS window component</h2><br>',  // 在窗口中添加html内容
        autoScroll:true, // 添加滚动条
        // icon: 'your resource path', // 添加图标
        renderTo: Ext.getBody() // 创建渲染的组件，指定要渲染到什么位置
    }).show();
});