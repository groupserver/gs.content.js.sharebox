.. _dialog:

Share dialog
============

The dialog is a Bootstrap_ Popover_. It is divided in two parts.

The first part is a list of *buttons* for various social media
services (currently Facebook_, Twitter_, and `Google+`_). These
buttons should only be shown available when the resource being
shared is visible to the **public** (an anonymous
viewer). Otherwise it encourages people to make a mistake by
sharing something that is not visible.

The second part is an ``<input>`` element, with the URL in
it. This allows people to copy and paste the URL for the object
that is being shared. It is always available (but the recipient
must have permission to view the URL).

.. _Bootstrap: http://getbootstrap.com/2.3.2/
.. _Popover: http://getbootstrap.com/2.3.2/javascript.html#popovers
.. _Facebook: https://www.facebook.com/
.. _Twitter: https://twitter.com/
.. _Google+: https://plus.google.com/
