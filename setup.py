# -*- coding: utf-8 -*-
from setuptools import setup, find_packages
import os

from version import get_version

setup(name='gs.content.js.sharebox',
      version=get_version(),
      description="The Share dialog box for GroupServer.",
      long_description=open("README.txt").read() + "\n" +
                       open(os.path.join("docs", "HISTORY.txt")).read(),
      # Get more strings from http://www.python.org/pypi?%3Aaction=list_classifiers
      classifiers=[
        "Programming Language :: JavaScript",
        "Topic :: Software Development :: Libraries :: Python Modules",
        ],
      keywords='share facebook twitter email groupserver',
      author='Richard Waid',
      author_email='richard@onlinegroups.net',
      url='http://www.groupserver.org/',
      license='GPL',
      packages=find_packages(exclude=['ez_setup']),
      namespace_packages=['gs'],
      include_package_data=True,
      zip_safe=True,
      install_requires=[
          'setuptools',
          'zope.browserresource',
          'gs.content.js.bootstrap',
          'gs.content.js.jquery.base',
          'gs.help',
      ],
      entry_points="""
      # -*- Entry points: -*-
      """,
      )
