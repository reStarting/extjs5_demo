Ext.define("MyApp.view.menu.BaseMenuBlock",{
	extend: 'Ext.tree.Panel',
	xtype:'basemenublock',
    alias:'widget.basemenublock',
    store:'MyApp.store.menu.BaseMenuBlockStore',
    rootVisible: false,
    useArrows:true
});
