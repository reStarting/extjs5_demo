


Ext.define('Ext.ux.tree.ThreeStateColumn', {
    extend: 'Ext.tree.Column',
    alias: 'widget.threestatecolumn',

    cellTpl: [
        '<tpl for="lines">',
            '<img src="{parent.blankUrl}" class="{parent.childCls} {parent.elbowCls}-img ',
            '{parent.elbowCls}-<tpl if=".">line<tpl else>empty</tpl>" role="presentation"/>',
        '</tpl>',
        '<img src="{blankUrl}" class="{childCls} {elbowCls}-img {elbowCls}',
            '<tpl if="isLast">-end</tpl><tpl if="expandable">-plus {expanderCls}</tpl>" role="presentation"/>',
        '<tpl if="checked !== null">',
            '<input type="button" {ariaCellCheckboxAttr}',
                ' class="{childCls} {checkboxCls} <tpl if="checked"> {checkboxCls}-checked</tpl> <tpl if="this.isHalf(checked)"> x-tree-checkbox-halfcheck</tpl>"/> ',
        '</tpl>',
        '<img src="{blankUrl}" role="presentation" class="{childCls} {baseIconCls} ',
            '{baseIconCls}-<tpl if="leaf">leaf<tpl else>parent</tpl> {iconCls}"',
            '<tpl if="icon">style="background-image:url({icon})"</tpl>/>',
        '<tpl if="href">',
            '<a href="{href}" role="link" target="{hrefTarget}" class="{textCls} {childCls}">{value}</a>',
        '<tpl else>',
            '<span class="{textCls} {childCls}">{value}</span>',
        '</tpl>',
        {
        	isHalf: function(check){
        		if(check == "half")
        		{
        			return true;
        		}
        		return false;
        	}
        }
    ]
});

Ext.define('Ext.ux.tree.ThreeStateView', {
    extend: 'Ext.tree.View',
    alias: 'widget.threestateview',
    //新增checkbox三种状态
    checkStatus:{
        check:1,
        uncheck:2,
        half:3
    },

    initComponent: function() {
        var me = this;

        if (me.bufferedRenderer) {
            me.animate = false;
        }
        else if (me.initialConfig.animate === undefined) {
            me.animate = Ext.enableFx;
        }


        Ext.util.CSS.createStyleSheet(".x-tree-checkbox-halfcheck{background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAMAAABFNRROAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RENDQzE2MzU3QzVDMTFFNDgzRjk5Q0FBRkQ5ODg3QTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RENDQzE2MzY3QzVDMTFFNDgzRjk5Q0FBRkQ5ODg3QTYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpEQ0NBNDE3NzdDNUMxMUU0ODNGOTlDQUFGRDk4ODdBNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpEQ0NBNDE3ODdDNUMxMUU0ODNGOTlDQUFGRDk4ODdBNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pqpp6RYAAAAGUExURf///5mZmY5QSrIAAAAcSURBVHjaYmBEBgyMDAgA4iHL0J+H4hZkABBgAC6RAILNNsiuAAAAAElFTkSuQmCC) no-repeat 1px 1px;}","buanxuan");

        me.store = me.panel.getStore();
        me.onRootChange(me.store.getRoot());

        me.animQueue = {};
        me.animWraps = {};

        me.callParent(arguments);
        me.store.setRootVisible(me.rootVisible);
        me.addRowTpl(Ext.XTemplate.getTpl(me, 'treeRowTpl'));

        me.initCheckStatus();
    },

    //复写onCheckChange方法
    onCheckChange: function(record) {
        var me = this, checked = record.get('checked');
        if (Ext.isBoolean(checked)) {
            checked = !checked;
            record.set('checked', checked);
            this.fireEvent('checkchange', record, checked);
        }
        else
        {
        	checked = true;
            record.set('checked', checked);
            this.fireEvent('checkchange', record, checked);
        }
        me.cascadeCheck(record, checked);
        me.setCheckStatus(record);
    },
    setChecked: function(record){
        this.onCheckChange(record);
    },
    initCheckStatus: function(){
        var me = this;
        var checked = me.getChecked(),i, len=checked.length;
        var checkedParentNodes = [];
        for(i=0; i<len; i++)
        {
            var c = checked[i];
            if(c.parentNode && !Ext.Array.contains(checkedParentNodes, c.parentNode))
            {
                checkedParentNodes.push(c.parentNode);
                me.cascadeCheck(c, true);
                me.setCheckStatus(c);
            }
        }
    },
    cascadeCheck: function(node, check){
        node.cascadeBy(function(rec){
            rec.set("checked", check);
        });
    },
    setCheckStatus: function(node){
        var me = this,parent = node.parentNode;
        if(parent)
        {
            var check = this.isAllChildrenChecked(parent);
            switch (check)
            {
                case me.checkStatus.check:
                    parent.set("checked", true);
                    break;
                case me.checkStatus.uncheck:
                    parent.set("checked", false);
                    break;
                case me.checkStatus.half:
                    parent.set("checked", "half");
                    break;
                default:
                    parent.set("checked", false);
            }
            me.setCheckStatus(parent);
        }
    },
    //检查所有子节点是否都被选中，不包含孙节点
    isAllChildrenChecked: function(parent){
        var me = this,children = parent && parent.childNodes,
            i,checkedNum = 0,uncheckedNum = 0,len = children && children.length;

        parent.eachChild(function(child){
            var check = me.isItemChecked(child);
            if(check == true)
            {
                checkedNum++;
            }
            else if(check == false)
            {
                uncheckedNum++;
            }
            else{}
        });

        if(checkedNum != 0 && len == checkedNum) return me.checkStatus.check;
        if(uncheckedNum != 0 && len == uncheckedNum) return me.checkStatus.uncheck;
        return me.checkStatus.half;
    }
});

