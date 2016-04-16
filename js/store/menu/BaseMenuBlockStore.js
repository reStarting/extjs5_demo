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
Ext.define("MyApp.store.menu.BaseMenuBlockStore",{
	extend:'Ext.data.TreeStore',
	// model:'MyApp.model.menu.MenuBlockItem',
	root: {
        expanded: true,
        children: [
        	{"text":"test",leaf:true},
	        {"text":"panel",leaf:true},
	        {"text":'button',leaf:true},
	        {"text":'textfield',leaf:true},
	        {"text":"combo",leaf:true},
	        {"text":'tag',leaf:true},
	        {"text":"checkbox",leaf:true},
	        {"text":"date",leaf:true},
	        {"text":"time",leaf:true},
	        {"text":"display",leaf:true},
	        {"text":"file",leaf:true},
	        {"text":'htmleditor',leaf:true},
	        {"text":"grid",leaf:true},
	        {"text":"tree",leaf:true},
	        {"text":"tabpanel",leaf:true}
	    ]
    }
});