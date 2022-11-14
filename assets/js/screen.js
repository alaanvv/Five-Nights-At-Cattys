const screen = {
  dom: document.querySelector('#screen'),

  set animation(value) {
    if (value === 'none') animation(...anim.breath)
    else this.dom.style.animation = value
  },
  set background(value) { this.dom.style.backgroundImage = value },

  addEventListener(e, f) { this.dom.addEventListener(e, f) }
}

// FUNCTION
function changeScreen(to) {
  if (to === 'undefined') { alert('not a bug, its a feature!'); to = 'none'}
  if (to !== 'none') to = `url(${url[to]})`
  screen.background = to
}

function animation(anim, endscreen) {
  if (endscreen !== '') {
    screen.addEventListener('animationend', function listener(e) { 
      changeScreen(endscreen)
      screen.dom.removeEventListener('animationend', listener)
    })
  }
  screen.animation = anim
}