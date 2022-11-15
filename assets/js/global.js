const anim = {
  openCam: 'openCam 500ms',
  closeCam: 'closeCam 400ms',
  camMove: 'camMove 5000ms ease-in-out alternate infinite',
  breath: 'breath 10000ms ease-in-out alternate infinite',
  left: 'left 750ms',
  leftToRoom: 'leftToRoom 750ms',
  right: 'right 750ms',
  rightToRoom: 'rightToRoom 750ms',
  jump: 'jump 200ms ease-out',
  scare: 'scare 200ms linear infinite alternate'
}

const urlBase = {
  // CAM
  glitch: '/assets/img/cam/glitch.gif',
  
  // CAM1
  cam1: '/assets/img/cam1/cam1.gif',
  cam1WhiteCatOnWindow: '/assets/img/cam1/cam1-whiteCatOnWindow.gif',
  cam1WhiteCatOnCam: '/assets/img/cam1/cam1-whiteCatOnCam.gif',
  
  // CAM2
  cam2: '/assets/img/cam2/cam2.gif',
  cam2blackCatOnWindow: '/assets/img/cam2/cam2-blackCatOnWindow.gif',
  cam2BlackCatOnFloor: '/assets/img/cam2/cam2-blackCatOnFloor.gif',
  
  // DOOR
  door: '/assets/img/door/door.png',
  lookingDoor: '/assets/img/door/lookingDoor.png',
  lookingDoorWhiteCat: '/assets/img/door/lookingDoor-whiteCat.png',

  // ROOM
  room: '/assets/img/room/room.png',
  
  // WINDOW
  window: '/assets/img/window/window.png',
  lookingWindow: '/assets/img/window/lookingWindow.png',
  lookingWindowBlackCat: '/assets/img/window/lookingWindow-blackCat.png',
  lookingWindowBlackCatInside: '/assets/img/window/lookingWindow-blackCatInside.png',
  
  // MISC
  none: 'none'
}
let url = {
  // CAM
  glitch: '/assets/img/cam/glitch.gif',
  
  // CAM1
  cam1: '/assets/img/cam1/cam1.gif',
  cam1WhiteCatOnWindow: '/assets/img/cam1/cam1-whiteCatOnWindow.gif',
  cam1WhiteCatOnCam: '/assets/img/cam1/cam1-whiteCatOnCam.gif',
  
  // CAM2
  cam2: '/assets/img/cam2/cam2.gif',
  cam2blackCatOnWindow: '/assets/img/cam2/cam2-blackCatOnWindow.gif',
  cam2BlackCatOnFloor: '/assets/img/cam2/cam2-blackCatOnFloor.gif',
  
  // DOOR
  door: '/assets/img/door/door.png',
  lookingDoor: '/assets/img/door/lookingDoor.png',
  lookingDoorWhiteCat: '/assets/img/door/lookingDoor-whiteCat.png',

  // ROOM
  room: '/assets/img/room/room.png',
  
  // WINDOW
  window: '/assets/img/window/window.png',
  lookingWindow: '/assets/img/window/lookingWindow.png',
  lookingWindowBlackCat: '/assets/img/window/lookingWindow-blackCat.png',
  lookingWindowBlackCatInside: '/assets/img/window/lookingWindow-blackCatInside.png',
  
  // MISC
  none: 'none'
}

const audio = {
  surprise: new Audio('/assets/audio/surprise.mp4'),
  jumpScare: new Audio('/assets/audio/jumpscare.mp4'),
  suspense: new Audio('/assets/audio/suspense.mp4')
}
audio.suspense.loop = true
audio.suspense.volume = 0.1

let lookingTo = 'room'
const catsDelay = 1000
const moveTime = 10000
const waitToAttackTime = 15000
const rushToAttackTime = 15000

// FUNCTION
function inv(element) {
  if ( Array.isArray(element) ) for (el of element) el.classList.add('display-none')
  else element.classList.add('display-none')
}
function vis(element) {
  if ( Array.isArray(element) ) for (el of element) el.classList.remove('display-none')
  else element.classList.remove('display-none')
}

// EVENT LISTENER
document.addEventListener('click', function soundTrack() {
  this.removeEventListener('click', soundTrack)
  
  audio.suspense.play()
})