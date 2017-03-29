selector perf test
==================

Clone, open test.html locally, look at console.log.

## Set-up

* 1,000 nodes written to the page with a shared selector and a unique selector
* Tests begin on `DOMContentLoaded` and use the [Performance API](https://developer.mozilla.org/en-US/docs/Web/API/Performance) to measure

## Four tests

1.   Query for 1 node with shared selector and unique attribute value (`document.querySelectorAll('[data-test="1000"]')`)
2.   Query for 1 node with unique selector (`document.querySelectorAll('[data-test-1000]')`)
3.   Query for 1,000 nodes with shared selector (`document.querySelectorAll('[data-test]')`)
4.   Query for 1,000 nodes with unique selectors (`document.querySelectorAll('[data-test-1], [data-test-2], [data-test-3], ... [data-test-1000]')`)

## Build

If you want to do this for some reason.

* `npm install`
* `npm run build`
