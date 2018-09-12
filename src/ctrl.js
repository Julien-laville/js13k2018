function k() {
  window.press = {}
  window.onkeydown = (e) => {
    press[e.keyCode] = true
  }
  window.onkeyup = (e) => {
    press[e.keyCode] = false
  }
}
k.UP = 38
k.LEFT = 37
k.DOWN = 40
k.RIGHT = 39

k.A = 17
k.B = 32
k.HELP = 72
k.RESET = 82
k.ESC = 27

export default k