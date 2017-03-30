import bspUtils from 'bsp-utils'
import $ from 'jquery'

document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelectorAll('[data-test]').length !== 1000) {
    throw new Error('expecting 1000 divs to be found')
  }

  // caching element names first to simulate a plugin registry where names would be arbitrary
  let elNames = []
  for (let i = 1; i < 1001; i++) {
    elNames.push('[data-test-' + i + ']')
  }

  // test query selector all by single attribute
  window.performance.mark('test1-start')
  let singleLoaded = 0
  let divs1 = document.querySelectorAll('[data-test]')
  // loop through elements after fetching to make more comparable
  // to what is happening in bsp-utils
  divs1.forEach(() => {
    singleLoaded++
    if (singleLoaded >= 1000) {
      window.performance.mark('test1-end')
      window.performance.measure('test1-duration', 'test1-start', 'test1-end')
      console.log('query selector all by single attr = ', window.performance.getEntriesByName('test1-duration', 'measure')[0].duration)
    }
  })


  // test query selector by multiple attributes
  let selector2 = elNames.join(', ')
  window.performance.mark('test2-start')
  let divs2 = document.querySelectorAll(selector2)
  let multiLoaded = 0
  // loop through elements after fetching to make more comparable
  // to what is happening in bsp-utils
  divs2.forEach(() => {
    multiLoaded++
    if (multiLoaded >= 1000) {
      window.performance.mark('test2-end')
      window.performance.measure('test2-duration', 'test2-start', 'test2-end')
      console.log('query selector all by multiple attr = ', window.performance.getEntriesByName('test2-duration', 'measure')[0].duration)
    }
  })

  // test with bsp-utils (do this one last because it adds a bunch of classes to the DOM)
  let bspLoaded = 0
  window.performance.mark('test3-start')
  for (let i = 0; i < 1001; i++) {
    bspUtils.plugin(false, 'test', i, {
      '_each': function (item) {
        bspLoaded++
        if (bspLoaded >= 1000) {
          window.performance.mark('test3-end')
          window.performance.measure('test3-duration', 'test3-start', 'test3-end')
          console.log('loading with bsp util = ', window.performance.getEntriesByName('test3-duration', 'measure')[0].duration)
        }
      }
    })
  }

})
export {}
