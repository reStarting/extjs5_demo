Ext.define("MyApp.view.menu.AdvancedMenuBlock",{
	extend: 'Ext.tree.Panel',
	xtype:'advancedmenublock',
    alias:'widget.advancedmenublock',
    store:'MyApp.store.menu.AdvancedMenuBlockStore',
    rootVisible: false,
    useArrows:true
});
