Ext.QuickTips.init();
Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
	name: "MyApp",
	appFolder: 'js',
	autoCreateViewport: 'MyApp.view.Main',
	controllers:[
		'menu.MenuBlockController'
	]
});