const camera = {
  containerDOM: document.querySelector('#camera'),
  displayDOM: document.querySelector('.display'),
  cam1BtnDOM: document.querySelector('.cam1'),
  cam2BtnDOM: document.querySelector('.cam2'),

  opened: false,
  _index: '',

  set index(value) {
    if (this._index === value) return
    this._index = value

    if (value) this.animation = anim.camMove
    else this.animation = 'none'

    if (value === 1) this.background = 'cam1'
    else if (value === 2) this.background = 'cam2'
    else this.background = 'glitch'
  },
  get index() { return _index },

  set background(value) { this.displayDOM.style.backgroundImage = `url(${url[value]})` },
  set animation(anim) { this.displayDOM.style.animation = anim }
}

// FUNCTION
function switchCam() {
  if (camera.opened) closeCam()
  else openCam()
}

function openCam() {
  camera.opened = true
  camera.index = 0
  noButton()
  animation(anim.openCam, e => {
    attButtons()
    vis(camera.containerDOM)
  })
}
function closeCam() {
  camera.opened = false
  animation(anim.closeCam, e => {
    attButtons()
    screen.background = 'room'
    screen.animation = 'none'

    if (blackCat.rushToAttack) blackCat.jumpScare()
    if (whiteCat.rushToAttack) whiteCat.jumpScare()
  })
  inv(camera.containerDOM)
  noButton()
}

camera.cam1BtnDOM.addEventListener('click', e => camera.index = 1)
camera.cam2BtnDOM.addEventListener('click', e => camera.index = 2)