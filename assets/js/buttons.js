const cameraBtn = document.querySelector('.camera-btn')
const doorBtn = document.querySelector('.door-btn')
const doorLookBtn = document.querySelector('.door-look-btn')
const windowBtn = document.querySelector('.window-btn')
const windowLookBtn = document.querySelector('.window-look-btn')

// FUNCTION
function noButton() {
  inv(cameraBtn)
  inv(doorBtn)
  inv(windowBtn)
  inv(windowLookBtn)
  inv(doorLookBtn)
}
function allButtons() {
  vis(cameraBtn)
  vis(doorBtn)
  vis(windowBtn)
  vis(windowLookBtn)
  vis(doorLookBtn)
}
function attButtons() {
  if (camera.opened) {
    noButton()
    vis(cameraBtn)
    return
  }
  if (lookingTo === 'room') {
    allButtons()
    inv(windowLookBtn)
    inv(doorLookBtn)

    return
  }
  else if (lookingTo === 'door') {
    noButton()
    vis(windowBtn)
    vis(doorLookBtn)
  }
  else if (lookingTo === 'window') {
    noButton()
    vis(doorBtn)
    vis(windowLookBtn)
  }
}

// EVENT LISTENER
cameraBtn.addEventListener('mouseenter', e => { switchCam() })
doorBtn.addEventListener('mouseenter', e => { lookLeft() })
windowBtn.addEventListener('mouseenter', e => { lookRight() })
windowLookBtn.addEventListener('mousedown', e => { lookWindow() })
windowLookBtn.addEventListener('mouseup', e => { stopLookWindow() })
windowLookBtn.addEventListener('mouseout', e => { stopLookWindow() })
doorLookBtn.addEventListener('mousedown', e => { lookDoor() })
doorLookBtn.addEventListener('mouseup', e => { stopLookDoor() })
doorLookBtn.addEventListener('mouseout', e => { stopLookDoor() })