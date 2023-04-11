const toggle = document.querySelector('#menuchocolatte')
const menu = document.querySelector('#menu')
const input = document.querySelector('#searchVal')
const dDown = document.querySelector('.search_bar__drop_down')

document.addEventListener('click', (e) => {
  if (e.target.parentElement.id === 'menuchocolatte') {
    if (menu.classList.contains('hidden')) {
      menu.classList.replace('hidden', 'block')
    } else {
      menu.classList.replace('block', 'hidden')
    }
  } else if (e.target.id === 'searchVal' || input.value !== '') {
    if (dDown.classList.contains('hidden')) {
      dDown.classList.replace('hidden', 'flex')
    } else {
      dDown.classList.replace('flex', 'hidden')
    }
  } else {
    menu.classList.replace('block', 'hidden')
    dDown.classList.replace('flex', 'hidden')
  }
})

/* document.addEventListener('click', () => {
  if (menu.classList.contains('hidden')) {
    menu.classList.replace('hidden', 'block')
  }
})
 */

const searchInput = document.querySelector('#search-input')
searchInput.addEventListener('keydown', function (event) {
  if (event.code === 'Enter') {
    search()
  }
})
function search() {
  const input = searchInput.value
  window.location.href =
    'https://www.google.com/search?q=' +
    input +
    '&rlz=1C5CHFA_enNZ948NZ948&oq=' +
    input +
    '&aqs=chrome.0.69i59l2j46i175i199i433j46i199i291i433j46j0i433j0j69i60.875j0j9&sourceid=chrome&ie=UTF-8'
}
