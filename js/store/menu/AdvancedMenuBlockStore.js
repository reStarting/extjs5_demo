// var data = {
//     "base":[
//         {"text":"Panel",leaf:true},
//         {"text":"combo",leaf:true}
//     ],
//     "advanced":[
//         {"text":"grid",leaf:true},
//         {"text":"tree",leaf:true},
//     ],
//     "extension":[
//     ]
// };
Ext.define("MyApp.store.menu.AdvancedMenuBlockStore",{
	extend:'Ext.data.TreeStore',
	// model:'MyApp.model.menu.MenuBlockItem',
	root: {
        expanded: true,
        children: [
        	{"text":"form表单",leaf:true}
	    ]
    }
});