# jquery-prevent-scroll-keys

<p>
    <a href="https://travis-ci.org/makeup-jquery/jquery-prevent-scroll-keys"><img src="https://api.travis-ci.org/makeup-jquery/jquery-prevent-scroll-keys.svg?branch=master" alt="Build Status" /></a>
    <a href='https://coveralls.io/github/makeup-jquery/jquery-prevent-scroll-keys?branch=master'><img src='https://coveralls.io/repos/makeup-jquery/jquery-prevent-scroll-keys/badge.svg?branch=master&service=github' alt='Coverage Status' /></a>
    <a href="https://david-dm.org/makeup-jquery/jquery-prevent-scroll-keys"><img src="https://david-dm.org/makeup-jquery/jquery-prevent-scroll-keys.svg" alt="Dependency status" /></a>
    <a href="https://david-dm.org/makeup-jquery/jquery-prevent-scroll-keys#info=devDependencies"><img src="https://david-dm.org/makeup-jquery/jquery-prevent-scroll-keys/dev-status.svg" alt="devDependency status" /></a>
</p>

Prevent scrolling when pressing any scroll key (e.g. down arrow, spacebar) with focus on given selector.

```js
$(delegateSelector).preventScrollKeys(delegateDescendantSelector);
```

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

Useful NPM task runners:

* `npm start` for local browser-sync development.
* `npm test` runs tests & generates reports (see reports section below)
* `npm run tdd` test driven development: watches code and re-tests after any change
* `npm run build` cleans, lints, tests and minifies

Execute `npm run` to view all available CLI scripts.

## Reports

Each test run will generate the following reports:

* `/test_reports/coverage` contains Istanbul code coverage report
* `/test_reports/html` contains HTML test report
* `/test_reports/junit` contains JUnit test report

## CI Build

https://travis-ci.org/makeup-jquery/jquery-prevent-scroll-keys

## Code Coverage

https://coveralls.io/github/makeup-jquery/jquery-prevent-scroll-keys?branch=master
