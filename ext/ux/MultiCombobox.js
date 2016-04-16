Ext.define('Ext.ux.form.field.MultiComboBox', {
    extend:'Ext.form.field.ComboBox',

    xtype:'multicombo',

    multiSelect: true,
    editable: false,

    displayField: 'text',

    queryParam: 'query',

    defaultListConfig: {
        loadingHeight: 70,
        minWidth: 70,
        maxHeight: 300,
        shadow: 'sides'
    },

    checkboxCls: Ext.baseCSSPrefix + 'tree-checkbox',
    // checkedCls: Ext.baseCSSPrefix+"tree-checkbox-checked",


    initComponent: function() {
        var me = this;
        if (!me.tpl) {
            Ext.util.CSS.createStyleSheet("."+me.checkboxCls+"{top:8px;}.x-boundlist-selected ."+me.checkboxCls+" {background-position: 0 -15px;}","mutliCheckbox");
            if (!me.labelTpl) {
                me.labelTpl = '{' + me.displayField + '}';
            }
            me.labelTpl = me.getTpl('labelTpl');

            me.tpl = new Ext.XTemplate([
                '<tpl for=".">',
                    '<div class="x-boundlist-item multicombo-item">',
                    '<input type="button" {ariaCellCheckboxAttr}',
                    ' class="'+me.checkboxCls+'"/> ',
                    '{[this.getItemLabel(values)]}</div>',
                '</tpl>',
                {
                    getItemLabel: function(values) 
                    {
                        return me.labelTpl.apply(values);
                    }
                }
            ]);

        }
        me.callParent();
    }
});
