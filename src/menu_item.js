export default class MenuItem {
  constructor(text, pos, current = false) {
    this.current = current
    this.pos = pos
    this.text = text
  }
  d() {
    if(this.current) {
      ctx.fillRect(this.pos.x, this.pos.y, 150, 50)
    }
    ctx.fillText(this.text, this.pos.x, this.pos.y)
  }
}