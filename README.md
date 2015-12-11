# @ebay/jquery-prevent-document-scroll-keys

<p>
    <a href="https://travis-ci.org/ianmcburnie/jquery-prevent-document-scroll-keys"><img src="https://api.travis-ci.org/ianmcburnie/jquery-prevent-document-scroll-keys.svg?branch=master" alt="Build Status" /></a>
    <a href='https://coveralls.io/github/ianmcburnie/jquery-prevent-document-scroll-keys?branch=master'><img src='https://coveralls.io/repos/ianmcburnie/jquery-prevent-document-scroll-keys/badge.svg?branch=master&service=github' alt='Coverage Status' /></a>
</p>

Prevent main page scroll when pressing any scroll key (e.g. down arrow, spacebar) with focus on given selector.

```js
$(selector).preventDocumentScrollKeys();
```

## Experimental

This plugin is still in an experimental state, until it reaches v1.0.0 you must consider all minor releases as breaking changes. Patch releases may introduce new features, but will be backwards compatible.

Please use the tilde range specifier in your package.json to pin to a fixed major and minor version.

## Install

```js
npm install @ebay/jquery-prevent-document-scroll-keys --save
```

## Example

```js
$('.tabs [role=tab]').preventDocumentScrollKeys();
```

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
