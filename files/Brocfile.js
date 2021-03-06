/* global require, module */

var path = require('path');
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var mergeTrees = require('broccoli-merge-trees');
var pickFiles = require('broccoli-static-compiler');

var app = new EmberApp({
  inlineContent: {
    'google-map' : {
      content: '<script src="//maps.googleapis.com/maps/api/js?signed_in=true&libraries=geometry"></script>'
    }
  }
});

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

importAssets(app, app.bowerDirectory, [
  'bootstrap/dist/js/bootstrap.js',
  'toastr/toastr.js'
]);

// Copy fontawesome fonts
var fonts = pickFiles(app.bowerDirectory + '/fontawesome/fonts', {
  srcDir: '/',
  files: ['**/*'],
  destDir: '/assets/fonts'
});

module.exports = mergeTrees([app.toTree(), fonts]);

function importAssets(app, baseUrl, urls) {
  urls.forEach(function (url) {
    app.import(path.join(baseUrl, url));
  });
}
