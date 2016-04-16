Ext.define("MyApp.view.menu.ExtensionMenuBlock",{
	extend: 'Ext.tree.Panel',
	xtype:'extensionmenublock',
    alias:'widget.extensionmenublock',
    store:'MyApp.store.menu.ExtensionMenuBlockStore',
    rootVisible: false,
    useArrows:true
});
