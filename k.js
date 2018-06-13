function k() {
  console.log('a')
  window.press = {}
  window.onkeydown = (e) => {
    press[e.keyCode] = true
  }
  window.onkeyup = (e) => {
    press[e.keyCode] = false
  }
  document.onmousedown = (e) => {
    if(e.button === 0) {
      press[0] = true
    }
    if(e.button === 2) {
      press[2] = true
    }
    e.preventDefault()
  }
}
k.UP = 90
k.LEFT = 81
k.DOWN = 83
k.RIGHT = 68

k.A = 16
k.B = 32

export default k