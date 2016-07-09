# jquery-prevent-scroll-keys

<p>
    <a href="https://travis-ci.org/ianmcburnie/jquery-prevent-scroll-keys"><img src="https://api.travis-ci.org/ianmcburnie/jquery-prevent-scroll-keys.svg?branch=master" alt="Build Status" /></a>
    <a href='https://coveralls.io/github/ianmcburnie/jquery-prevent-scroll-keys?branch=master'><img src='https://coveralls.io/repos/ianmcburnie/jquery-prevent-scroll-keys/badge.svg?branch=master&service=github' alt='Coverage Status' /></a>
    <a href="https://david-dm.org/ianmcburnie/jquery-prevent-scroll-keys"><img src="https://david-dm.org/ianmcburnie/jquery-prevent-scroll-keys.svg" alt="Dependency status" /></a>
    <a href="https://david-dm.org/ianmcburnie/jquery-prevent-scroll-keys#info=devDependencies"><img src="https://david-dm.org/ianmcburnie/jquery-prevent-scroll-keys/dev-status.svg" alt="devDependency status" /></a>
</p>

Prevent scrolling when pressing any scroll key (e.g. down arrow, spacebar) with focus on given selector.

```js
$(delegateSelector).preventScrollKeys(delegateDescendantSelector);
```

## Experimental

This plugin is still in an experimental state, until it reaches v1.0.0 you must consider all minor releases as breaking changes. Patch releases may introduce new features, but will be backwards compatible.

## Install

```js
npm install jquery-prevent-scroll-keys
```

## Example

```js
$('.tabs').preventScrollKeys('[role=tab]');
```

## Dependencies

* [jquery](https://jquery.com/)

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

https://travis-ci.org/ianmcburnie/jquery-prevent-scroll-keys

## Code Coverage

https://coveralls.io/github/ianmcburnie/jquery-prevent-scroll-keys?branch=master