Ext.define('Ext.ux.tree.Panel', {
    extend: 'Ext.tree.Panel',
    alias: 'widget.threestatetreepanel',
    alternateClassName: ['Ext.ux.tree.ThreeStateTreePanel', 'Ext.ux.ThreeStateTreePanel'],
    requires: ['Ext.ux.tree.ThreeStateView', 'Ext.selection.TreeModel', 'Ext.ux.tree.ThreeStateColumn', 'Ext.data.TreeStore'],
    viewType: 'threestateview',
    initComponent: function() {
        var me = this,
            cls = [me.treeCls],
            store = me.store,
            view;

        if (me.useArrows) {
            cls.push(me.arrowCls);
            me.lines = false;
        }

        if (me.lines) {
            cls.push(me.linesCls);
        } else if (!me.useArrows) {
            cls.push(me.noLinesCls);
        }

        if (Ext.isString(store)) {
            store = me.store = Ext.StoreMgr.lookup(store);
        } else if (!store || !store.isStore) {
            store = Ext.apply({
                type: 'tree',
                root: me.root,
                fields: me.fields,
                model: me.model,
                proxy: 'memory',
                folderSort: me.folderSort
            }, store);
            store = me.store = Ext.StoreMgr.lookup(store);
        } else if (me.root) {
            store = me.store = Ext.data.StoreManager.lookup(store);
            store.setRoot(me.root);
            if (me.folderSort !== undefined) {
                store.folderSort = me.folderSort;
                store.sort();
            }
        }

        // Store must have the same idea about root visibility as us BEFORE callParent binds it.
        store.setRootVisible(me.rootVisible);

        // If there is no rootnode defined, then create one.
        if (!store.getRoot()) {
            store.setRoot({});
        }

        me.viewConfig = Ext.apply({
            rootVisible: me.rootVisible,
            animate: me.enableAnimations,
            singleExpand: me.singleExpand,
            node: store.getRoot(),
            hideHeaders: me.hideHeaders
        }, me.viewConfig);

        // If the user specifies the headers collection manually then dont inject our own
        if (!me.columns) {
            if (me.initialConfig.hideHeaders === undefined) {
                me.hideHeaders = true;
            }
            me.addCls(me.autoWidthCls);
            me.columns = [{
                xtype    : 'threestatecolumn',
                text     : 'Name',
                flex     : 1,
                dataIndex: me.displayField         
            }];
        }

        if (me.cls) {
            cls.push(me.cls);
        }
        me.cls = cls.join(' ');

        me.callParent();

        // TreeModel has to know about the TreeStore so that pruneRemoved can work properly upon removal
        // of nodes.
        me.selModel.treeStore = me.store;

        view = me.getView();

        // Relay events from the TreeView.
        // An injected LockingView relays events from its locked side's View
        me.relayEvents(view, [
            /**
            * @event checkchange
            * Fires when a node with a checkbox's checked property changes
            * @param {Ext.data.TreeModel} node The node who's checked property was changed
            * @param {Boolean} checked The node's new checked state
            */
            'checkchange',
            /**
            * @event afteritemexpand
            * @inheritdoc Ext.tree.View#afteritemexpand
            */
            'afteritemexpand',
            /**
            * @event afteritemcollapse
            * @inheritdoc Ext.tree.View#afteritemcollapse
            */
            'afteritemcollapse'
        ]);
    },
    /**
     * [setChecked 由代码控制选中的时候调用该方法而不是用：rec.set("checked", true) 的方法，可以触发级联操作]
     * @param {[type]} record [Ext.data.TreeModel]
     */
    setChecked: function(record){
        this.getView().setChecked(record);
    }
});