# -*- coding: utf-8 -*-
##############################################################################
#
# Copyright © 2013 OnlineGroups.net and Contributors.
# All Rights Reserved.
#
# This software is subject to the provisions of the Zope Public License,
# Version 2.1 (ZPL).  A copy of the ZPL should accompany this distribution.
# THIS SOFTWARE IS PROVIDED "AS IS" AND ANY AND ALL EXPRESS OR IMPLIED
# WARRANTIES ARE DISCLAIMED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
# WARRANTIES OF TITLE, MERCHANTABILITY, AGAINST INFRINGEMENT, AND FITNESS
# FOR A PARTICULAR PURPOSE.
#
##############################################################################
from setuptools import setup, find_packages
import os

from version import get_version

setup(name='gs.content.js.sharebox',
      version=get_version(),
      description="The Share dialog box for GroupServer.",
      long_description=open("README.txt").read() + "\n" +
                       open(os.path.join("docs", "HISTORY.txt")).read(),
      classifiers=[
        'Development Status :: 5 - Production/Stable',
        "Environment :: Web Environment",
        "Framework :: Zope2",
        "Intended Audience :: Developers",
        'License :: OSI Approved :: Zope Public License',
        "Natural Language :: English",
        "Operating System :: OS Independent",
        "Programming Language :: JavaScript",
        "Topic :: Internet :: WWW/HTTP :: Dynamic Content",
        "Topic :: Software Development :: Libraries :: JavaScript Modules",
      ],
      keywords='share, facebook, twitter, email, groupserver, url',
      author='Michael JasonSmith',
      author_email='mpj17@onlinegroups.net',
      url='http://source.iopen.net/groupserver/gs.content.js.sharebox/',
      license='ZPL 2.1',
      packages=find_packages(exclude=['ez_setup']),
      namespace_packages=['gs', 'gs.content', 'gs.content.js'],
      include_package_data=True,
      zip_safe=False,
      install_requires=[
          'setuptools',
          'gs.content.js.bootstrap',
      ],
      extras_require={'zope': ['zope.browserresource', 'zope.viewlet',
                               'gs.help']},
      entry_points="""
      # -*- Entry points: -*-
      """,
      )
