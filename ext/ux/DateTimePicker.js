Ext.define('Yun.picker.DateTime', {
    extend: 'Ext.picker.Date',
    alias: 'widget.dateptimeicker',
    okText:'确定',
    okTip:'确定',
    renderTpl: [
         '<div id="{id}-innerEl" data-ref="innerEl" role="grid">',
            '<div role="presentation" class="{baseCls}-header">',
                '<a id="{id}-prevEl" data-ref="prevEl" class="{baseCls}-prev {baseCls}-arrow" role="button" title="{prevText}" hidefocus="on" ></a>',
                '<div id="{id}-middleBtnEl" data-ref="middleBtnEl" class="{baseCls}-month">{%this.renderMonthBtn(values, out)%}</div>',
                '<a id="{id}-nextEl" data-ref="nextEl" class="{baseCls}-next {baseCls}-arrow" role="button" title="{nextText}" hidefocus="on" ></a>',
            '</div>',
            '<table id="{id}-eventEl" data-ref="eventEl" class="{baseCls}-inner" cellspacing="0" role="grid">',
                '<thead role="presentation"><tr role="row">',
                    '<tpl for="dayNames">',
                        '<th role="columnheader" class="{parent.baseCls}-column-header" title="{.}">',
                            '<div class="{parent.baseCls}-column-header-inner">{.:this.firstInitial}</div>',
                        '</th>',
                    '</tpl>',
                '</tr></thead>',
                '<tbody role="presentation"><tr role="row">',
                    '<tpl for="days">',
                        '{#:this.isEndOfWeek}',
                        '<td role="gridcell" id="{[Ext.id()]}">',
                            '<a href="#" role="button" hidefocus="on" class="{parent.baseCls}-date"></a>',
                        '</td>',
                    '</tpl>',
                '</tr></tbody>',
            '</table>',
            '<table id="{id}-timeEl" style="table-layout:auto;width:auto;margin:0 3px;" class="x-datepicker-inner" cellspacing="0">',
                '<tbody><tr>',
                    '<td>{%this.renderHourBtn(values,out)%}</td>',
                    '<td>{%this.renderMinuteBtn(values,out)%}</td>',
                    '<td>{%this.renderSecondBtn(values,out)%}</td>',
                '</tr></tbody>',
            '</table>',
            '<tpl if="showToday">',
                '<div id="{id}-footerEl" data-ref="footerEl" role="presentation" class="{baseCls}-footer">{%this.renderTodayBtn(values, out)%}</div>',
            '</tpl>',
        '</div>',
        {
            firstInitial: function(value) {
            	//本地化有问题，暂时这么做
            	var dayNames={"Sunday":"日", "Monday":"一", "Tuesday":"二", "Wednesday":"三", "Thursday":"四", "Friday":"五", "Saturday":"六"};
                return dayNames[value];
            },
            isEndOfWeek: function(value) {
                value--;
                var end = value % 7 === 0 && value !== 0;
                return end ? '</tr><tr role="row">' : '';
            },
            renderTodayBtn: function(values, out) {
                Ext.DomHelper.generateMarkup(values.$comp.todayBtn.getRenderTree(), out);
            },
            renderMonthBtn: function(values, out) {
                Ext.DomHelper.generateMarkup(values.$comp.monthBtn.getRenderTree(), out);
            },

            renderHourBtn: function(values, out) {
                Ext.DomHelper.generateMarkup(values.$comp.hourBtn.getRenderTree(), out);
            },
            renderMinuteBtn: function(values, out) {
                Ext.DomHelper.generateMarkup(values.$comp.minuteBtn.getRenderTree(), out);
            },
            renderSecondBtn: function(values, out) {
                Ext.DomHelper.generateMarkup(values.$comp.secondBtn.getRenderTree(), out);
            }/*,
            renderOkBtn: function(values, out) {
                Ext.DomHelper.generateMarkup(values.$comp.okBtn.getRenderTree(), out);
            }*/
        }
    ],

    beforeRender: function () {
        var me = this,_$Number=Ext.form.field.Number;
        me.hourBtn=new _$Number({
            minValue:0,
            maxValue:23,
            step:1,
            width:55
        });
        me.minuteBtn=new _$Number({
            minValue:0,
            maxValue:59,
            step:1,
            width:70,
            labelWidth:10,
            fieldLabel:'&nbsp;'
        });
        me.secondBtn=new _$Number({
            minValue:0,
            maxValue:59,
            step:1,
            width:70,
            labelWidth:10,
            fieldLabel:'&nbsp;'
        });

        // me.okBtn = new Ext.button.Button({
        //     ownerCt: me,
        //     ownerLayout: me.getComponentLayout(),
        //     text: me.okText,
        //     tooltip: me.okTip,
        //     tooltipType:'title',
        //     handler:me.okHandler,
        //     scope: me
        // });
        me.callParent();
    },
    
    finishRenderChildren: function () {
        var me = this;
        me.hourBtn.finishRender();
        me.minuteBtn.finishRender();
        me.secondBtn.finishRender();
        // me.okBtn.finishRender();
        me.callParent();
    },

    okHandler : function(){
        var me = this;
        //     btn = me.okBtn;

        // if(btn && !btn.disabled){
        //     me.setValue(this.getValue());
        //     me.fireEvent('select', me, me.value);
        //     me.onSelect();
        // }
        return me;
    },
    selectedUpdate: function(date){
        this.callParent([Ext.Date.clearTime(date,true)]);
    },
    update : function(date, forceRefresh){
        var me = this;
        me.hourBtn.setValue(date.getHours());
        me.minuteBtn.setValue(date.getMinutes());
        me.secondBtn.setValue(date.getSeconds());

        return this.callParent(arguments);
    },
    setValue : function(date, isfixed){
        var me = this;
        if(isfixed!==true){
            date.setHours(me.hourBtn.getValue());
            date.setMinutes(me.minuteBtn.getValue());
            date.setSeconds(me.secondBtn.getValue());
        }
        me.value=date;
        me.update(me.value);
        return me;
    },
    // @private
    beforeDestroy : function() {
        var me = this;

        if (me.rendered) {
            Ext.destroy(
                me.hourBtn,
                me.minuteBtn,
                me.secondBtn/*,
                me.okBtn*/
            );
        }
        me.callParent();
    }
},
function() {
    var proto = this.prototype,
        date = Ext.Date;

    proto.monthNames = date.monthNames;
    proto.dayNames   = date.dayNames;
    proto.format     = date.defaultFormat;
});
Ext.define('Yun.form.field.DateTime', {  
    extend:'Ext.form.field.Date',  
    alias: 'widget.datetimefield',  
    requires: ['Yun.picker.DateTime'],  
  
    format : "Y-m-d H:i:s",  
   
    altFormats : "Y-m-d H:i:s",  
  
    createPicker: function() {  
        var me = this,  
            format = Ext.String.format;  
  
        return new Yun.picker.DateTime({  
            pickerField: me,  
            ownerCt: me.ownerCt,  
            renderTo: document.body,  
            floating: true,  
            hidden: true,  
            focusOnShow: true,  
            minDate: me.minValue,  
            maxDate: me.maxValue,  
            disabledDatesRE: me.disabledDatesRE,  
            disabledDatesText: me.disabledDatesText,  
            disabledDays: me.disabledDays,  
            disabledDaysText: me.disabledDaysText,  
            format: me.format,  
            showToday: me.showToday,  
            startDay: me.startDay,  
            minText: format(me.minText, me.formatDate(me.minValue)),  
            maxText: format(me.maxText, me.formatDate(me.maxValue)),  
            listeners: {  
                scope: me,  
                select: me.onSelect  
            },  
            keyNavConfig: {  
                esc: function() {  
                    me.collapse();  
                }  
            }  
        });  
    },  
  
    /** 
     * @private 
     */  
    onExpand: function() {  
        var value = this.getValue();  
        this.picker.setValue(Ext.isDate(value) ? value : new Date(), true);  
    }  
});  