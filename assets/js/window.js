// FUNCTION
function lookRight() {
  noButton()

  if (lookingTo === 'door') {
    animation(anim.leftToRoom, e => { attButtons(); changeScreen('room') })
    lookingTo = 'room'
  }
  else if (lookingTo === 'room') {
    animation(anim.right, e => { attButtons(); changeScreen('window') })
    lookingTo = 'window'
  }
}

function lookWindow() {
  changeScreen('lookingWindow')

  if (blackCat.is === 'window') {
    if (blackCat.waitingToAttack) blackCat.waitingToAttack = false
    if (blackCat.readyToAttack) blackCat.jumpScare()
  }
}
function stopLookWindow() { changeScreen('window') }