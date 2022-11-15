const blackCat = {
  dom: document.querySelector('.black-cat-jumpscare'),

  areas: ['window', 'cam2-floor', 'cam2-window'],

  _is: 'outside',
  get is() { return this._is },
  set is(value) {
    this._is = value

    // Reset all cams
    url.cam2, url.lookingWindow = urlBase.cam2, urlBase.lookingWindow
    // Glitches
    camera.index = 0

    switch (value) {
      case 'cam2-window':
        url.lookingWindow = url.lookingWindowBlackCat
        url.cam2 = url.cam2blackCatOnWindow
        break

      case 'cam2-floor':
        url.cam2 = url.cam2BlackCatOnFloor
        break

      case 'window':
        url.lookingWindow = url.lookingWindowBlackCatInside
        break

      default: break
    }
  },

  waitingToAttack: false,
  readyToAttack: false,
  rushingToAttack: false,

  start() {
    this.moveInterval = setInterval(this.move, moveTime)
  },
  move() {
    if (this.waitingToAttack || this.readyToAttack || this.rushingToAttack) return

    this.is = this.randomArea()
    if (this.is === 'window') this.startCounter()
  },
  randomArea() {
    this.areas[Math.floor(Math.random() * this.areas.length)]
  },
  startCounter() {
    this.waitingToAttack = true

    setTimeout(e => {
      if (!this.waitingToAttack) return

      // STOP MOVING
      clearInterval(this.moveInterval)
      this.readyToAttack = true

      setTimeout(e => { this.rushingToAttack = true }, rushToAttackTime)
    }, waitToAttackTime)
  },
  jumpScare() {
    noButton()
    audio.surprise.play()
    vis(this.dom)
    this.dom.style.animation = anim.jump

    this.dom.addEventListener('animationend', e => {
      audio.jsAudio.play()
      this.dom.style.animation = anim.scare
    })
  }
}

setTimeout(blackCat.start, catsDelay)