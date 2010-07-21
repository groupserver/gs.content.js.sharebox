// Code to power a very simple slide down widget, for sharing a URL, for example
// a post.

sharewidget = '<span class="share-links"> \
                 <strong>Share:</strong> \
                 <a class="fb-link" title="Share on Facebook" \
                    onclick="javascript:fb_popup(\'http://www.facebook.com/sharer.php?u={HREF}&t={TITLE}\')">&#160;</a> \
                 <span class="email-link" title="A short link to this post">&#160;</span> \
               </span> \
               <div class="full-link"> \
                 <p class="full-link-box-help">You may copy and paste the link below into an email to link to this post:</p> \
                 <input class="full-link-input" type="text" value="{HREF}" readonly="0"/> \
               </div>';

jQuery.noConflict();

jQuery(document).ready ( function() {
  jQuery('.share-bar').each(function() {
    var href = jQuery(this).attr('href')
    var title = jQuery(this).attr('title')
    sharewidget = sharewidget.replace(/{HREF}/g, href);
    sharewidget = sharewidget.replace(/{TITLE}/g, title);
    jQuery(this).html(sharewidget);
  });
  jQuery('.email-link').each(function() {
    jQuery(this).click(function() {
      fullLink = jQuery(this).parents('.share-bar').find('.full-link');
      if (fullLink.is(":hidden")) {
        fullLink.slideDown("slow");
      } else {
        fullLink.slideUp("slow");
      }
    });
  });
});


function fb_popup(url) {
	newwindow=window.open(url,'name','height=200,width=550');
	if (window.focus) {newwindow.focus()}
	return false;
}


