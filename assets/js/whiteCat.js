const whiteCat = {
  dom: document.querySelector('.white-cat-jumpscare'),
  surprise: new Audio('../assets/sound/surprise.mp4'),
  jsAudio: new Audio('../assets/sound/jumpscare.mp4'),

  areas: [
    'door',
    'cam1window',
    'cam1cam',
  ],

  _is: 'outside',

  get is() { return this._is },
  set is(value) {
    this._is = value

    url.cam1 = urlBase.cam1
    url.lookingDoor = urlBase.lookingDoor
    camera.index = 0

    switch (value) {
      case 'cam1window':
        url.cam1 = '../assets/img/cam1whiteCatOnWindow.gif'
        break

      case 'cam1cam':
        url.cam2 = '../assets/img/cam2whiteCatOnCam.gif'
        break

      case 'door':
        url.lookingDoor = '../assets/img/lookingDoorWhiteCat.png'
        break

      default: break
    }
  },

  rage: false,
  killer: false,
  instaKill: false,

  move() {
    if (this.rage) return

    this.is = this.random()

    if (this.is === 'door') this.startCounter()
  },
  random() {
    return this.areas[Math.floor(Math.random() * 4)]
  },

  start() {
    this.moveInt = setInterval(e => {
      this.move()
    }, 8000)
  },

  startCounter() {
    this.rage = true

    setTimeout(e => {
      if (this.rage) {
        this.killer = true
        clearInterval(this.moveInt)

        setTimeout(e => {
          this.instaKill = true
        }, 30000)
      }
    }, 20000)
  },

  jumpScare() {
    noButton()
    vis(this.dom)
    this.surprise.play()
    this.dom.style.animation = 'jump 200ms ease-out'
    
    this.dom.addEventListener('animationend', e => {
      this.jsAudio.play()
      this.dom.style.animation = 'scare 200ms linear infinite alternate'
    })
  }
}

whiteCat.start()