const anim = {
  openCam:  ['openCam 750ms', 750, 'none'],
  closeCam: ['closeCam 750ms', 750, 'room'],
  camMove:  ['camMove 5000ms ease-in-out alternate infinite', 5000, '',],
  breath:   ['breath 10000ms ease-in-out alternate infinite', 10000, ''],
  left:     ['left 500ms', 250, 'door'],
  leftToRoom:     ['leftToRoom 500ms', 250, 'room'],
  right:     ['right 500ms', 250, 'window'],
  rightToRoom:     ['rightToRoom 500ms', 250, 'room']
}

const url = {
  room: '../assets/img/room.png',

  glitch: '../assets/img/glitch.gif',
  cam1: '../assets/img/cam1.gif',
  cam2: '../assets/img/cam2.gif',

  door: '../assets/img/door.png',
  lookingDoor: '../assets/img/lookingDoor.png',

  window: '../assets/img/window.png',
  lookingWindow: '../assets/img/lookingWindow.png',
  
  none: 'none'
}

let lookingTo = 'room'