"use strict";jQuery.noConflict();var GS_CONTENT_JS_SHAREBOX_DIALOG_CLASS="gs-content-js-sharebox-dialog";
function GSShareBox(n,q){var g=null,a=null,p=null,j=null,e="http://www.facebook.com/sharer.php?u={HREF}&t={TITLE}",f='<a class="fb-share dialog btn" data-icon="f" title="Share with Facebook" href="'+e+'"></a>',o="http://www.twitter.com/home?status={TITLE}:+{HREF}",c='<a class="twitter-share dialog btn" data-icon="t" title="Share with Twitter"href="'+o+'"></a>',h="https://plus.google.com/share?url={HREF}",b='<a class="gp-share dialog btn" data-icon="g" title="Share with Google+" href="'+h+'"></a>',l='<div class="full-share"><input class="full-share-input" type="text" value="{HREF}"readonly="0"/></div>';
j=[f,c,b];function k(){var r=null,u=[l],s=0,t="",w="",v="";for(s in u){t=t+u[s]}if(q){for(s in j){w=w+j[s]
}w=w+"<span>or use</span>";v='<div class="gs-content-js-sharebox-dialog-widgets"><p class="muted">Share with</p><div class="btn-toolbar gs-content-js-sharebox-dialog-widgets-public">'+w+'</div><div class="gs-content-js-sharebox-dialog-widgets-private"><p class="muted">or use the <abbr title="Web link (uniform resource locator)">URL:</abbr></p>'+t+"</div>"
}else{v='<div class="gs-content-js-sharebox-dialog-widgets"><p class="muted">Share with the <abbr title="Web link (uniform resource locator)">URL:</abbr></p>'+t+"</div>"
}v=v.replace(/{HREF}/g,a);v=v.replace(/{TITLE}/g,p);r='<div class="'+GS_CONTENT_JS_SHAREBOX_DIALOG_CLASS+'">'+v+"</div>";
return r}function m(t){var r=null,u=null,s=null;s=g.next(".popover");s.find("a.dialog").each(function(){r=jQuery(this);
u=r.attr("href");r.removeAttr("href");r.data("url",u);r.click(i)})}function i(r){var u=null,t=null,s=null;
u=jQuery(this);t=u.data("url");g.popover("hide");s=window.open(t,"gs-content-js-sharebox-window","height=414,width=666");
if(window.focus){s.focus()}return false}function d(){var r={amimation:true,html:true,placement:"bottom",trigger:"click",content:k};
g=jQuery(n);a=g.attr("href");g.removeAttr("href");p=g.attr("title");r.title="Share "+p;
g.popover(r);g.on("click",m)}d();return{publicWidgets:j,init:function(){}}};