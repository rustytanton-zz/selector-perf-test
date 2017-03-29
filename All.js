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

})
export {}
