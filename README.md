selector perf test
==================

Clone, open test.html locally, look at console.log.

## Set-up

* 1,000 nodes written to the page with a shared selector and a unique selector
* Tests begin on `DOMContentLoaded` and use the [Performance API](https://developer.mozilla.org/en-US/docs/Web/API/Performance) to measure

## Three tests

1.   Query for 1,000 nodes with shared selector (`document.querySelectorAll('[data-test]')`)
2.   Query for 1,000 nodes with unique selectors (`document.querySelectorAll('[data-test-1], [data-test-2], [data-test-3], ... [data-test-1000]')`)
3.   Init 1,000 bsp-utils plugins with current standard method

## Build

If you want to do this for some reason.

* `npm install`
* `npm run build`
