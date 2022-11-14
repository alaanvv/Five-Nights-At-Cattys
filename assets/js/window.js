// FUNCTION
function lookRight() {
  if (lookingTo === 'door') {
    noButton()
    animation(anim.leftToRoom[0], anim.leftToRoom[2])

    setTimeout(e => {
      lookingTo = 'room'
      attButtons()
    }, anim.leftToRoom[1])
  }
  
  if (lookingTo === 'room') {
    noButton()
    animation(anim.right[0], anim.right[2])

    setTimeout(e => {
      lookingTo = 'window'
      attButtons()
    }, anim.right[1])
  }
}

function lookWindow() {
  changeScreen('lookingWindow')
}
function stopLookWindow() {
  changeScreen('window')
}