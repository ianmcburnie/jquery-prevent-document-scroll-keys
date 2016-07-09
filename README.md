# jquery-prevent-document-scroll-keys

<p>
    <a href="https://travis-ci.org/ianmcburnie/jquery-prevent-document-scroll-keys"><img src="https://api.travis-ci.org/ianmcburnie/jquery-prevent-document-scroll-keys.svg?branch=master" alt="Build Status" /></a>
    <a href='https://coveralls.io/github/ianmcburnie/jquery-prevent-document-scroll-keys?branch=master'><img src='https://coveralls.io/repos/ianmcburnie/jquery-prevent-document-scroll-keys/badge.svg?branch=master&service=github' alt='Coverage Status' /></a>
    <a href="https://david-dm.org/ianmcburnie/jquery-prevent-document-scroll-keys"><img src="https://david-dm.org/ianmcburnie/jquery-prevent-document-scroll-keys.svg" alt="Dependency status" /></a>
    <a href="https://david-dm.org/ianmcburnie/jquery-prevent-document-scroll-keys#info=devDependencies"><img src="https://david-dm.org/ianmcburnie/jquery-prevent-document-scroll-keys/dev-status.svg" alt="devDependency status" /></a>
</p>

Prevent main page scroll when pressing any scroll key (e.g. down arrow, spacebar) with focus on given selector.

```js
$(selector).preventDocumentScrollKeys();
```

<h2>WARNING: Deprecation Notice</h2>

This plugin is deprecated and scheduled for removal from NPM. Please use `jquery-prevent-scroll-keys` instead.

## Experimental

This plugin is still in an experimental state, until it reaches v1.0.0 you must consider all minor releases as breaking changes. Patch releases may introduce new features, but will be backwards compatible.

## Install

<strike>
```
npm install @ebay/jquery-prevent-document-scroll-keys
```
</strike>

```js
npm install jquery-prevent-document-scroll-keys
```

**NOTE: The @ebay package scope is no longer supported. In order to receive latest NPM updates, please use the non-scoped version of this package.**

## Example

```js
$('.tabs [role=tab]').preventDocumentScrollKeys();
```

## Dependencies

* [jquery](https://jquery.com/)
* [jquery-common-keydown](https://github.com/ianmcburnie/jquery-common-keydown)

## Development

Run `npm start` for test driven development. All tests are located in `test.js`.

Execute `npm run` to view all available CLI scripts:

* `npm start` test driven development: watches code and re-tests after any change
* `npm test` runs tests & generates reports (see reports section below)
* `npm run lint` lints code and reports to jshint.txt
* `npm run minify` builds minified version of code
* `npm run build` cleans, lints, tests and minifies (called on `npm prepublish` hook)
* `npm run clean` deletes all generated test reports and coverage files

## Reports

Each test run will generate the following reports:

* `/test_reports/coverage` contains Istanbul code coverage report
* `/test_reports/html` contains HTML test report
* `/test_reports/junit` contains JUnit test report

## CI Build

https://travis-ci.org/ianmcburnie/jquery-prevent-document-scroll-keys

## Code Coverage

https://coveralls.io/github/ianmcburnie/jquery-prevent-document-scroll-keys?branch=master
