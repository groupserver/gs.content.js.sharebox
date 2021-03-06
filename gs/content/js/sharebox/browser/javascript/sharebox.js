'use strict';
// Sharing a link from GroupServer
//
// Copyright © 2013, 2014 OnlineGroups.net and Contributors.
// All Rights Reserved.
//
// This software is subject to the provisions of the Zope Public License,
// Version 2.1 (ZPL).  A copy of the ZPL should accompany this distribution.
// THIS SOFTWARE IS PROVIDED "AS IS" AND ANY AND ALL EXPRESS OR IMPLIED
// WARRANTIES ARE DISCLAIMED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
// WARRANTIES OF TITLE, MERCHANTABILITY, AGAINST INFRINGEMENT, AND FITNESS
// FOR A PARTICULAR PURPOSE.
//
jQuery.noConflict();

var GS_CONTENT_JS_SHAREBOX_DIALOG = 'gs-content-js-sharebox-dialog',
    GS_CONTENT_JS_SHAREBOX_COPY = GS_CONTENT_JS_SHAREBOX_DIALOG + '-copy';


function GSShareBox(link, isPublic) {
    // Private variables
    var button = null, url = null, title = null, public_widgets = null,
        copySupported = false,
        FB_URL = 'http://www.facebook.com/sharer.php?u={HREF}&t={TITLE}',
        FB_WIDGET = '<a class="fb-share dialog btn" data-icon="f" ' +
            'title="Share with Facebook" href="' + FB_URL + '"></a>',
        TWITTER_URL = 'http://www.twitter.com/home?status={TITLE}:+{HREF}',
        TWITTER_WIDGET = '<a class="twitter-share dialog btn" data-icon="t" ' +
            'title="Share with Twitter"' + 'href="' + TWITTER_URL + '"></a>',
         //DIGG_URL = 'http://digg.com/submit?url={HREF}&title={TITLE}',
         //DIGG_WIDGET = '<a class="digg-share dialog btn" '+
         //    'title="Share with Digg" href="' + DIGG_URL + '">D</a>',
         GP_URL = 'https://plus.google.com/share?url={HREF}',
         GP_WIDGET = '<a class="gp-share dialog btn" data-icon="g" ' +
             'title="Share with Google+" href="' + GP_URL + '"></a>';
    public_widgets = [FB_WIDGET, TWITTER_WIDGET, GP_WIDGET]; //, DIGG_WIDGET];
    // --=mpj17=-- Yes, the mailbox part of a mailto can be blank
    // http://www.ietf.org/rfc/rfc2368.txt
    //     EMAIL_URL = 'mailto:?Subject={TITLE}&body={HREF}',
    //     EMAIL_WIDGET = '<a class="email-share btn" title="Share by email"'+
    //         'href="' + EMAIL_URL + '">e</a>',
    //, EMAIL_WIDGET];

    // Private methods

    function copy_supported() {
        var retval = false;
        retval = document.queryCommandSupported('copy');
        if (retval) {
            // Check that the browser isn't Firefox pre-41
            try {
                document.execCommand('copy');
            } catch (e) {
                retval = false;
            }
        }
        return retval;
    }//copy_supported

    function get_url_widget(url) {
        var widget_html = '<div class="full-share">' +
            '<input class="full-share-input" type="text" value="' +
            url + '" readonly="0"/>',
            copyButton = null;

        if (copySupported) {
            copyButton =
                '<button title="Copy the URL to your clipboard" ' +
                'class="' + GS_CONTENT_JS_SHAREBOX_COPY + ' btn ' +
                'icon-alone">' +
                '<span aria-hidden="true" data-icon="&#x1f5cd;"></span>' +
                '<span class="screen-reader-text">Copy</span></button>';
            widget_html = widget_html + copyButton;
        }
        widget_html = widget_html + '</div>';
        return widget_html;
    }//get_url_widget

    function dialog_html() {
        var retval = null, i = 0, publicWidgetString = '', widgetString = '';

        if (isPublic) {
            for (i in public_widgets) {
                publicWidgetString = publicWidgetString + public_widgets[i];
            }
            publicWidgetString = publicWidgetString + '<span>or use</span>';
            widgetString =
                '<div class="gs-content-js-sharebox-dialog-widgets">' +
                '<p class="muted">Share with</p>' +
                '<div class="btn-toolbar ' +
                'gs-content-js-sharebox-dialog-widgets-public">' +
                publicWidgetString + '</div>' +
                '<div class="gs-content-js-sharebox-dialog-widgets-private">' +
                '<p class="muted">or use the <abbr title="Web link ' +
                '(uniform resource locator)">URL:</abbr></p>' +
                get_url_widget(url) + '</div>';
        } else { // Private
            widgetString =
                '<div class="gs-content-js-sharebox-dialog-widgets">' +
                '<p class="muted">Share with the ' +
                '<abbr title="Web link (uniform resource ' +
                'locator)">URL:</abbr></p>' + get_url_widget(url) + '</div>';
        }

        widgetString = widgetString.replace(/{HREF}/g, url);
        widgetString = widgetString.replace(/{TITLE}/g, title);

        retval = '<div class="' + GS_CONTENT_JS_SHAREBOX_DIALOG + '">' +
            widgetString + '</div>';

        return retval;
    }//dialog_html


    function create_buttons(event) {
        var littleButton = null, buttonUrl = null, dialog = null, input = null;

        dialog = button.next('.popover');
        dialog.find('a.dialog').each(function() {
            littleButton = jQuery(this);
            buttonUrl = littleButton.attr('href');
            littleButton.removeAttr('href');
            littleButton.data('url', buttonUrl);
            littleButton.click(dialog_share);
        });

        if (copySupported) {
            littleButton = dialog.find('.' + GS_CONTENT_JS_SHAREBOX_COPY)
                .first();
            input = dialog.find('.full-share-input').first();
            littleButton.click(function(event) {
                event.preventDefault(); // ?
                input.select();
                document.execCommand('copy');
            });
        }
    }//create_buttons


    function dialog_share(event) {
        var shareButton = null, shareUrl = null, newWindow = null;

        shareButton = jQuery(this);
        shareUrl = shareButton.data('url');
        button.popover('hide');

        // 37u x 23u
        newWindow = window.open(shareUrl, 'gs-content-js-sharebox-window',
                                'height=414,width=666');
        if (window.focus) {
            newWindow.focus();
        }
        return false;
    }//dialog_share

    function setup() {
        var popoverOptions = {amimation: true, html: true, placement: 'bottom',
                              trigger: 'click', content: dialog_html};
        copySupported = copy_supported();

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
        init: function() {
        }// init
    }; // Public
}//GSShareBox
