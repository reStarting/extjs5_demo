Ext.define("MyApp.store.menu.ExtensionMenuBlockStore",{
	extend:'Ext.data.TreeStore',
	// model:'MyApp.model.menu.MenuBlockItem',
	root: {
        expanded: true,
        children: [
        	{"text":"下拉树",leaf:true},
        	{"text":'datetime',leaf:true},
        	{"text":'带checkbox的多选combobox',leaf:true}
	    ]
    }
});