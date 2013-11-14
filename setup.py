# -*- coding: utf-8 -*-
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
        "Operating System :: OS Independent"
        "Programming Language :: JavaScript",
        "Topic :: Internet :: WWW/HTTP :: Dynamic Content",
        "Topic :: Software Development :: Libraries :: JavaScript Modules",
      ],
      keywords='share facebook twitter email groupserver',
      author='Richard Waid',
      author_email='richard@onlinegroups.net',
      url='http://www.groupserver.org/',
      license='ZPL 2.1',
      packages=find_packages(exclude=['ez_setup']),
      namespace_packages=['gs'],
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
