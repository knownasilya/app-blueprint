/*jshint node:true*/

var stringUtil = require('./utils/string');

module.exports = {
  description: 'knownasilya\'s blueprint for ember-cli projects.',

  locals: function(options) {
    var entity    = options.entity;
    var rawName   = entity.name;
    var name      = stringUtil.dasherize(rawName);
    var namespace = stringUtil.classify(rawName);
    //console.log(options);

    return {
      name: name,
      modulePrefix: name,
      namespace: namespace,
      emberCLIVersion: '0.2.3'
    };
  }
};
