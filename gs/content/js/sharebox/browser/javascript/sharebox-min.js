jQuery.noConflict();var GS_CONTENT_JS_SHAREBOX_DIALOG_CLASS="gs-content-js-sharebox-dialog";
function GSShareBox(i,j){var a=null,f=null,s=null,g=null,b="http://www.facebook.com/sharer.php?u={HREF}&t={TITLE}",d='<a class="fb-share dialog btn" title="Share on Facebook" href="'+b+'">f</a>',q="http://www.twitter.com/home?status={TITLE}:+{HREF}",n='<a class="twitter-share dialog btn" title="Share on Twitter"href="'+q+'">t</a>',k="http://digg.com/submit?url={HREF}&title={TITLE}",r='<a class="digg-share dialog btn" title="Share on Digg" href="'+k+'">D</a>',p="https://plus.google.com/share?url={HREF}",e='<a class="gp-share dialog btn" title="Share on Google+" href="'+p+'">G+</a>',m='<div class="full-share"><p class="full-share-help">Link to this by copy/pasting the URL below into an email:</p> <div class="full-share-entry"><input class="full-share-input" type="text" value="{HREF}"readonly="0"/></div></div>';
g=[d,n,e,r];function h(){var t=null,w=[m],u=0,v="",y="",x="";if(j){for(u in g){y=y+g[u]
}}for(u in w){v=v+w[u]}x='<div class="gs-content-js-sharebox-dialog-widgets"><div class="btn-toolbar gs-content-js-sharebox-dialog-widgets-public">'+y+'</div><div class="gs-content-js-sharebox-dialog-widgets-private">'+v+"</div>";
x=x.replace(/{HREF}/g,f);x=x.replace(/{TITLE}/g,s);t='<div class="'+GS_CONTENT_JS_SHAREBOX_DIALOG_CLASS+'">'+x+"</div>";
return t}function o(v){var t=null,w=null,u=null;u=a.next(".popover");u.find("a.dialog").each(function(){t=jQuery(this);
w=t.attr("href");t.removeAttr("href");t.data("url",w);t.click(c)})}function c(t){var w=null,v=null,u=null;
w=jQuery(this);v=w.data("url");a.popover("hide");u=window.open(v,"gs-content-js-sharebox-window","height=414,width=666");
if(window.focus){u.focus()}return false}function l(){var t={amimation:true,html:true,placement:"bottom",trigger:"click",content:h};
a=jQuery(i);f=a.attr("href");a.removeAttr("href");s=a.attr("title");t.title="Share "+s;
a.popover(t);a.on("click",o)}l();return{publicWidgets:g,init:function(){}}};