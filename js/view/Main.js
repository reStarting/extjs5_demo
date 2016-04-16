Ext.define("MyApp.view.Main",{
	extend: 'Ext.container.Viewport',
    xtype: 'app-main',
    cls:'main-container',
    layout: {
        type: 'border'
    },
    items: [{
        xtype: 'panel',
        region: 'west',
        cls:'west-accordion',
        layout: {
            type: 'accordion',
            titleCollapse: true,
            animate: true//,
            // activeOnTop: true
        },
        items: [{
            xtype:'basemenublock',
            title: "基本组件"
        },{
            xtype:'advancedmenublock',
            title: '复合组件'
        },{
            xtype:'extensionmenublock',
            title: '拓展组件'
        }],
        width: 250
    },{
        region: 'center',
        xtype: 'contenttabpanel',
        // tabPosition:'left',
        items:[{
            title: '首页',
            xtype:'component',
            autoScroll:true,
            tpl:[
                '<div class="content-qa">',
                '<tpl for=".">',
                '<div class="content-qa-detail">',
                '<div class="content-qa-detail-title">问：{question}</div>',
                '<div class="qa-title">答：{answer}</div>',
                '</div>',
                '</tpl>',
                '</div>'
            ],
            data:[{
                question:"如何引入EXTJS5.1？",
                answer:'1.引入ext-all.js(主文件)<br><span style="display:inline-block;text-indent:2em;">2.引入ext-locale-zh_CN.js(本地化文件)</span><br><span style="display:inline-block;text-indent:2em;">3.引入ext-theme-crisp.js(主题文件)</span><br><span style="display:inline-block;text-indent:2em;">4.引入ext-theme-crisp-all.css(主题css样式表)</span><br><span style="display:inline-block;text-indent:2em;">5.引入自己的js和css文件</span><br><span style="display:inline-block;text-indent:2em;"><img src="images/import.png" /></span>'
            },{
                question:'如何使用ExtJS5.1?',
                answer:'<span>在extjs3的时候，我们的程序入口一般为:Ext.onReady(),在ext新版本中也可以使用，但是不推荐，新的程序入口为Ext.application,写法如下：</span><br><span style="display:inline-block;text-indent:2em;"><img src="images/appstart.png"/></span>'
            }]
        }]
    }]
});