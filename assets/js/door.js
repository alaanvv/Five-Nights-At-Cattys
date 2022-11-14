// FUNCTION
function lookLeft() {
  if (lookingTo === 'room') {
    noButton()
    animation(anim.left[0], anim.left[2])
        
    setTimeout(e => {
      lookingTo = 'door'
      attButtons()
    }, anim.left[1])
  }
  
  if (lookingTo === 'window') {
    noButton()
    animation(anim.rightToRoom[0], anim.rightToRoom[2])
        
    setTimeout(e => {
      lookingTo = 'room'
      attButtons()
    }, anim.rightToRoom[1])
  }
}

function lookDoor() {
  changeScreen('lookingDoor')
}
function stopLookDoor() {
  changeScreen('door')
}