.. _api:

:mod:`gs.content.js.sharebox` API
=================================

.. highlight:: xml


HTML
----

Within the document the URLs to share are ``<a>`` elements. The
links to be shared need a ``title`` attribute, an ``href``
attribute, and content.

``title``: 
  The ``title`` attribute becomes the title of the popup widget.

``href``:
  The ``href`` attributed contains the URL to share.

Link content:
  The content of the link-element will become the text of the
  share-button that activates the popup.

Example
~~~~~~~

The following will create a button to share the link to the
example group::

  <a class="gs-content-js-share" 
     href="http://groups.example.com/group/example_group" 
     title="Example Group">Share</a>


JavaScript
----------

The JavaScript for the *Share* dialog is contained in a resource::

  <script 
    type="text/javascript"
    src="/++resource++gs-content-js-sharebox-20151112.js"> </script>

Or a minified version::

  <script 
    type="text/javascript"
    src="/++resource++gs-content-js-sharebox-min-20151112.js"> </script>

The resource contains the :js:class:`GSShareBox` class:

.. js:class:: GSShareBox(button, public)

   :param jQuery button: The link to be turned into a
                                 share button.

   :param bool public: Set to ``true`` if the link can be shared
                       publicly. (Social networks can only share
                       links that are public. If the link is
                       private then only the URL will be shown.)

   .. js:function:: init()

      Complete the setup.

Example
~~~~~~~

The following turns all elements on the page that have the
``gs-content-js-share`` CSS-class into share buttons. It does
this by applying the ``GSShareBox`` class to them after the
window has loaded.

.. code-block:: javascript

    jQuery.noConflict();
    jQuery(window).load(function(){
      var public = true;
      jQuery('.gs-content-js-share').each(function () {
        shareWidget = GSShareBox(this, public);
        shareWidget.init();
      });
    });
