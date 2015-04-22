module.exports = {
  // These are the default scenarios for ember-try
  scenarios: [
    {
      name: 'default',
      /* no dependencies needed as the
       * default is already specified in
       * the consuming app's bower.json
       */
      dependencies: {}
    }, {
      name: 'ember-release',
      dependencies: {
        ember: 'release'
      }
    }, {
      name: 'ember-beta',
      dependencies: {
        ember: 'beta'
      }
    }, {
      name: 'ember-canary',
      dependencies: {
        ember: 'canary'
      }
    }
  ]
};
