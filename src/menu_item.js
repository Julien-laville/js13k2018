export default class MenuItem {
  constructor(item, pos, current = false) {
    this.current = current
    this.gameState = item.g
    this.pos = pos
    this.text = item.t
  }
  d() {
    ctx.font = '22px Arial'
    if(this.current) {
      ctx.fillStyle = "#fff"
      ctx.fillRect(this.pos.x-30, this.pos.y-30, 150, 50)
      ctx.fillStyle = "#000"
      ctx.fillText(this.text, this.pos.x, this.pos.y)
    } else {
      ctx.fillStyle = "#fff"
      ctx.fillText(this.text, this.pos.x, this.pos.y)
    }
  }
}