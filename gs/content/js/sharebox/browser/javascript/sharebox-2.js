// Sharing a link from GroupServer
jQuery.noConflict();

var GS_CONTENT_JS_SHAREBOX_DIALOG_CLASS = 'gs-content-js-sharebox-dialog';


var gs_content_js_sharebox_popup = function(url) {
    var dialog = null;
    var newWindow = null;

    dialog = jQuery(this).parents('.'+GS_CONTENT_JS_SHAREBOX_DIALOG_CLASS)[0];
    dialog.dialog("close");

    newWindow = window.open(url, 'name', 'height=414,width=666');// 37u x 23u
    if (window.focus) {
        newWindow.focus()
    }
    return false;
}


var GSShareBox = function (link, isPublic) {
    // Private variables
    var button = null;
    var dialog = null;
    var url = null;
    var title = null;

    var FB_URL = 'http://www.facebook.com/sharer.php?u={HREF}&t={TITLE}';
    var FB_WIDGET = '<a class="fb-share" title="Share on Facebook" '+
        'onclick="javascript:gs_content_js_sharebox_popup(\'' + FB_URL + 
        '\')">&#160;</a>';

    var TWITTER_URL = 'http://www.twitter.com/home?status={TITLE}:+{HREF}';
    var TWITTER_WIDGET = '<a class="twitter-share" title="Share on Twitter"' +
        'onclick="javascript:gs_content_js_sharebox_popup(\'' + TWITTER_URL +
        '\')">&#160;</a>';

    var DIGG_URL = 'http://digg.com/submit?url={HREF}&title={TITLE}';
    var DIGG_WIDGET = '<a class="digg-share" title="Share on Digg" '+
        'onclick="javascript:gs_content_js_sharebox_popup(\'' + DIGG_URL + 
        '\')">&#160;</a>';

    // --=mpj17=-- Yes, the mailbox part of a mailto can be blank
    // http://www.ietf.org/rfc/rfc2368.txt
    var EMAIL_URL = 'mailto:?Subject={TITLE}&body={HREF}';
    var EMAIL_WIDGET = '<a class="email-share" title="Share by email"'+
        'href="' + EMAIL_URL + '">&#160;</a>';

   var URL_WIDGET = '<div class="full-share">'+
        '<p class="full-share-box-help">Link to this by copy/pasting the '+
        'URL below into an email:</p> '+
        '<input class="full-share-input" type="text" value="{HREF}"'+
        'readonly="0"/></div>';

    var buttonOptions = {disabled: false, 
                         icons {primary: 'ui-arrowreturnthick-1-w', 
                                secondary: null},
                         label: null, text: true, };
    var dialogOptions = {autoOpen: false, closeOnEscape: true, 
                         draggable: false, modal: false, resizable: true};

    // Private methods


    var dialog_html = function () {
        var retval = null;
        var shareWidgets = [URL_WIDGET];
        var i = 0;
        var widgetsString = '';

        if (isPublic) {
            shareWidgets = publicWidgets.concat(shareWidgets);
        }
        
        for (i in shareWidgets) {
            widgetsString = widgetsString + shareWidgets[i];
        }
        widgetString = widgetString.replace(/{HREF}/g, url);
        widgetString = widgetString.replace(/{TITLE}/g, title);

        retval = '<div class="' + GS_CONTENT_JS_SHAREBOX_DIALOG_CLASS '"' +
            'style="display:none;">' + widgetString + '</div>'
        return retval;
    };


    var popup_dialog = function(event, data) {
        if ( dialog == null ) {
            dialog = button.after(dialog_html);
            dialog.dialog(dialogOptions);
        }
        dialog.dialog("open");
    };

    // Public
    return {
        publicWidgets: [FB_WIDGET, TWITTER_WIDGET, DIGG_WIEGET, EMAIL_WIDGET],
        init: function () {
            button = jQuery(link);
            url = button.attr('href');
            button.removeAttr('href');
            title = button.attr('title');
            button.button(buttonOptions);

            button.click(popup_dialog);
        },// init
    }; // Public
};
