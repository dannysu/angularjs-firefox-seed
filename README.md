Note this project is only here to demonstrate Angular.js bug filed [here][1].
You could use it as a starting point, but you'll need to read the Angular.js issue to get it fully working.

Requirements:
 - [node.js & npm][3]
 - [bower][2]

Steps:

 - cd data/angular-seed
 - npm install
 - rm -rf node_modules
 - Download Firefox Addon SDK: https://addons.mozilla.org/en-US/developers/builder
 - Unzip the addon SDK
 - cd into the addon sdk directory
 - source bin/activate
 - cd back to angularjs-firefox-seed
 - cfx run

Without workaround mentioned in the [issue][1], notice there are lots of output about $digest loop.

  [1]: https://github.com/angular/angular.js/issues/7171
  [2]: http://bower.io
  [3]: http://nodejs.org/
