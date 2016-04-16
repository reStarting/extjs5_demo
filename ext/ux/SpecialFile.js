Ext.define('Ext.form.field.SpecialFile', {
    extend: 'Ext.form.field.Trigger',
    alias: ['widget.specialfilefield', 'widget.specialfileuploadfield'],
    alternateClassName: ['Ext.form.FileUploadField', 'Ext.ux.form.FileUploadField', 'Ext.form.File'],
    requires: [
        'Ext.form.field.FileButton'
    ],

    /**
     * @cfg {String} buttonText
     * The button text to display on the upload button. Note that if you supply a value for
     * {@link #buttonConfig}, the buttonConfig.text value will be used instead if available.
     */
    buttonText: 'Browse...',
    //</locale>

    /**
     * @cfg {Boolean} buttonOnly
     * True to display the file upload field as a button with no visible text field. If true, all
     * inherited Text members will still be available.
     */
    buttonOnly: false,

    /**
     * @cfg {Number} buttonMargin
     * The number of pixels of space reserved between the button and the text field. Note that this only
     * applies if {@link #buttonOnly} = false.
     */
    buttonMargin: 3,
    
    /**
     * @cfg {Boolean} clearOnSubmit
     * True to clear the selected file value when the form this field belongs to
     * is submitted to the server.
     */
    clearOnSubmit: true,

    /**
     * @cfg {Object} buttonConfig
     * A standard {@link Ext.button.Button} config object.
     */

    /**
     * @event change
     * Fires when the underlying file input field's value has changed from the user selecting a new file from the system
     * file selection dialog.
     * @param {Ext.ux.form.FileUploadField} this
     * @param {String} value The file value returned by the underlying file input field
     */

    /**
     * @property {Ext.Element} fileInputEl
     * A reference to the invisible file input element created for this upload field. Only populated after this
     * component is rendered.
     */

    /**
     * @property {Ext.button.Button} button
     * A reference to the trigger Button component created for this upload field. Only populated after this component is
     * rendered.
     */


    // private
    extraFieldBodyCls: Ext.baseCSSPrefix + 'form-file-wrap',

    /**
     * @cfg {Boolean} readOnly
     * Unlike with other form fields, the readOnly config defaults to true in File field.
     */
    readOnly: true,

    /**
     * Do not show hand pointer over text field since file choose dialog is only shown when clicking in the button
     * @private
     */
    triggerNoEditCls: '',

    // private
    componentLayout: 'triggerfield',

    // private. Extract the file element, button outer element, and button active element.
    childEls: ['browseButtonWrap'],

    // private
    onRender: function() {
        var me = this,
            id = me.id,
            inputEl;
        me.callParent(arguments);

        inputEl = me.inputEl;
        inputEl.dom.name = ''; //name goes on the fileInput, not the text input

        // render the button here. This isn't ideal, however it will be 
        // rendered before layouts are resumed, also we modify the DOM
        // below anyway
        me.button = new Ext.form.field.FileButton(Ext.apply({
            renderTo: id + '-browseButtonWrap',
            ownerCt: me,
            ownerLayout: me.componentLayout,
            id: id + '-button',
            ui: me.ui,
            disabled: me.disabled,
            text: me.buttonText,
            style: me.buttonOnly ? '' : me.getButtonMarginProp() + me.buttonMargin + 'px',
            inputName: me.getName(),
            listeners: {
                scope: me,
                change: me.onFileChange
            }
        }, me.buttonConfig));
        me.fileInputEl = me.button.fileInputEl;

        if (me.buttonOnly) {
            me.inputCell.setDisplayed(false);
        }

        // Ensure the trigger cell is sized correctly upon render
        me.browseButtonWrap.dom.style.width = (me.browseButtonWrap.dom.lastChild.offsetWidth + me.button.getEl().getMargin('lr')) + 'px';
        if (Ext.isIE) {
            me.button.getEl().repaint();
        }
    },

    /**
     * Gets the markup to be inserted into the subTplMarkup.
     */
    getTriggerMarkup: function() {
        return '<td id="' + this.id + '-browseButtonWrap"></td>';
    },

    /**
     * @private Event handler fired when the user selects a file.
     */
    onFileChange: function(button, e, value) {
        this.lastValue = null; // force change event to get fired even if the user selects a file with the same name
        Ext.form.field.File.superclass.setValue.call(this, value);
    },

    /**
     * Overridden to do nothing
     * @method
     */
    setValue: function(value){
    	var me = this;
    	if(value == undefined)return;
    	if(me.rendered)
    	{
    		me.inputEl.dom.value = value;
    		Ext.form.field.File.superclass.setValue.call(this, value);
    	}
    },
    getValue: function(){
    	var me = this;
    	return me.inputEl.dom.value || "";
    },

    
    reset : function(){
        var me = this,
            clear = me.clearOnSubmit;
        if (me.rendered) {
            me.button.reset(clear);
            me.fileInputEl = me.button.fileInputEl;
            if (clear) {
                me.inputEl.dom.value = '';
            }
        }
        me.callParent();
    },
    
    onShow: function(){
        this.callParent();
        // If we started out hidden, the button may have a messed up layout
        // since we don't act like a container
        this.button.updateLayout();    
    },

    onDisable: function(){
        this.callParent();
        this.button.disable();
    },

    onEnable: function(){
        this.callParent();
        this.button.enable();
    },

    isFileUpload: function() {
        return true;
    },

    extractFileInput: function() {
        var fileInput = this.button.fileInputEl.dom;
        this.reset();
        return fileInput;
    },
    
    restoreInput: function(el) {
        var button = this.button;
        button.restoreInput(el);
        this.fileInputEl = button.fileInputEl;
    },

    onDestroy: function(){
        Ext.destroyMembers(this, 'button');
        delete this.fileInputEl;
        this.callParent();
    },

    getButtonMarginProp: function() {
        return 'margin-left:';
    }
});