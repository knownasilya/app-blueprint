# app-blueprint

```sh
ember <new|init> [app-name] --blueprint https://github.com/knownasilya/app-blueprint.git
```

## Includes

* Bootstrap
* FontAwesome
* Less support ([ember-cli-less](https://www.npmjs.org/package/ember-cli-less))
* Browserify support ([ember-browserify](https://www.npmjs.org/package/ember-browserify))
* Notifications ([toastr](http://toastrjs.com))
  - `this.get('notify').success(..)` available in routes, controllers, and components
* Custom Titles Component ([ember-document-title](https://www.npmjs.com/package/ember-document-title))
* Matrix version testing `npm run testall` ([ember-try](https://www.npmjs.com/package/ember-try))
