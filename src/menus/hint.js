export default class Hint {
  constructor() {
    this.hints = [
      {m:'Press WASD or ZQSD for moving, SPACE for action H in game for help'},
      {m:'Press R to reset level'},
    ]
  }
  d() {
    if(this.active) {
      ctx.fillStyle = 'rgba(0,0,0,.5)'
      ctx.fillRect(20, C_HEIGHT - 60, 300, 50)
      ctx.fillStyle = '#fff'
      ctx.fillText(this.currentHint.m, 30, C_HEIGHT - 20)
    }
  }

  show(hint) {
    this.active = true
    if(this.hints[hint].used) {
      return false
    }
    this.currentHint = this.hints[hint]
    this.currentHint.used = true
    setTimeout(() => {this.active = false}, 5000)
    return true
  }

}