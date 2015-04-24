# app-blueprint

```sh
ember <new|init> [app-name] --blueprint https://github.com/knownasilya/app-blueprint.git
```

## Includes

* [Bootstrap]
* [FontAwesome]
* [Less] support ([ember-cli-less](https://www.npmjs.org/package/ember-cli-less))
* Animations ([liquid-fire](http://ef4.github.io/liquid-fire/))
  - See link above, and edit `app/transitions.js` for additional animations
* [Browserify] support ([ember-browserify](https://www.npmjs.org/package/ember-browserify))
  - Use `import somePackage from 'npm:some-package';`
* Notifications ([toastr](http://toastrjs.com))
  - `this.get('notify').success(..)` available in routes, controllers, and components
* Custom Titles Component ([ember-document-title](https://www.npmjs.com/package/ember-document-title))
* Matrix version testing `npm run testall` ([ember-try](https://www.npmjs.com/package/ember-try))

[Less]: http://lesscss.org/
[Bootstrap]: http://getbootstrap.com/
[FontAwesome]: http://fortawesome.github.io/Font-Awesome/
[Browserify]: http://browserify.org/
