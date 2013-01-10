// Sharing a link from GroupServer
jQuery.noConflict();

var GS_CONTENT_JS_SHAREBOX_DIALOG_CLASS = 'gs-content-js-sharebox-dialog';


var GSShareBox = function (link, isPublic) {
    // Private variables
    var button = null;
    var dialog = null;
    var url = null;
    var title = null;

    var FB_URL = 'http://www.facebook.com/sharer.php?u={HREF}&t={TITLE}';
    var FB_WIDGET = '<a class="fb-share dialog button" '+
        'title="Share on Facebook" href="' + FB_URL + '">f</a>';

    var TWITTER_URL = 'http://www.twitter.com/home?status={TITLE}:+{HREF}';
    var TWITTER_WIDGET = '<a class="twitter-share dialog button" ' +
        'title="Share on Twitter"' + 'href="' + TWITTER_URL + '">t</a>';

    var DIGG_URL = 'http://digg.com/submit?url={HREF}&title={TITLE}';
    var DIGG_WIDGET = '<a class="digg-share dialog button" '+
        'title="Share on Digg" href="' + DIGG_URL + '">D</a>';
    
    var GP_URL = 'https://plus.google.com/share?url={HREF}';
    var GP_WIDGET = '<a class="gp-share dialog button" '+
        'title="Share on Google+" href="' + GP_URL + '">G+</a>';

    // --=mpj17=-- Yes, the mailbox part of a mailto can be blank
    // http://www.ietf.org/rfc/rfc2368.txt
    var EMAIL_URL = 'mailto:?Subject={TITLE}&body={HREF}';
    var EMAIL_WIDGET = '<a class="email-share button" title="Share by email"'+
        'href="' + EMAIL_URL + '">e</a>';

    var public_widgets = [FB_WIDGET, TWITTER_WIDGET, GP_WIDGET, DIGG_WIDGET]
    //, EMAIL_WIDGET];

   var URL_WIDGET = '<div class="full-share">'+
        '<p class="full-share-help">Link to this by copy/pasting the '+
        'URL below into an email:</p> <div class="full-share-entry">'+
        '<input class="full-share-input" type="text" value="{HREF}"'+
        'readonly="0"/></div></div>';
    
    var buttonOptions = {disabled: false, 
                         icons: {primary: 'ui-icon-arrowreturnthick-1-w', 
                                 secondary: null},
                         label: null, text: true };

    // We set the width of the dialog so we know how wide it is without 
    // rendering it.
    var DIALOG_WIDTH = 306; // 17u
    var EFFECT = {effect: "fade", duration: "slow", }
    var dialogOptions = {autoOpen: false, closeOnEscape: true, 
                         draggable: false, hide: EFFECT, modal: false, 
                         resizable: true, show: EFFECT, width: DIALOG_WIDTH};


    // Private methods


    var popup_dialog = function(event, data) {
        var offset = null;
        var position = null;
        var cx = null;

        if ( dialog == null ) {
            dialog = button.after(dialog_html).next();
            dialog.dialog(dialogOptions);
            dialog.dialog("option", "title", 'Share ' + title);

            cx = jQuery(window).width() / 2;
            if ( button.offset().left <= cx ) {
                position = {my: "left top",
                            at: "left bottom",
                            of: button};
            } else {
                position = {my: "right top",
                            at: "right bottom",
                            of: button};
            }
            dialog.dialog("option", "position", position);

            create_buttons();
        }
        if (dialog.dialog("isOpen")) {
            dialog.dialog("close");
        } else {
            dialog.dialog("open");
        }
    };//popup_dialog


    var dialog_html = function () {
        var retval = null;
        var privateWidgets = [URL_WIDGET];
        var i = 0;
        var privateWidgetString = '';
        var publicWidgetString = '';
        var widgetString = '';

        if (isPublic) {
            for (i in public_widgets) {
                publicWidgetString = publicWidgetString + public_widgets[i];
            }
        }
        for (i in privateWidgets) {
            privateWidgetString = privateWidgetString + privateWidgets[i];
        }

        widgetString = '<div class="gs-content-js-sharebox-dialog-widgets">' +
            '<div class="gs-content-js-sharebox-dialog-widgets-public">' + 
            publicWidgetString + '</div>' +
            '<div class="gs-content-js-sharebox-dialog-widgets-private">' + 
            privateWidgetString + '</div>'
        widgetString = widgetString.replace(/{HREF}/g, url);
        widgetString = widgetString.replace(/{TITLE}/g, title);

        retval = '<div class="' + GS_CONTENT_JS_SHAREBOX_DIALOG_CLASS +
            '" style="display:none;">' + widgetString + '</div>'
        return retval;
    };//dialog_html


    var create_buttons = function() {
        var buttons = null;
        var button = null;
        var i = 0;
        var buttonUrl = null;

        dialog.find('a.button').each(function(){jQuery(this).button()});
        dialog.find('a.dialog').each(function(){
            button = jQuery(this);
            buttonUrl = button.attr('href');
            button.removeAttr('href');
            button.data('url', buttonUrl);
            button.click(dialog_share);
        });
    };//create_buttons


    var dialog_share = function(event) {
        var shareButton = null;
        var shareUrl = null;
        var newWindow = null;

        shareButton = jQuery(this);
        shareUrl = shareButton.data('url');
        dialog.dialog("close");

        // 37u x 23u
        newWindow = window.open(shareUrl, 'gs-content-js-sharebox-window',
                                'height=414,width=666');
        if (window.focus) {
            newWindow.focus()
        }
        return false;
    };


    var setup = function () {
        button = jQuery(link);
        url = button.attr('href');
        button.removeAttr('href');
        title = button.attr('title');
    }();//setup **Note** the () is deliberate so this function is run.


    // Public


    return {
        publicWidgets: public_widgets,
        init: function () {
            button.button(buttonOptions);
            button.click(popup_dialog);
        }// init
    }; // Public
};//GSShareBox
