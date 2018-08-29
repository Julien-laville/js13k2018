export class Edge {
  constructor(from, to, remaining) {
    this.from = from
    this.to = to
    this.remaining = remaining
    this.isUnlimited = remaining === -1
  }

  d() {
    ctx.beginPath()
    ctx.moveTo(this.from.x * 30, this.from.y * 30)
    ctx.lineTo(this.to.x * 30, this.to.y * 30)
    if(this.isUnlimited) {
      ctx.strokeStyle = "#78ff3b"
    } else if(this.remaining === 1) {
      ctx.strokeStyle = "#41c"
    } else if(this.remaining === 0){
      ctx.strokeStyle = "rgba(68,17,204,0.2)"
    }
    ctx.lineWidth = 5
    ctx.stroke()
  }



  consume() {
    this.remaining--
  }

  isAvailable() {
    return this.isUnlimited || this.remaining > 0
  }
}