Ext.define("MyApp.controller.menu.MenuBlockController",{
	extend: 'Ext.app.Controller',  
	stores:[
		'MyApp.store.menu.BaseMenuBlockStore',
		'MyApp.store.menu.AdvancedMenuBlockStore',
		'MyApp.store.menu.ExtensionMenuBlockStore'
	],
	models:[
		'MyApp.model.menu.MenuBlockItem'
	],
	views:[
		'MyApp.view.menu.BaseMenuBlock',
		'MyApp.view.menu.AdvancedMenuBlock',
		'MyApp.view.menu.ExtensionMenuBlock',
		'MyApp.view.ContentTabPanel',
		'MyApp.view.demo.PanelDemo'
	],	
	refs:[
		{
			ref:'content',
			selector:'content'
		}
	],
	examples:{},
	init: function(){
		this.control({
			'basemenublock':{
				itemclick:this.onItemClick
			},
			'advancedmenublock':{
				itemclick:this.onItemClick
			},
			'extensionmenublock':{
				itemclick:this.onItemClick
			},
			'paneldemo':{
				afterrender:this.onPaneldemoAfterrender
			}
		});
	},
	onItemClick: function(me, record, item, index, e, eOpts ){
		var tabs = this.getContent();
		var widgetName = record.get("text").toLowerCase();
		var id = record.id;
		var tab = Ext.getCmp(id);
		// console.log("id:", id);
		// console.log("tab:", tab);
		if(!tab)
		{
			tab = this.getContent().add(Ext.create({
				id:id,
				xtype:"paneldemo",
				closable:true,
				tag:widgetName,
				title:widgetName
			}));
		}
		else
		{
			if(!tabs.getComponent(tab))
			{
				tabs.add(tab);
			}
		}
		// console.log("This examples:", this.examples);
		tabs.setActiveTab(tab);
		// tabs.doLayout();
	},
	onPaneldemoAfterrender:function(me, eOpts){
		// var es = Ext.ComponentQuery.query("paneldemo");
		// console.log(es)
		if(me.data)
		{
			prettyPrint();
			var codes = me.data.detail || [];
			for(var i=0,len=codes.length; i<len; i++)
			{
				var code = codes[i].code;
				if(code)
				{
					code = code.replace(/\&lt\;/ig,"<").replace(/\&gt\;/ig,">");
					var p = eval(code);
					if(p)
					{
						p.render(codes[i].name+"-"+(i+1));
					}
				}
			}
		}
	}
});
