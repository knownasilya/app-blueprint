/*jshint node:true*/

var RSVP = require('rsvp');
var stringUtil = require('./utils/string');

module.exports = {
  description: 'knownasilya\'s blueprint for ember-cli projects.',

  locals: function(options) {
    var self = this;
    var entity = options.entity;
    var rawName = entity.name;
    var name = stringUtil.dasherize(rawName);
    var namespace = stringUtil.classify(rawName);
    //console.log(options);
    //debugger;

    return new RSVP.Promise(function (resolve, reject) {
      self.ui.prompt([{
        name: 'mapping',
        type: 'list',
        message: 'Which mapping library would you like to use?',
        choices: [
          'Google Maps',
          'Leaflet',
          'None'
        ],
        default: 1
      }], function (answers) {
        console.log(answers);
        var options = {
          mapping: answers.mapping,
          name: name,
          modulePrefix: name,
          namespace: namespace,
          emberCLIVersion: '0.2.3'
        };

        resolve(options);
      });
    });
  }
};
