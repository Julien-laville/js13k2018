export class Vertex {
  constructor(pos, type, opt) {
    this.pos = pos
    this.type = type
    this.opt = opt
    this.consumed = false
  }

  de() {
    ctx.fillStyle = '#fff'
    if(this.type === 'data') {
      ctx.fillStyle = "#3ae2ff"
    } else if(this.type === 'gate') {
        ctx.fillStyle = "#50ff2b"
    } else if(this.type === 'end') {
        ctx.fillStyle = "#001eff"
    } else if(this.type === 'start') {
        ctx.fillStyle = "#fffa1c"
    } else if(this.type === 'ttl') {
        ctx.fillStyle = "#ff00a3"
    } else {
      ctx.fillStyle = "#ff9200"
    }
    ctx.beginPath()
    ctx.arc(this.pos.x * 30, this.pos.y * 30, 5, 0, Math.PI * 2)
    ctx.fill()
  }

  data(h) {
    return {id : this.pos.x + this.pos.y * h, t : this.type, th : this.opt}
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
        ctx.arc(this.pos.x * 30, this.pos.y * 30, 5, 0, Math.PI * 2)
        if (p.dataCount >= this.opt) {
            ctx.strokeStyle = "#294"
            ctx.fillStyle = "#294"
        } else {
            ctx.strokeStyle = "#911"
            ctx.fillStyle = "#911"
        }
        ctx.fill()
        ctx.beginPath()
        ctx.arc(this.pos.x * 30, this.pos.y * 30, 10, 0, Math.PI * 2)
        ctx.setLineDash([4, 2, 2, 2])
        ctx.stroke()
    } else if(this.type === 'end') {
        ctx.fillStyle = '#09127f'
        ctx.arc(this.pos.x * 30, this.pos.y * 30, 5, 0, Math.PI * 2)
        ctx.fill()
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