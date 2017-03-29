/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
document.addEventListener('DOMContentLoaded', () => {

  if (document.querySelectorAll('[data-test]').length !== 1000) {
    throw new Error('expecting 1000 divs to be found')
  }

  // test query selector by attr value
  window.performance.mark('test1-start')
  let divs = document.querySelectorAll('[data-test="1000"]')
  if (divs.length) {
    window.performance.mark('test1-end')
    window.performance.measure('test1-duration', 'test1-start', 'test1-end')
    console.log('query selector by attr value = ', window.performance.getEntriesByName('test1-duration', 'measure')[0].duration)
  } else {
    throw new Error('div-test-1000 not found')
  }

  // test query selector by attr name
  divs = document.querySelectorAll('div')
  window.performance.mark('test2-start')
  let divs2 = document.querySelectorAll('[data-test-1000]')
  if (divs2.length) {
    window.performance.mark('test2-end')
    window.performance.measure('test2-duration', 'test2-start', 'test2-end')
    console.log('query selector by attr name = ', window.performance.getEntriesByName('test2-duration', 'measure')[0].duration)
  } else {
    throw new Error('div-test-1000 not found')
  }

  // test query selector all by single attribute
  window.performance.mark('test3-start')
  let divs3 = document.querySelectorAll('[data-test]')
  if (divs3.length) {
    window.performance.mark('test3-end')
    window.performance.measure('test3-duration', 'test3-start', 'test3-end')
    console.log('query selector all by single attr = ', window.performance.getEntriesByName('test3-duration', 'measure')[0].duration)
  } else {
    throw new Error('div-test not found')
  }

  // test query selector by multiple attributes
  // caching element names first to simulate a plugin registry where names would be arbitrary
  let elNames = []
  for (let i = 1; i < 1001; i++) {
    elNames.push('[data-test-' + i + ']')
  }
  let selector4 = elNames.join(', ')
  window.performance.mark('test4-start')
  let divs4 = document.querySelectorAll(selector4)
  if (divs4.length) {
    window.performance.mark('test4-end')
    window.performance.measure('test4-duration', 'test4-start', 'test4-end')
    console.log('query selector all by multiple attr = ', window.performance.getEntriesByName('test4-duration', 'measure')[0].duration)
  } else {
    throw new Error('div-test not found')
  }

  console.log(window.performance.getEntriesByName('test4-duration', 'measure')[0])

})



/***/ })
/******/ ]);