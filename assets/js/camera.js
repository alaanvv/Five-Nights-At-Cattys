const camera = {
  containerDOM: document.querySelector('#camera'),
  displayDOM: document.querySelector('.display'),
  cam1BtnDOM: document.querySelector('.cam1'),
  cam2BtnDOM: document.querySelector('.cam2'),
  
  opened: false,
  _index: '',
  cam: [],

  set index(value) {
    if (this._index === value) return
    this._index = value

    this.move = value
    
    if (value === 1) this.background = 'cam1'
    else if (value === 2) this.background = 'cam2'
    else this.background = 'glitch'
  },
  get index() {
    return _index
  },

  set background(value) {
    camera.displayDOM.style.backgroundImage = `url(${url[value]})`
  },

  set move(value) {
    if (value) {
      camera.displayDOM.style.animation = anim.camMove[0]
    }
    else { camera.displayDOM.style.animation = 'none' }
  }
}

// FUNCTION
function switchCam() {
  if (camera.opened) closeCam()
  else openCam()
}

function openCam() {
  camera.opened = true
  noButton()
  animation(anim.openCam[0], anim.openCam[2])

  setTimeout(e => {
    attButtons()
    camera.index = 0
    vis(camera.containerDOM)
  }, anim.openCam[1])
}

function closeCam() {
  camera.opened = false
  animation(anim.closeCam[0], anim.closeCam[2])
  inv(camera.containerDOM)
  noButton()
    
  setTimeout(e => {
    attButtons()
    screen.animation = 'none'
  }, anim.closeCam[1])
}

camera.cam1BtnDOM.addEventListener('click', e => camera.index = 1 )
camera.cam2BtnDOM.addEventListener('click', e => camera.index = 2 )