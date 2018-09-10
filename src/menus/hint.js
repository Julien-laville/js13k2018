export default class Hint {
  constructor() {
    this.hints = [
      {m:'Press WASD or ZQSD for moving, SPACE for action H in game for help'},
      {m:'Press R to reset level'},
      {m:'Use [Z/W] & [S] to move Up and Down, Select with [Space]'},
      {m:'Use shift to place beacon, You will bring back to the beacon after 5 seconds'}
    ]
  }
  d() {
    if(this.active) {
      ctx.font="14px Arial"
      ctx.fillStyle = 'rgba(0,0,0,.5)'
      ctx.fillRect(20, C_HEIGHT - 60, 700, 50)
      ctx.fillStyle = '#fff'
      ctx.fillText(this.currentHint.m, 30, C_HEIGHT - 20)
    }
  }

  show(hint) {
    if(this.handle) {
      clearTimeout(this.handle)
    }
    this.active = true
    if(this.hints[hint].used) {
      return false
    }
    this.currentHint = this.hints[hint]
    this.currentHint.used = true
    this.handle = setTimeout(() => {this.active = false}, 15000)
    return true
  }

}