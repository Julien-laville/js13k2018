export class Vertex {
  constructor(pos, type, opt) {
    this.pos = pos
    this.type = type
    this.opt = opt
    this.consumed = false
  }
  d() {
    ctx.fillStyle = '#fff'
    if(this.type === 'data') {
      if(this.consumed) {
        ctx.fillStyle = '#811'
      } else {
        ctx.fillStyle = '#0ff'
      }
      ctx.fillRect(this.pos.x * 30-5, this.pos.y * 30-5, 10, 10)
    } else if(this.type === 'gate') {
      ctx.beginPath()
      ctx.arc(this.pos.x * 30, this.pos.y * 30, 10, 0, Math.PI * 2)
      if(p.dataCount >= this.opt) {
        ctx.strokeStyle = "#294"
      } else {
        ctx.strokeStyle = "#911"
      }
      ctx.setLineDash([4,2,2,2])
      ctx.stroke()
    } else {
      ctx.beginPath()
      ctx.arc(this.pos.x * 30, this.pos.y * 30, 5, 0, Math.PI * 2)
      ctx.fill()
    }
  }
  consume() {
    this.consumed = true
  }

}