==========================
``gs.content.js.sharebox``
==========================
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
An interface for sharing documents
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

:Author: `Michael JasonSmith`_
:Contact: Michael JasonSmith <mpj17@onlinegroups.net>
:Date: 2013-11-14
:Organization: `GroupServer.org`_
:Copyright: This document is licensed under a
  `Creative Commons Attribution-Share Alike 3.0 New Zealand License`_
  by `OnlineGroups.Net`_.

Introduction
============

This product provide the *Share* dialog_ for GroupServer_. It provides a
JavaScript_ resource that allows a URL to be shared across many social
media networks.

Dialog
======

The dialog is a Bootstrap_ Popover_. It is divided in two parts.

*  The first part is a list of *buttons* for various social media services
   (currently Facebook_, Twitter_, `Google+`_, and Digg_). These buttons
   are available when the resource being shared is visible to the *public*
   (an anonymous viewer).

* The second part is an ``input`` element, with the URL in it. This allows
  people to copy and paste the URL for the object that is being shared. It
  is always available (but the recipient must have permission to view the
  URL).

JavaScript
==========

The JavaScript for the *Share* dialog is contained in a resource::

  <script type="text/javascript"
    src="/++resource++gs-content-js-sharebox-20131114.js">&#160;</script>

Or a minified version::

  <script type="text/javascript"
    src="/++resource++gs-content-js-sharebox-min-20131114.js">&#160;</script>

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
    jQuery(window).load(function(){
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
.. _GroupServer.org: http://groupserver.org/
.. _OnlineGroups.Net: https://onlinegroups.net
.. _Michael JasonSmith: http://groupserver.org/p/mpj17
.. _Creative Commons Attribution-Share Alike 3.0 New Zealand License:
   http://creativecommons.org/licenses/by-sa/3.0/nz/
.. _Boostrap: http://twitter.github.com/bootstrap
.. _Popover: http://twitter.github.com/bootstrap/javascript.html#popovers
.. _Facebook: http://facebook.com/
.. _Twitter: http://twitter.com/
.. _Google+: https://plus.google.com/
.. _Digg: http://digg.com/

..  LocalWords:  minified
