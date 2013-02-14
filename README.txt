Introduction
============

This product provide the *Share* dialog_ for GroupServer_. It provides a
JavaScript_ resource that allows a URL to be shared across many social
media networks.

Dialog
======

The dialog is a `jQuery.UI`_ dialog. It is divided in two parts.

*  The first part is a list of *buttons* for various social media services
   (currently Facebook_, Twitter_, `Google+`_, and Digg_). These buttons
   are available when the resource being shared is visible to the *public*
   (an anonymous viewer).

* The second part is an ``input`` element, with the URL in it. This allows
  people to copy and paste the URL into anything. It is always available
  (but the recipient must have permission to view the URL).

JavaScript
==========

The JavaScript for the *Share* dialog is contained in a resource::

  <script type="text/javascript"
    src="/++resource++gs-content-js-sharebox-20130114.js">&#160;</script>

Or a minified version::

  <script type="text/javascript"
    src="/++resource++gs-content-js-sharebox-min-20130114.js">&#160;</script>

Within the document the links to be shared need a ``title`` attribute and
an ``href`` attribute. The content of the link-element will become the
button text. For example, the following will create a button to share the
link to the example group::

  <a class="gs-content-js-share" 
     href="http://example.com/group/example_group" 
     title="Example Group">Share</a>

A link is turned into a *Share* button by applying the ``GSShareBox`` class
to it::

  <script type="text/javascript">
    jQuery.noConflict();
    jQuery(document).ready(function(){
      var public = true;
      jQuery('.gs-content-js-share').each(function () {
        shareWidget = GSShareBox(this, public);
        shareWidget.init();
      });
    });
  </script>

The constructor for the ``GSShareBox`` class takes two arguments.

``button``:
  The link to be turned into a share button.

``public``: 
  A Boolean, set to ``true`` if the link can be shared publicly. Social
  networks can only share links that are public. If the link is private
  then only the URL will be shown.

The ``init`` method is called to complete the setup.

Resources
=========

- Code repository: https://source.iopen.net/groupserver/gs.content.js.sharebox
- Questions and comments to http://groupserver.org/groups/development
- Report bugs at https://redmine.iopen.net/projects/groupserver

.. _GroupServer: http://groupserver.org/
.. _jQuery.UI: http://jqueryui.com/
.. _Facebook: http://facebook.com/
.. _Twitter: http://twitter.com/
.. _Google+: https://plus.google.com/
.. _Digg: http://digg.com/

..  LocalWords:  minified
