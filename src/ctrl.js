function k() {
  window.press = {}
  window.onkeydown = (e) => {
    press[e.keyCode] = true
  }
  window.onkeyup = (e) => {
    press[e.keyCode] = false
  }
}
k.UP = 90
k.LEFT = 81
k.DOWN = 83
k.RIGHT = 68

k.A = 16
k.B = 32
k.HELP = 72
k.RESET = 82
k.ESC = 27

export default k