const blackCat = {
  dom: document.querySelector('.black-cat-jumpscare'),
  surprise: new Audio('../assets/sound/surprise.mp4'),
  jsAudio: new Audio('../assets/sound/jumpscare.mp4'),

  areas: [
    'window',
    'cam2floor',
    'cam2window',
  ],

  _is: 'outside',

  get is() { return this._is },
  set is(value) {
    this._is = value

    url.cam2 = urlBase.cam2
    url.lookingWindow = urlBase.lookingWindow
    camera.index = 0

    switch (value) {
      case 'cam2window':
        url.lookingWindow = '../assets/img/lookingWindowBlackCat.png'
        url.cam2 = '../assets/img/cam2BlackCatOnWindow.gif'
        break

      case 'cam2floor':
        url.cam2 = '../assets/img/cam2BlackCatOnFloor.gif'
        break

      case 'window':
        url.lookingWindow = '../assets/img/lookingWindowBlackCatInside.png'
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

    if (this.is === 'window') this.startCounter()
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
    }, 10000)
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

blackCat.start()