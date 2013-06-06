// Sharing a link from GroupServer
jQuery.noConflict();

var GS_CONTENT_JS_SHAREBOX_DIALOG_CLASS = 'gs-content-js-sharebox-dialog';


function GSShareBox(link, isPublic) {
    // Private variables
    var button = null, url = null, title = null, public_widgets = null,
        FB_URL = 'http://www.facebook.com/sharer.php?u={HREF}&t={TITLE}',
        FB_WIDGET = '<a class="fb-share dialog btn" data-icon="f" '+
            'title="Share on Facebook" href="' + FB_URL + '"></a>',
        TWITTER_URL = 'http://www.twitter.com/home?status={TITLE}:+{HREF}',
        TWITTER_WIDGET = '<a class="twitter-share dialog btn" data-icon="t" '+
            'title="Share on Twitter"' + 'href="' + TWITTER_URL + '"></a>',
         //DIGG_URL = 'http://digg.com/submit?url={HREF}&title={TITLE}',
         //DIGG_WIDGET = '<a class="digg-share dialog btn" '+
         //    'title="Share on Digg" href="' + DIGG_URL + '">D</a>',
         GP_URL = 'https://plus.google.com/share?url={HREF}',
         GP_WIDGET = '<a class="gp-share dialog btn" data-icon="g" '+
             'title="Share on Google+" href="' + GP_URL + '"></a>',
         URL_WIDGET = '<div class="full-share">'+
             '<p class="full-share-help muted">or use the '+ 
              '<abbr title="Uniform Resource Locator"'+
                    'class="initialism">URL</abbr>:'+
             '</p> <div class="full-share-entry">'+
             '<input class="full-share-input" type="text" value="{HREF}"'+
             'readonly="0"/></div></div>';
    public_widgets = [FB_WIDGET, TWITTER_WIDGET, GP_WIDGET]; //, DIGG_WIDGET];
    // --=mpj17=-- Yes, the mailbox part of a mailto can be blank
    // http://www.ietf.org/rfc/rfc2368.txt
    //     EMAIL_URL = 'mailto:?Subject={TITLE}&body={HREF}',
    //     EMAIL_WIDGET = '<a class="email-share btn" title="Share by email"'+
    //         'href="' + EMAIL_URL + '">e</a>',
    //, EMAIL_WIDGET];

    // Private methods

    function dialog_html() {
        var retval = null, privateWidgets = [URL_WIDGET], i = 0, 
            privateWidgetString = '', publicWidgetString = '',
            widgetString = '';

        if (isPublic) {
            for (i in public_widgets) {
                publicWidgetString = publicWidgetString + public_widgets[i];
            }
        }
        for (i in privateWidgets) {
            privateWidgetString = privateWidgetString + privateWidgets[i];
        }

        widgetString = '<div class="gs-content-js-sharebox-dialog-widgets">' +
            '<p class="muted">Share with</p>'+
            '<div class="btn-toolbar gs-content-js-sharebox-dialog-widgets-public">' +
            publicWidgetString + '</div>' +
            '<div class="gs-content-js-sharebox-dialog-widgets-private">' + 
            privateWidgetString + '</div>';
        widgetString = widgetString.replace(/{HREF}/g, url);
        widgetString = widgetString.replace(/{TITLE}/g, title);

        retval = '<div class="' + GS_CONTENT_JS_SHAREBOX_DIALOG_CLASS + '">' + 
            widgetString + '</div>';
        
        return retval;
    };//dialog_html


    function create_buttons(event) {
        var littleButton = null, buttonUrl = null, dialog = null;

        dialog = button.next('.popover');
        dialog.find('a.dialog').each(function(){
            littleButton = jQuery(this);
            buttonUrl = littleButton.attr('href');
            littleButton.removeAttr('href');
            littleButton.data('url', buttonUrl);
            littleButton.click(dialog_share);
        });
    };//create_buttons


    function dialog_share(event) {
        var shareButton = null, shareUrl = null, newWindow = null;

        shareButton = jQuery(this);
        shareUrl = shareButton.data('url');
        button.popover("hide");

        // 37u x 23u
        newWindow = window.open(shareUrl, 'gs-content-js-sharebox-window',
                                'height=414,width=666');
        if (window.focus) {
            newWindow.focus()
        }
        return false;
    };

    function setup() {
        var popoverOptions = {amimation: true, html: true, placement: 'bottom',
                              trigger: 'click', content: dialog_html}
        button = jQuery(link);
        url = button.attr('href');
        button.removeAttr('href');
        title = button.attr('title');
        popoverOptions['title'] = 'Share ' + title;
        button.popover(popoverOptions);
        button.on('click', create_buttons);
    }//setup
    setup();//Run on startup

    // Public
    return {
        publicWidgets: public_widgets,
        init: function () {
        }// init
    }; // Public
};//GSShareBox
