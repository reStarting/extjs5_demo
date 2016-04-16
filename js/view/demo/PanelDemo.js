var data = {
	'panel':{
		'title':'panel的使用',
        'detail':[{
            'desc':'创建默认panel',
            'name':'panel',
            'code':'Ext.create("Ext.panel.Panel",{\n    title:"Title",\n    width:400,\n    html:"Hello!"\n});'
        },{
            'name':'panel',
            'desc':'创建带工具条的panel,dockedItems中的dock表示工具条的位置,值: left,top,right,bottom',
            'code':'Ext.create("Ext.panel.Panel",{\n    title:"Title",\n    width:400,\n    html:"Hello!",\n    dockedItems: [{\n        xtype: "toolbar",\n        dock:\'top\',\n        items: [{\n            text: \'DockedItem\',\n            handler:function(){\n                Ext.Msg.alert("info","alert!");\n            }\n        },{\n            text:\'Item2\'\n        }]\n    }]\n});'
        },{
            'name':'panel',
            'desc':'创建带item的panel',
            'code':'Ext.create("Ext.panel.Panel",{\n    title:"Title",\n    width:400,\n    bodyPadding: 10,\n    items:[\n        {xtype: \'datefield\',fieldLabel: \'Start date\'}\n    ],\n    dockedItems: [{\n        xtype: "toolbar",\n        dock:\'top\',\n        items: [{\n            text: \'DockedItem\'\n        }]\n    }]\n});'
        },{
            'name':'panel',
            'desc':'官方示例',
            'code':'Ext.create(\'Ext.panel.Panel\', {\n    title: \'Results\',\n    width: 600,\n    height: 400,\n    layout: {\n        type: \'vbox\',       // Arrange child items vertically\n        align: \'stretch\',    // Each takes up full width\n        padding: 5\n    },\n    items: [{               // Results grid specified as a config object with an xtype of \'grid\'\n        xtype: \'grid\',\n        columns: [{header: \'Column One\'}],            // One header just for show. There\'s no data,\n        store: Ext.create(\'Ext.data.ArrayStore\', {}), // A dummy empty data store\n        flex: 1                                       // Use 1/3 of Container\'s height (hint to Box layout)\n    }, {\n        xtype: \'splitter\'   // A splitter between the two child items\n    }, {                    // Details Panel specified as a config object (no xtype defaults to \'panel\').\n        title: \'Details\',\n        bodyPadding: 5,\n        items: [{\n            fieldLabel: \'Data item\',\n            xtype: \'textfield\'\n        }], // An array of form fields\n        flex: 2             // Use 2/3 of Container\'s height (hint to Box layout)\n    }]\n});'
        }]
	},
    'checkbox':{
        'title':'checkbox的使用',
        'detail':[{
            'name':'checkbox',
            'desc':'',
            'code':'Ext.create(\'Ext.form.Panel\', {\n    bodyPadding: 10,\n    width: 300,\n    title: \'checkbox使用\',\n    items: [\n        {\n            xtype: \'fieldcontainer\',\n            id:\'fieldcontainer\',\n            fieldLabel: \'Toppings\',\n            defaultType: \'checkboxfield\',\n            items: [\n                {\n                    boxLabel  : \'Anchovies\',\n                    name      : \'topping\',\n                    inputValue: \'1\',\n                    id        : \'checkbox1\'\n                }, {\n                    boxLabel  : \'Artichoke Hearts\',\n                    name      : \'topping\',\n                    inputValue: \'2\',\n                    checked   : true,\n                    id        : \'checkbox2\'\n                }, {\n                    boxLabel  : \'Bacon\',\n                    name      : \'topping\',\n                    inputValue: \'3\',\n                    id        : \'checkbox3\'\n                }\n            ]\n        }\n    ],\n    bbar: [\n        {\n            text: \'选中第三个\',\n            handler: function() {\n                //Ext新增的查询组件方式,参数可为id,itemId,xtype等,可用css的选择器方式查找\n                var box = Ext.ComponentQuery.query("#fieldcontainer &gt; checkboxfield:last");\n                box[0].setValue(true);\n            }\n        },\n        \'-\',\n        {\n            text: \'选中所有\',\n            handler: function() {\n                var boxes = Ext.ComponentQuery.query("#fieldcontainer &gt; checkboxfield");\n                for(var i=0,len=boxes.length; i&lt;len; i++)\n                {\n                    boxes[i].setValue(true);\n                }\n            }\n        },\n        {\n            text: \'全不选\',\n            handler: function() {\n                var boxes = Ext.ComponentQuery.query("#fieldcontainer &gt; checkboxfield");\n                for(var i=0,len=boxes.length; i&lt;len; i++)\n                {\n                    boxes[i].setValue(false);\n                }\n            }\n        },\n        {\n            text: \'反选\',\n            handler: function() {\n                var boxes = Ext.ComponentQuery.query("#fieldcontainer &gt; checkboxfield");\n                for(var i=0,len=boxes.length; i&lt;len; i++)\n                {\n                    boxes[i].setValue(!boxes[i].getValue());\n                }\n            }\n        }\n    ]\n});'
        }]
    },
    'combo':{
        'title':'combo的使用',
        'detail':[{
            'name':'combo',
            'desc':'创建普通combo',
            'code':'//创建store，这里使用本地数据\nvar states = Ext.create(\'Ext.data.Store\', {\n    fields: [\'abbr\', \'name\'],\n    data : [\n        {"abbr":"南京", "name":"李XX"},\n        {"abbr":"上海", "name":"杨XX"},\n        {"abbr":"广州", "name":"孙某某"}\n        //...\n    ]\n});\n//普通combo创建\nExt.create(\'Ext.form.ComboBox\', {\n    fieldLabel: \'Choose State\',\n    store: states,\n    queryMode: \'local\',\n    displayField: \'name\',\n    valueField: \'abbr\'\n});'
        },{
            'name':'combo',
            'desc':'创建多选combo,配置属性<font color="red">multiSelect : true</font>',
            'code':'//创建store，这里使用本地数据\nvar states = Ext.create(\'Ext.data.Store\', {\n    fields: [\'abbr\', \'name\'],\n    data : [\n        {"abbr":"南京", "name":"李XX"},\n        {"abbr":"上海", "name":"杨XX"},\n        {"abbr":"广州", "name":"孙某某"}\n        //...\n    ]\n});\n//普通combo创建\nExt.create(\'Ext.form.ComboBox\', {\n    multiSelect : true,//启用多选\n    fieldLabel: \'Choose State\',\n    store: states,\n    queryMode: \'local\',\n    displayField: \'name\',\n    valueField: \'abbr\'\n});'
        }]
    },
    "tag":{
        'title' :'tag组件的使用',
        'detail':[{
            'name':'tag',
            'desc':'Tag组件,类似于combo的多选效果,样式更加的好看',
            'code':'var store = Ext.create(\'Ext.data.Store\', {\n    fields: [\'abbr\', \'name\'],\n        data : [\n            {"abbr":"南京", "name":"User1"},\n            {"abbr":"上海", "name":"User2"},\n            {"abbr":"广州", "name":"User3"}\n        ]\n});\n//tag控件是combox的拓展，常用配置参照combox\nExt.create(\'Ext.form.field.Tag\', {\n    fieldLabel: \'Choose\',\n    store: store,\n    queryMode: \'local\',//使用本地数据\n    // queryMode: \'remote\' //远程数据\n    displayField: \'name\',\n    valueField: \'abbr\'\n});'
        }]
    },
    "下拉树":{
        'title' :'拓展组件下拉树的使用',
        'detail':[{
            'name':'treepicker',
            'desc':'创建下拉树组件,在页面中引入<font color="red">Ext.ux.TreePicker.js</font>文件,用法跟普通combo相似',
            'code':'//下拉树组件的store使用treestore\nvar store = Ext.create(\'Ext.data.TreeStore\', {\n    root: {\n        "children": [{\n            "children": [{\n                "children": [],\n                "expanded": true,\n                "hrefTarget": "/view/system/userMgr.jsp",\n                "id": "100002",\n                "leaf": true,\n                "text": "用户管理"\n            }, {\n                "children": [],\n                "expanded": true,\n                "hrefTarget": "/view/system/roleMgr.jsp",\n                "id": "100003",\n                "leaf": true,\n                "text": "角色管理"\n            }, {\n                "children": [],\n                "expanded": true,\n                "hrefTarget": "/view/system/menuMgr.jsp",\n                "id": "100004",\n                "leaf": true,\n                "text": "菜单管理"\n            }, {\n                "children": [],\n                "expanded": true,\n                "hrefTarget": "/view/system/roleEmpower.jsp",\n                "id": "100005",\n                "leaf": true,\n                "text": "角色授权"\n            }, {\n                "children": [],\n                "expanded": true,\n                "hrefTarget": "",\n                "id": "100006",\n                "leaf": true,\n                "text": "数据字典"\n            }, {\n                "children": [],\n                "expanded": true,\n                "hrefTarget": "",\n                "id": "100007",\n                "leaf": true,\n                "text": "员工卡管理"\n            }],\n            "expanded": true,\n            "hrefTarget": "",\n            "id": "100001",\n            "leaf": false,\n            "text": "系统配置"\n        }, {\n            "children": [{\n                "children": [],\n                "expanded": true,\n                "hrefTarget": "",\n                "id": "100009",\n                "leaf": true,\n                "text": "职员管理"\n            }, {\n                "children": [{\n                    "children": [],\n                    "expanded": false,\n                    "hrefTarget": "",\n                    "id": "100236",\n                    "leaf": true,\n                    "text": "sub"\n                }],\n                "expanded": true,\n                "hrefTarget": "",\n                "id": "100010",\n                "leaf": false,\n                "text": "考勤管理"\n            }],\n            "expanded": true,\n            "hrefTarget": "",\n            "id": "100008",\n            "leaf": false,\n            "text": "人力资源管理"\n        }, {\n            "children": [],\n            "expanded": true,\n            "hrefTarget": "测试1",\n            "id": "100044",\n            "leaf": true,\n            "text": "测试1"\n        }],\n        "expanded": true,\n        "hrefTarget": "",\n        "id": "-1",\n        "leaf": false,\n        "text": "管理菜单"\n    }\n});\n\n//拓展组件下拉树\nExt.create(\'Ext.ux.TreePicker\', {\n    store: store,\n    displayField:\'text\'  \n});'
        }]
    },
    '带checkbox的多选combobox':{
        'title' :'multicombo使用',
        'detail':[{
            'name':'multicombo',
            'desc':'拓展自combo,实现带checkbox的多选下拉框,使用该控件需要引入MultiCombobox.js',
            'code':'var states = Ext.create(\'Ext.data.Store\', {\n    fields: [\'abbr\', \'name\'],\n    data : [\n        {"abbr":"AL", "name":"Alabama"},\n        {"abbr":"AK", "name":"Alaska"},\n        {"abbr":"AZ", "name":"Arizona"},\n        {"abbr":"AL", "name":"Alabama"},\n        {"abbr":"AK", "name":"Alaska"},\n        {"abbr":"AZ", "name":"Arizona"},\n        {"abbr":"AL", "name":"Alabama"},\n        {"abbr":"AK", "name":"Alaska"},\n        {"abbr":"AZ", "name":"Arizona"},\n    ]\n});\n\nExt.create(\'Ext.ux.form.field.MultiComboBox\', {\n    fieldLabel: \'Choose State\',\n    store: states,\n    queryMode: \'local\',\n    displayField: \'name\',\n    valueField: \'abbr\'\n});'
        }]
    },
    "date":{
        'title' :'datefield使用',
        'detail':[{
            'name':'datefield',
            'desc':'创建datefield,官方示例,<font color="red">maxValue</font>可以限制datefield的选择范围',
            'code':"Ext.create(\'Ext.form.Panel\', {\n    width: 300,\n    bodyPadding: 10,\n    title: \'Dates\',\n    items: [{\n        xtype: \'datefield\',\n        anchor: \'100%\',\n        fieldLabel: \'From\',\n        name: \'from_date\',\n        maxValue: new Date()  // limited to the current date or prior\n    }, {\n        xtype: \'datefield\',\n        anchor: \'100%\',\n        fieldLabel: \'To\',\n        name: \'to_date\',\n        value: new Date()  // defaults to today\n    }]\n});"
        },{
            'name':'datefield',
            'desc':'使用<font color="red">format</font>属性设置显示的格式',
            'code':'Ext.create(\'Ext.form.Panel\', {\n    width: 300,\n    bodyPadding: 10,\n    title: \'Dates\',\n    items: [{\n        xtype: \'datefield\',\n        anchor: \'100%\',\n        fieldLabel: \'From\',\n        name: \'from_date\',\n        format:\'Y年m月d日\',//设定日期控件显示的格式\n        maxValue: new Date()  // limited to the current date or prior\n    }, {\n        xtype: \'datefield\',\n        anchor: \'100%\',\n        fieldLabel: \'To\',\n        name: \'to_date\',\n        format:\'Y-m-d\',//设定日期控件显示的格式\n        value: new Date()  // defaults to today\n    }]\n});'
        }]
    },
    "time":{
        'title' :'timefield使用',
        'detail':[{
            'name':'timefield',
            'desc':'官方示例，创建timefield控件需要指定minValue,maxValue,increment',
            'code':"Ext.create(\'Ext.form.Panel\', {\n    title: \'Time Card\',\n    width: 300,\n    bodyPadding: 10,\n    items: [{\n        xtype: \'timefield\',\n        name: \'in\',\n        fieldLabel: \'开始时间\',\n        minValue: \'6:00 AM\',\n        maxValue: \'8:00 PM\',\n        increment: 30,//设置递增时间，单位（分）\n        anchor: \'100%\'\n    }, {\n        xtype: \'timefield\',\n        name: \'out\',\n        fieldLabel: \'结束时间\',\n        minValue: \'6:00 AM\',\n        maxValue: \'8:00 PM\',\n        increment: 30,\n        anchor: \'100%\'\n   }]\n});"
        }]
    },
    "datetime":{
        'title' :'datetimefield拓展了date和time组件',
        'detail':[{
            'name':'datetimepicker',
            'desc':'创建最简单的datetimefield',
            'code':'Ext.create("Yun.form.field.DateTime");'
        }]
    },
    "display":{
        'title' :'displayfield使用',
        'detail':[{
            'name':'displayfield',
            'desc':'该控件只做显示，可在form表单中用来只显示而不做提交的操作',
            'code':"Ext.create(\'Ext.form.field.Display\', {\n    fieldLabel: \'分数\',\n    name: \'home_score\',\n    value: \'59\'\n});"
        }]
    },
    "file":{
        'title' :'filefield使用',
        'detail':[{
            'name':'filefield',
            'desc':'普通filefield创建',
            'code':"Ext.create(\'Ext.form.Panel\', {\n    title: \'filefield\',\n    width: 400,\n    bodyPadding: 10,\n    frame: true,\n    items: [{\n        xtype: \'filefield\',\n        name: \'photo\',\n        fieldLabel: \'Photo\',\n        labelWidth: 50,\n        msgTarget: \'side\',\n        allowBlank: false,\n        anchor: \'100%\',\n        buttonText: \'选择...\'\n    }]\n});"
        }]
    },
    'htmleditor':{
        'title':'htmleditor使用',
        'detail':[{
            'name':'htmleditor',
            'desc':'在线编辑器的使用',
            'code':'Ext.tip.QuickTipManager.init();  // enable tooltips\nExt.create(\'Ext.form.HtmlEditor\', {\n    width: 580\n});'
        }]
    },
    'textfield':{
        'title':'textfield使用',
        'detail':[{
            'name':'textfield',
            'desc':'',
            'code':'Ext.create(\'Ext.form.Panel\', {\n    title: \'Contact Info\',\n    width: 300,\n    bodyPadding: 10,\n    items: [{\n        xtype: \'textfield\',\n        name: \'name\',\n        fieldLabel: \'Name\',\n        allowBlank: false  \n    }, {\n        xtype: \'textfield\',\n        name: \'email\',\n        fieldLabel: \'Email Address\',\n        vtype: \'email\'  //验证是否是email\n    }]\n});'
        }]
    },
    'button':{
        'title':'Button使用',
        'detail':[{
            'name':'button',
            'desc':'默认button创建',
            'code':'Ext.create(\'Ext.Button\', {\n    text: \'Button\',\n    handler: function() {\n        alert(\'按钮被点击！\');\n    }\n});'
        },{
            'name':'button',
            'desc':'使用<font color="red">scale</font>属性控制button大小',
            'code':'Ext.create(\'Ext.Container\', {\n    defaults:{\n        margin:\'0 5\'\n    },\n    items   : [\n        {\n            xtype: \'button\',\n            text : \'Small\',\n            scale: \'small\'\n        },\n        {\n            xtype: \'button\',\n            text : \'Medium\',\n            scale: \'medium\'\n        },\n        {\n            xtype: \'button\',\n            text : \'Large\',\n            scale: \'large\'\n        }\n    ]\n});'
        },{
            'name':'button',
            'desc':'使用button制作伸缩菜单',
            'code':'Ext.create(\'Ext.Button\', {\n    text      : \'Menu\',\n    arrowAlign: \'right\',\n    menu      : [\n        {text: \'Item 1\'},\n        {text: \'Item 2\'},\n        {text: \'Item 3\'},\n        {text: \'Item 4\'}\n    ]\n});'
        },{
            'name':'button',
            'desc':'带分割线的button',
            'code':'Ext.create("Ext.button.Split", {\n    text: "菜单",\n    menu:\n    {\n        items: [\n            {text: \'Item 1\'},\n            {text: \'Item 2\'},\n            {text: \'Item 3\'},\n            {text: \'Item 4\'}\n        ]\n    },\n    arrowAlign: \'bottom\'\n});'
        },{
            'name':'button',
            'desc':'菜单式button,与下拉菜单不同的是,下拉选项具备选中状态,按钮的文本也会相应变化',
            'code':'Ext.create(\'Ext.button.Cycle\', {\n    showText: true,\n    prependText: \'请选择：\',\n    menu:\n    {\n        items: [{\n            text: \'选项1\',\n            checked: true\n        }, {\n            text: \'选项2\'\n        }, {\n            text: \'选项3\'\n        }]\n    },\n    changeHandler: function (btn, item) {}\n});'
        },{
            'name':'button',
            'desc':'分段式按钮的使用',
            'code':'Ext.create("Ext.button.Segmented",{\n    items: [{\n        text: \'Option One\'\n    }, {\n        text: \'Option Two\',\n        pressed: true\n    }, {\n        text: \'Option Three\'\n    }]\n});\n'
        },{
            'name':'button',
            'desc':'混合使用',
            'code':'Ext.create("Ext.button.Segmented",{\n    //vertical: true,//纵向排列\n    allowToggle: false,\n    items: [{\n        icon: null,\n        glyph: 72,//图标\n        text: \'Button\'\n    }, {\n        text: \'Menu Button\',\n        menu: [\n            { text: \'Menu Item 1\' },\n            { text: \'Menu Item 2\' },\n            { text: \'Menu Item 3\' }\n        ]\n    }, {\n        xtype: \'splitbutton\',\n        text: \'Split Button\',\n        menu: [\n            { text: \'Menu Item 1\' },\n            { text: \'Menu Item 2\' },\n            { text: \'Menu Item 3\' }\n        ]\n    },{\n        xtype:\'cycle\',\n        showText: true,\n        prependText: \'请选择：\',\n        menu:\n        {\n            items: [{\n                text: \'选项1\',\n                checked: true\n            }, {\n                text: \'选项2\'\n            }, {\n                text: \'选项3\'\n            }]\n        }\n    }]\n});\n'
        }]
    },
    "grid":{
        'title' :'grid使用',
        'detail':[{
            'name':'gridpanel',
            'desc':'使用grid',
            'code':'Ext.create(\'Ext.data.Store\', {\n    storeId:\'store\',//store的id，定义id，以便在gridPanel中使用\n    fields:[\'name\', \'email\', \'phone\'],\n    data:{\n        \'items\':[\n            { \'name\': \'User1\',  "email":"123@qq.com",  "phone":"18688888888"  },\n            { \'name\': \'User2\',  "email":"456@qq.com",  "phone":"15388888888" },\n            { \'name\': \'User3\', "email":"789@163.com",  "phone":"18988888888"  },\n            { \'name\': \'User4\', "email":"test@189.com", "phone":"18188888888"  }\n        ],\n        total:4\n    },\n    pageSize:10,\n    proxy: {\n        type: \'memory\',\n        enablePaging:true,//使用分页，如果不启用该属性，grid将不会被分页\n        reader: {\n            type: \'json\',\n            rootProperty: \'items\',\n            totalProperty:\'total\'\n        }\n    }\n});\n\nExt.create(\'Ext.grid.Panel\', {\n    title: \'GridPanel使用\',\n    store: Ext.data.StoreManager.lookup(\'store\'),//使用ext自带方法查找store,lookup传入的参数为 store的id\n    columns: [ new Ext.grid.RowNumberer(),//编号\n        { text: \'用户\',  dataIndex: \'name\',flex:1 },\n        { text: \'Email\', dataIndex: \'email\', flex: 1 },\n        { text: \'电话\', dataIndex: \'phone\',flex:1 }\n    ],\n    width: "100%",\n    //ext5中新的属性，可以把它当作是tbar、bbar\n //    dockedItems: [{\n    //     xtype: \'toolbar\',\n    //     dock: \'top\',//设置toolbar停留的位置，可选值：\n    //     items: [\n    //         { \n    //          xtype: \'button\', \n    //          text: \'新增\'\n    //         },\n    //     ]\n    // }],\n    tbar:[\n        { \n            xtype: \'button\', \n            text: \'新增\',\n            handler:function(){\n            }\n        },\n        {\n            xtype: \'button\',\n            text: \'修改\',\n            handler:function(){\n            }\n        },\n        {\n            xtype: \'button\',\n            text: \'删除\',\n            handler:function(){\n            }\n        }\n    ],\n    bbar:[\n        {\n            xtype: \'pagingtoolbar\',\n            displayInfo: true,\n            displayMsg: \'显示 {0} - {1} / {2}\',\n            emptyMsg: \'没有数据\',\n            firstText: \'第一页\',\n            prevText: \'上一页\',\n            nextText: \'下一页\',\n            lastText: \'最后一页\',\n            refreshText: \'刷新\',\n            store: Ext.data.StoreManager.lookup(\'store\')\n        }\n    ]\n});'
        },{
            'name':'gridpanel',
            'desc':'分组grid',
            'code':'Ext.create("Ext.data.Store",{\n    fields: [\'name\', \'cuisine\'],\n    groupField: \'cuisine\',\n    storeId: \'restaraunts\',\n    sorters: [\'cuisine\',\'name\'],\n    data: [{\n        name: \'Cheesecake Factory\',\n        cuisine: \'American\'\n    },{\n        name: \'University Cafe\',\n        cuisine: \'American\'\n    },{\n        name: \'Slider Bar\',\n        cuisine: \'American\'\n    },{\n        name: \'Shokolaat\',\n        cuisine: \'American\'\n    },{\n        name: \'Gordon Biersch\',\n        cuisine: \'American\'\n    },{\n        name: \'Crepevine\',\n        cuisine: \'American\'\n    },{\n        name: \'Creamery\',\n        cuisine: \'American\'\n    },{\n        name: \'Old Pro\',\n        cuisine: \'American\'\n    },{\n        name: \'Nola\s\',\n        cuisine: \'Cajun\'\n    },{\n        name: \'House of Bagels\',\n        cuisine: \'Bagels\'\n    },{\n        name: \'The Prolific Oven\',\n        cuisine: \'Sandwiches\'\n    },{\n        name: \'La Strada\',\n        cuisine: \'Italian\'\n    },{\n        name: \'Buca di Beppo\',\n        cuisine: \'Italian\'\n    },{\n        name: \'Pasta?\',\n        cuisine: \'Italian\'\n    },{\n        name: \'Madame Tam\',\n        cuisine: \'Asian\'\n    },{\n        name: \'Sprout Cafe\',\n        cuisine: \'Salad\'\n    },{\n        name: \'Pluto\s\',\n        cuisine: \'Salad\'\n    },{\n        name: \'Junoon\',\n        cuisine: \'Indian\'\n    },{\n        name: \'Bistro Maxine\',\n        cuisine: \'French\'\n    },{\n        name: \'Three Seasons\',\n        cuisine: \'Vietnamese\'\n    },{\n        name: \'Sancho\s Taquira\',\n        cuisine: \'Mexican\'\n    },{\n        name: \'Reposado\',\n        cuisine: \'Mexican\'\n    },{\n        name: \'Siam Royal\',\n        cuisine: \'Thai\'\n    },{\n        name: \'Krung Siam\',\n        cuisine: \'Thai\'\n    },{\n        name: \'Thaiphoon\',\n        cuisine: \'Thai\'\n    },{\n        name: \'Tamarine\',\n        cuisine: \'Vietnamese\'\n    },{\n        name: \'Joya\',\n        cuisine: \'Tapas\'\n    },{\n        name: \'Jing Jing\',\n        cuisine: \'Chinese\'\n    },{\n        name: \'Patxi\s Pizza\',\n        cuisine: \'Pizza\'\n    },{\n        name: \'Evvia Estiatorio\',\n        cuisine: \'Mediterranean\'\n    },{\n        name: \'Cafe 220\',\n        cuisine: \'Mediterranean\'\n    },{\n        name: \'Cafe Renaissance\',\n        cuisine: \'Mediterranean\'\n    },{\n        name: \'Kan Zeman\',\n        cuisine: \'Mediterranean\'\n    },{\n        name: \'Gyros-Gyros\',\n        cuisine: \'Mediterranean\'\n    },{\n        name: \'Mango Caribbean Cafe\',\n        cuisine: \'Caribbean\'\n    },{\n        name: \'Coconuts Caribbean Restaurant & Bar\',\n        cuisine: \'Caribbean\'\n    },{\n        name: \'Rose & Crown\',\n        cuisine: \'English\'\n    },{\n        name: \'Baklava\',\n        cuisine: \'Mediterranean\'\n    },{\n        name: \'Mandarin Gourmet\',\n        cuisine: \'Chinese\'\n    },{\n        name: \'Bangkok Cuisine\',\n        cuisine: \'Thai\'\n    },{\n        name: \'Darbar Indian Cuisine\',\n        cuisine: \'Indian\'\n    },{\n        name: \'Mantra\',\n        cuisine: \'Indian\'\n    },{\n        name: \'Janta\',\n        cuisine: \'Indian\'\n    },{\n        name: \'Hyderabad House\',\n        cuisine: \'Indian\'\n    },{\n        name: \'Starbucks\',\n        cuisine: \'Coffee\'\n    },{\n        name: \'Peet\s Coffee\',\n        cuisine: \'Coffee\'\n    },{\n        name: \'Coupa Cafe\',\n        cuisine: \'Coffee\'\n    },{\n        name: \'Lytton Coffee Company\',\n        cuisine: \'Coffee\'\n    },{\n        name: \'Il Fornaio\',\n        cuisine: \'Italian\'\n    },{\n        name: \'Lavanda\',\n        cuisine: \'Mediterranean\'\n    },{\n        name: \'MacArthur Park\',\n        cuisine: \'American\'\n    },{\n        name: \'St Michael\s Alley\',\n        cuisine: \'Californian\'\n    },{\n        name: \'Osteria\',\n        cuisine: \'Italian\'\n    },{\n        name: \'Vero\',\n        cuisine: \'Italian\'\n    },{\n        name: \'Cafe Renzo\',\n        cuisine: \'Italian\'\n    },{\n        name: \'Miyake\',\n        cuisine: \'Sushi\'\n    },{\n        name: \'Sushi Tomo\',\n        cuisine: \'Sushi\'\n    },{\n        name: \'Kanpai\',\n        cuisine: \'Sushi\'\n    },{\n        name: \'Pizza My Heart\',\n        cuisine: \'Pizza\'\n    },{\n        name: \'New York Pizza\',\n        cuisine: \'Pizza\'\n    },{\n        name: \'California Pizza Kitchen\',\n        cuisine: \'Pizza\'\n    },{\n        name: \'Round Table\',\n        cuisine: \'Pizza\'\n    },{\n        name: \'Loving Hut\',\n        cuisine: \'Vegan\'\n    },{\n        name: \'Garden Fresh\',\n        cuisine: \'Vegan\'\n    },{\n        name: \'Cafe Epi\',\n        cuisine: \'French\'\n    },{\n        name: \'Tai Pan\',\n        cuisine: \'Chinese\'\n    }]\n});\n\nExt.create("Ext.grid.Panel",{\n    collapsible: true,\n    iconCls: \'icon-grid\',\n    frame: true,\n    height: 400,\n\n    minHeight: 200,\n    title: \'Restaurants\',\n    resizable: true,\n\n    features: [{\n        ftype: \'grouping\',\n        groupHeaderTpl: \'{columnName}: {name} ({rows.length} Item{[values.rows.length &gt; 1 ? "s" : ""]})\',\n        hideGroupedHeader: true,\n        startCollapsed: true,\n        id: \'restaurantGrouping\'\n    }],\n    columns:[{\n        text: \'Name\',\n        flex: 1,\n        dataIndex: \'name\'\n    },{\n        text: \'Cuisine\',\n        flex: 1,\n        dataIndex: \'cuisine\'\n    }],\n\n    store:Ext.data.StoreManager.lookup("restaraunts"),\n\n});'
        },{
            'name':'gridpanel',
            'desc':'锁住列的grid, 在column里配置关键属性：<font color="red">locked:true</font>',
            'code':'Ext.create("Ext.data.Store",{\n  storeId:\'lockgridstore\',\n  fields: [\n     {name:\'id\'},\n     {name: \'name\'},\n     {name: \'price\', type: \'float\'},\n     {name: \'change\', type: \'float\'},\n     {name: \'pctChange\', type: \'float\'},\n     {name: \'lastChange\', type: \'string\'},\n     {\n         name: \'trend\',\n         convert: function(value, record) {\n             // Record creation call with no trend there: start with current price\n             if (value === null) {\n                 return [record.get(\'price\')];\n             }\n             return Ext.isArray(value) ? value : [ value ];\n         } \n     },\n     {\n         name: \'rating\',\n         type: \'int\',\n         convert: function(value, record) {\n             var pct = record.get(\'pctChange\');\n             if (pct &lt; 0)\n                 return 2;\n             if (pct &lt; 1)\n                 return 1;\n             return 0;\n         }\n      }\n  ],\n  data: [\n      [0, \'3m Co\',                               71.72, 0.02,  0.03,  \'9/1 12:00am\'],\n      [1, \'Alcoa Inc\',                           29.01, 0.42,  1.47,  \'9/1 12:00am\'],\n      [2, \'Altria Group Inc\',                    83.81, 0.28,  0.34,  \'9/1 12:00am\'],\n      [3, \'American Express Company\',            52.55, 0.01,  0.02,  \'9/1 12:00am\'],\n      [4, \'American International Group, Inc.\',  64.13, 0.31,  0.49,  \'9/1 12:00am\'],\n      [5, \'AT&T Inc.\',                           31.61, -0.48, -1.54, \'9/1 12:00am\'],\n      [6, \'Boeing Co.\',                          75.43, 0.53,  0.71,  \'9/1 12:00am\'],\n      [7, \'Caterpillar Inc.\',                    67.27, 0.92,  1.39,  \'9/1 12:00am\'],\n      [8, \'Citigroup, Inc.\',                     49.37, 0.02,  0.04,  \'9/1 12:00am\'],\n      [9, \'E.I. du Pont de Nemours and Company\', 40.48, 0.51,  1.28,  \'9/1 12:00am\'],\n      [10, \'Exxon Mobil Corp\',                    68.1,  -0.43, -0.64, \'9/1 12:00am\'],\n      [11, \'General Electric Company\',            34.14, -0.08, -0.23, \'9/1 12:00am\'],\n      [12, \'General Motors Corporation\',          30.27, 1.09,  3.74,  \'9/1 12:00am\'],\n      [13, \'Hewlett-Packard Co.\',                 36.53, -0.03, -0.08, \'9/1 12:00am\'],\n      [14, \'Honeywell Intl Inc\',                  38.77, 0.05,  0.13,  \'9/1 12:00am\'],\n      [15, \'Intel Corporation\',                   19.88, 0.31,  1.58,  \'9/1 12:00am\'],\n      [16, \'International Business Machines\',     81.41, 0.44,  0.54,  \'9/1 12:00am\'],\n      [17, \'Johnson & Johnson\',                   64.72, 0.06,  0.09,  \'9/1 12:00am\'],\n      [18, \'JP Morgan & Chase & Co\',              45.73, 0.07,  0.15,  \'9/1 12:00am\'],\n      [19, \'McDonald\s Corporation\',             36.76, 0.86,  2.40,  \'9/1 12:00am\'],\n      [20, \'Merck & Co., Inc.\',                   40.96, 0.41,  1.01,  \'9/1 12:00am\'],\n      [21, \'Microsoft Corporation\',               25.84, 0.14,  0.54,  \'9/1 12:00am\'],\n      [22, \'Pfizer Inc\',                          27.96, 0.4,   1.45,  \'9/1 12:00am\'],\n      [23, \'The Coca-Cola Company\',               45.07, 0.26,  0.58,  \'9/1 12:00am\'],\n      [24, \'The Home Depot, Inc.\',                34.64, 0.35,  1.02,  \'9/1 12:00am\'],\n      [25, \'The Procter & Gamble Company\',        61.91, 0.01,  0.02,  \'9/1 12:00am\'],\n      [26, \'United Technologies Corporation\',     63.26, 0.55,  0.88,  \'9/1 12:00am\'],\n      [27, \'Verizon Communications\',              35.57, 0.39,  1.11,  \'9/1 12:00am\'],\n      [28, \'Wal-Mart Stores, Inc.\',               45.45, 0.73,  1.63,  \'9/1 12:00am\']\n  ]\n});\nExt.create("Ext.grid.Panel",{\n  store:Ext.data.StoreManager.lookup("lockgridstore"),\n  columnLines: true,\n  height: 350,\n  width: 600,\n  title: \'Locking Grid\',\n  columns : [{\n          xtype: \'rownumberer\'\n      }, {\n          text     : \'Company Name\',\n          locked   : true,//锁定列\n          width    : 230,\n          sortable : false,\n          dataIndex: \'name\'\n      }, {\n          text     : \'Price\',\n          lockable: false,\n          width    : 80,\n          sortable : true,\n          formatter: \'usMoney\',\n          dataIndex: \'price\'\n      }, {\n          text     : \'Tall&lt;br&gt;Header\',\n          hidden   : true,\n          width    : 70,\n          sortable : false,\n          renderer : function(val) {\n              return Math.round(val * 3.14 * 100) / 10;\n          },\n          dataIndex: \'change\'\n      }, {\n          text     : \'Change\',\n          width    : 90,\n          sortable : true,\n          renderer : function(val) {\n              if (val &gt; 0) {\n                  return \'&lt;span style="color:green;"&gt;\' + val + \'&lt;/span&gt;\';\n              } else if (val &lt; 0) {\n                  return \'&lt;span style="color:red;"&gt;\' + val + \'&lt;/span&gt;\';\n              }\n              return val;\n          },\n          dataIndex: \'change\'\n      }, {\n          text     : \'% Change\',\n          width    : 105,\n          sortable : true,\n          renderer : function(val) {\n              if (val &gt; 0) {\n                  return \'&lt;span style="color:green;"&gt;\' + val + \'%&lt;/span&gt;\';\n              } else if (val &lt; 0) {\n                  return \'&lt;span style="color:red;"&gt;\' + val + \'%&lt;/span&gt;\';\n              }\n              return val;\n          },\n          dataIndex: \'pctChange\'\n      }, {\n          text     : \'Last Updated\',\n          width    : 135,\n          sortable : true,\n          dataIndex: \'lastChange\'\n  }]\n});'
        },{
            'name':'gridpanel',
            'desc':'复杂表头的grid',
            'code':'Ext.create("Ext.data.Store",{\n  storeId:\'complexgridstore\',\n  fields: [\n     {name: \'name\'},\n     {name: \'price\', type: \'float\'},\n     {name: \'change\', type: \'float\'},\n     {name: \'pctChange\', type: \'float\'},\n     {name: \'lastChange\', type: \'string\'},\n     // Trend begins with the cerrent price. Changes get pushed onto the end\n     {\n         name: \'trend\',\n         convert: function(value, record) {\n             // Record creation call with no trend there: start with current price\n             if (value === null) {\n                 return [record.get(\'price\')];\n             }\n             return Ext.isArray(value) ? value : [ value ];\n         } \n     },\n     // Rating dependent upon performance 0 = best, 2 = worst\n     {\n         name: \'rating\',\n         type: \'int\',\n         convert: function(value, record) {\n             var pct = record.get(\'pctChange\');\n             if (pct &lt; 0)\n                 return 2;\n             if (pct &lt; 1)\n                 return 1;\n             return 0;\n         }\n      }\n  ],\n  data: [\n      [0, \'3m Co\',                               71.72, 0.02,  0.03,  \'9/1 12:00am\'],\n      [1, \'Alcoa Inc\',                           29.01, 0.42,  1.47,  \'9/1 12:00am\'],\n      [2, \'Altria Group Inc\',                    83.81, 0.28,  0.34,  \'9/1 12:00am\'],\n      [3, \'American Express Company\',            52.55, 0.01,  0.02,  \'9/1 12:00am\'],\n      [4, \'American International Group, Inc.\',  64.13, 0.31,  0.49,  \'9/1 12:00am\'],\n      [5, \'AT&T Inc.\',                           31.61, -0.48, -1.54, \'9/1 12:00am\'],\n      [6, \'Boeing Co.\',                          75.43, 0.53,  0.71,  \'9/1 12:00am\'],\n      [7, \'Caterpillar Inc.\',                    67.27, 0.92,  1.39,  \'9/1 12:00am\'],\n      [8, \'Citigroup, Inc.\',                     49.37, 0.02,  0.04,  \'9/1 12:00am\'],\n      [9, \'E.I. du Pont de Nemours and Company\', 40.48, 0.51,  1.28,  \'9/1 12:00am\'],\n      [10, \'Exxon Mobil Corp\',                    68.1,  -0.43, -0.64, \'9/1 12:00am\'],\n      [11, \'General Electric Company\',            34.14, -0.08, -0.23, \'9/1 12:00am\'],\n      [12, \'General Motors Corporation\',          30.27, 1.09,  3.74,  \'9/1 12:00am\'],\n      [13, \'Hewlett-Packard Co.\',                 36.53, -0.03, -0.08, \'9/1 12:00am\'],\n      [14, \'Honeywell Intl Inc\',                  38.77, 0.05,  0.13,  \'9/1 12:00am\'],\n      [15, \'Intel Corporation\',                   19.88, 0.31,  1.58,  \'9/1 12:00am\'],\n      [16, \'International Business Machines\',     81.41, 0.44,  0.54,  \'9/1 12:00am\'],\n      [17, \'Johnson & Johnson\',                   64.72, 0.06,  0.09,  \'9/1 12:00am\'],\n      [18, \'JP Morgan & Chase & Co\',              45.73, 0.07,  0.15,  \'9/1 12:00am\'],\n      [19, \'McDonald\s Corporation\',             36.76, 0.86,  2.40,  \'9/1 12:00am\'],\n      [20, \'Merck & Co., Inc.\',                   40.96, 0.41,  1.01,  \'9/1 12:00am\'],\n      [21, \'Microsoft Corporation\',               25.84, 0.14,  0.54,  \'9/1 12:00am\'],\n      [22, \'Pfizer Inc\',                          27.96, 0.4,   1.45,  \'9/1 12:00am\'],\n      [23, \'The Coca-Cola Company\',               45.07, 0.26,  0.58,  \'9/1 12:00am\'],\n      [24, \'The Home Depot, Inc.\',                34.64, 0.35,  1.02,  \'9/1 12:00am\'],\n      [25, \'The Procter & Gamble Company\',        61.91, 0.01,  0.02,  \'9/1 12:00am\'],\n      [26, \'United Technologies Corporation\',     63.26, 0.55,  0.88,  \'9/1 12:00am\'],\n      [27, \'Verizon Communications\',              35.57, 0.39,  1.11,  \'9/1 12:00am\'],\n      [28, \'Wal-Mart Stores, Inc.\',               45.45, 0.73,  1.63,  \'9/1 12:00am\']\n  ]\n});\nExt.create("Ext.grid.Panel",{\n  store:Ext.data.StoreManager.lookup("complexgridstore"),\n  columnLines: true,\n  height: 350,\n  width: 600,\n  title: \'Complex Grid\',\n  columns : [{\n        text     : \'Company\',\n        flex     : 1,\n        sortable : true,\n        dataIndex: \'name\'\n      }, {\n        text: \'Stock Price\',\n        columns: [{\n            text     : \'Price\',\n            width    : 75,\n            sortable : true,\n            formatter: \'usMoney\',\n            dataIndex: \'price\'\n        }, {\n            text     : \'Change\',\n            width    : 80,\n            sortable : true,\n            renderer :  function(val) {\n                if (val &gt; 0) {\n                    return \'&lt;span style="color:green;"&gt;\' + val + \'&lt;/span&gt;\';\n                } else if (val &lt; 0) {\n                    return \'&lt;span style="color:red;"&gt;\' + val + \'&lt;/span&gt;\';\n                }\n                return val;\n            },\n            dataIndex: \'change\'\n        }, {\n            text     : \'% Change\',\n            width    : 100,\n            sortable : true,\n            renderer : function(val) {\n                if (val &gt; 0) {\n                    return \'&lt;span style="color:green;"&gt;\' + val + \'&lt;/span&gt;\';\n                } else if (val &lt; 0) {\n                    return \'&lt;span style="color:red;"&gt;\' + val + \'&lt;/span&gt;\';\n                }\n                return val;\n            },\n            dataIndex: \'pctChange\'\n        }]\n    }, {\n        text     : \'Last Updated\',\n        width    : 115,\n        sortable : true,\n        dataIndex: \'lastChange\'\n    }]\n});'
        },{
            'name':'gridpanel',
            'desc':'property grid',
            'code':'Ext.create(\'Ext.grid.property.Grid\', {\n    title: \'Properties Grid\',\n    width: 300,\n    source: {\n        "(name)": "My Object",\n        "Created": Ext.Date.parse(\'10/15/2006\', \'m/d/Y\'),\n        "Available": false,\n        "Version": 0.01,\n        "Description": "A test object"\n    }\n});'
        }]
    },
    "tree":{
        'title' :'Tree的使用',
        'detail':[{
            'name':'treepanel',
            'desc':'简单树的创建',
            'code':'Ext.create(\'Ext.data.TreeStore\', {\n    storeId:\'simpletreestore\',\n    root: {\n        expanded: true,\n        children: [\n            { text: "detention", leaf: true },\n            { text: "homework", expanded: true, \n                children: [\n                    { text: "book report", leaf: true },\n                    { text: "algebra", leaf: true}\n                ] \n            },\n            { text: "buy lottery tickets", leaf: true }\n        ]\n    }\n});\n\nExt.create(\'Ext.tree.Panel\', {\n    title: \'Simple Tree\',\n    width: 200,\n    store: Ext.data.StoreManager.lookup("simpletreestore"),\n    rootVisible: true\n});'
        },{
            'name':'treepanel',
            'desc':'带checkbox的树,只需在结点中加入：<font color="red">checked</font>属性就可出现checkbox框',
            'code':'Ext.create(\'Ext.data.TreeStore\', {\n    storeId:\'withcheckboxtreestore\',\n    root: {\n        expanded: true,\n        children: [\n            { text: "detention", leaf: true,checked:true },\n            { text: "homework", expanded: true, checked:false,\n                children: [\n                    { text: "book report", leaf: true,checked:false },\n                    { text: "algebra", leaf: true,checked:true}\n                ] \n            },\n            { text: "buy lottery tickets", leaf: true,checked:false }\n        ]\n    }\n});\n\nExt.create(\'Ext.tree.Panel\', {\n    title: \'Simple Tree\',\n    width: 200,\n    store: Ext.data.StoreManager.lookup("withcheckboxtreestore"),\n    rootVisible: false\n});'
        },{
            'name':'treepanel',
            'desc':'可在当前树中任意拖动结点的tree',
            'code':'Ext.create(\'Ext.data.TreeStore\', {\n    storeId:\'droptreestore\',\n    root: {\n        expanded: true,\n        children: [\n            { text: "detention", leaf: true},\n            { text: "homework", expanded: true,\n                children: [\n                    { text: "book report", leaf: true},\n                    { text: "algebra", leaf: true}\n                ] \n            },\n            { text: "buy lottery tickets", leaf: true }\n        ]\n    }\n});\n\nExt.create(\'Ext.tree.Panel\', {\n    title: \'Simple Tree\',\n    width: 200,\n    store: Ext.data.StoreManager.lookup("droptreestore"),\n    viewConfig: {\n        plugins: {\n            ptype: \'treeviewdragdrop\',\n            containerScroll: true\n        }\n    },\n    rootVisible: false\n});'
        },{
            'name':'treepanel',
            'desc':'两棵树之间的拖拽',
            'code':'Ext.create("Ext.data.TreeStore",{\n    storeId:\'twodroptreestore\',\n    folderSort: true,\n    root: {\n        text: \'Ext\',\n        id:\'src\',\n        expanded: true,\n        children: [\n            { text: "detention", leaf: true},\n            { text: "homework", expanded: true,\n                children: [\n                    { text: "book report", leaf: true},\n                    { text: "algebra", leaf: true}\n                ] \n            },\n            { text: "buy lottery tickets", leaf: true }\n        ]\n    },\n    sorters: [{\n        property: \'text\',\n        direction: \'ASC\'\n    }]\n});\nExt.create("Ext.data.TreeStore",{\n    storeId:\'twodroptreestore2\',\n    root: {\n        text:\'Custom\',\n        id:\'src\',\n        expanded: true,\n        children: []\n    },\n    folderSort: true,\n    sorters: [{\n        property: \'text\',\n        direction: \'ASC\'\n    }]\n});\nExt.create("Ext.container.Container",{\n    layout:{\n        type:\'hbox\',\n        align:\'stretch\'\n    },\n    height: 300,\n    width: 550,\n    items:[{\n        title:\'Source\',\n        xtype: \'treepanel\',\n        margin: \'0 15 0 0\',\n        flex: 1,\n        viewConfig: {\n            plugins: {\n                ptype: \'treeviewdragdrop\',\n                ddGroup: \'twotreegroup\',\n                appendOnly: true,\n                sortOnDrop: true,\n                containerScroll: true\n            }\n        },\n        store:Ext.data.StoreManager.lookup("twodroptreestore"),\n    },{\n        title: \'Custom Build\',\n        xtype: \'treepanel\',\n        flex: 1,\n        viewConfig: {\n            plugins: {\n                ptype: \'treeviewdragdrop\',\n                ddGroup: \'twotreegroup\',\n                appendOnly: true,\n                sortOnDrop: true,\n                containerScroll: true,\n                allowContainerDrops: true\n            }\n        },\n        store:Ext.data.StoreManager.lookup("twodroptreestore2"),\n    }]\n});'
        },{
            'name':'treepanel',
            'desc':'树节点的简单增删改实现',
            'code':'Ext.create(\'Ext.data.TreeStore\', {\n    storeId:\'simpleoptreestore\',\n    root: {\n        expanded: true,\n        children: [\n            { text: "detention", leaf: true },\n            { text: "homework", expanded: true, \n                children: [\n                    { text: "book report", leaf: true },\n                    { text: "algebra", leaf: true}\n                ] \n            },\n            { text: "buy lottery tickets", leaf: true }\n        ]\n    }\n});\n\n\nExt.create(\'Ext.tree.Panel\', {\n    title: \'Simple Tree\',\n    width: 200,\n    store: Ext.data.StoreManager.lookup("simpleoptreestore"),\n    rootVisible: true,\n    showToast: function(s, title) {\n        Ext.toast({\n            html: s,\n            closable: false,\n            align: \'t\',\n            slideInDuration: 400,\n            minWidth: 400\n        });\n    },\n    listeners:{\n        \'itemcontextmenu\':function(tree, record, tr, rowIndex, e, eOpts){\n            var me = this;\n            e.preventDefault();\n            //创建右键菜单\n            Ext.create(\'Ext.menu.Menu\', {\n                width: 130,\n                margin: \'0 0 10 0\',\n                items: [{\n                    text: \'修改\',\n                    handler:function(item, e){\n                        Ext.MessageBox.prompt("提示","请输入节点名",function(btn, v){\n                            if(btn == "ok")//只有确认按钮才能改变节点显示内容\n                            {\n                                record.set("text", v);\n                            }\n                        });\n                    }\n                },{\n                    text: \'添加\',\n                    handler:function(){\n                        if(record.hasChildNodes())\n                        {\n                            Ext.MessageBox.prompt("提示","请输入节点名",function(btn, v){\n                                if(btn == "ok")//只有确认按钮才能改变节点显示内容\n                                {\n                                    record.appendChild({\n                                        "text":v,\n                                        \'leaf\':true\n                                    });\n                                }\n                            });\n                        }\n                        else\n                        {\n                            me.showToast("请选择非叶子节点!");\n                        }\n                        // console.log(children)\n                    }\n                },{\n                    text: \'删除\',\n                    handler:function(){\n                        Ext.MessageBox.show({\n                            title:\'提示\',\n                            msg:\'确认删除该节点？\',\n                            buttons:Ext.MessageBox.YESNO,\n                            icon: Ext.MessageBox.QUESTION,\n                            fn:function(btn, v){\n                                if(btn == "yes")\n                                {\n                                    //删除节点\n                                    record.remove();\n                                }\n                            }\n                        }); \n                    }\n                }]\n            }).showAt(e.getXY());\n        }\n    }\n});'
        }]
    },
    "tabpanel":{
        'title' :'tabpanel使用',
        'detail':[{
            'name':'tabpaneldemo',
            'desc':'基本tabpanel的创建',
            'code':'Ext.create(\'Ext.tab.Panel\',{\n    height: 300,\n    defaults: {\n        bodyPadding: 10,\n        scrollable: true\n    },\n    items: [{\n        title: \'Tab1\',\n        html: \'Tab1\'\n    }, {\n        title: \'Tab2\',\n        html: \'Tab2\'\n    }, {\n        title: \'Disabled Tab\',\n        disabled: true\n    }, {\n        title: \'Closable Tab\',\n        closable: true,\n        html: \'Closable Tab\'\n    }, {\n        title: \'Tab3\',\n        html: \'Another\'\n    }]\n});'
        },{
            'name':'tabpaneldemo',
            'desc':'使用图标的tabpanel,图标可自定义，这里使用了官网例子中的图标',
            'code':'Ext.create(\'Ext.tab.Panel\',{\n    height: 300,\n    defaults: {\n        bodyPadding: 10,\n        scrollable: true\n    },\n    items: [{\n        glyph:72,\n        html: \'Tab1\'\n    }, {\n        glyph:77,\n        html: \'Tab2\'\n    }, {\n        glyph:67,\n        disabled: true\n    }]\n});'
        },{
            'name':'tabpaneldemo',
            'desc':'使用图标的tabpanel',
            'code':'Ext.create(\'Ext.tab.Panel\',{\n    height: 300,\n    defaults: {\n        bodyPadding: 10,\n        scrollable: true\n    },\n    items: [{\n        glyph:72,\n        title:\'Tab1\',\n        html: \'Tab1\'\n    }, {\n        glyph:77,\n        title:\'Tab2\',\n        html: \'Tab2\'\n    }, {\n        glyph:67,\n        title:\'Disabled\',\n        disabled: true\n    }]\n});'
        }]
    },
    "form表单":{
        'title' :'常用form表单',
        'detail':[{
            'name':'formpanel',
            'desc':'登录表单',
            'code':'Ext.create(\'Ext.form.Panel\',{\n    title: \'Login\',\n    frame:true,\n    width: 320,\n    bodyPadding: 10,\n    buttonAlign:\'center\',\n    defaults:{\n        anchor: \'100%\',\n        labelWidth: 120\n    },\n    //设置items的默认xtype\n    defaultType: \'textfield\',\n    \n    items: [{\n        allowBlank: false,\n        fieldLabel: \'用户名\',\n        name: \'user\',\n        emptyText: \'user name\'\n    }, {\n        allowBlank: false,\n        fieldLabel: \'密码\',\n        name: \'pass\',\n        emptyText: \'password\',\n        inputType: \'password\'\n    }, {\n        xtype:\'checkbox\',\n        fieldLabel: \'记住帐号\',\n        name: \'remember\'\n    }],\n//    dockedItems:[{\n//        xtype:\'toolbar\',\n//        dock:\'bottom\',\n//        ui:\'footer\',\n//        items:[{\n//            text:\'注册\'\n//        },{\n//            text:\'登录\'\n//        }]\n//    }]\n    buttons: [\n        { text:\'注册\' },\n        { \n            text:\'登录\',\n            handler:function(){\n                if(this.up("form").getForm().isValid())\n                {\n                    Ext.Msg.alert("提示","登录成功!");\n                }\n            }\n        }\n    ]\n});'
        }]
    },
    "test":{
        'title' :'Test',
        'detail':[{
            'name':'Name',
            'desc':'desc',
            'code':''
        }]
    }
};

Ext.define("MyApp.view.demo.PanelDemo",{
	extend:'Ext.Component',
	xtype:'paneldemo',
	alias:'widget.paneldemo',
    autoScroll:true,
    // closeAction:'hide',
    autoDestroy: false,
	tpl:[
        '<div class="content-moudel">',
        '<div class="content-moudel-title"><span class="content-moudel-title-words">{title}</span></div>',
        '<tpl for="detail">',
        '<div class="content-moudel-detail">',
        '<div class="content-moudel-detail-title">示例</div>',
        '<div class="content-moudel-detail-title-desc">{desc}</div>',
        '<div class="example-show" id="{name}-{[xindex]}"></div>',
        '<div class="example-code-title">代码</div>',
        '<div class="example-code"><pre class="prettyprint">{code}</pre></div>',
        '</div>',
        '</tpl>',
        '</div>'
    ],
    data:[],
    initComponent: function(){
    	var me = this;
        Ext.apply(me.data, data[me.tag]);
    	me.callParent();
    }
});